import { error, redirect } from '@sveltejs/kit';
import { authenticate } from '@google-cloud/local-auth';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis'; 
import type { PageServerLoad } from './$types';
import { GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_SPREADSHEET_PAGE_NAME, GOOGLE_SHEETS_PRIVATE_KEY } from '$env/static/private'

// Steps to Connect Google Sheets API
// 1) Create Cloud Account and Project
// 2) Enable Google Sheets API
// 3) Create Service Account and Copy Email Address
// 4) Share Sheets Document with Email Address ^

// export const prerender = false;
// export const csr = false;
export const load: PageServerLoad = async ({fetch, }) => { 
    // authenticate the service account
    const googleAuth = new google.auth.JWT(
        GOOGLE_SHEETS_CLIENT_EMAIL,
        GOOGLE_SHEETS_SPREADSHEET_PAGE_NAME,
        GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
        'https://www.googleapis.com/auth/spreadsheets'
    );

    // google sheet instance
    const sheetInstance = await google.sheets({ version: 'v4', auth: googleAuth});
    const infoObjectFromSheet = await sheetInstance.spreadsheets.values.get({
        auth: googleAuth,
        spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
        range: `${GOOGLE_SHEETS_SPREADSHEET_PAGE_NAME}!A2:Z`
    });

    function transformData(data: any) {
        return data.map((entry: any) => ({
          name: entry[0],
          post: entry[1]
        }));
      }
    const formattedData = transformData(infoObjectFromSheet.data.values);
    console.clear()
    console.log(formattedData);
    
    // read data in the range in a sheet
    // const infoObjectFromSheet = await sheetInstance.spreadsheets.values.get({
    //     auth: googleAuth,
    //     spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
    //     range: `${GOOGLE_SHEETS_SPREADSHEET_PAGE_NAME}!A2:D2`
    // });
    
    // const valuesFromSheet = infoObjectFromSheet.data.values;
    // console.log(valuesFromSheet);
  
    return {
        formattedData
    }
};