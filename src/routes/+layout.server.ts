import { error } from '@sveltejs/kit';
import { google } from 'googleapis'; 
import type { LayoutServerLoad } from './$types';
import { GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SHEETS_CLIENT_EMAIL, GOOGLE_SHEETS_SPREADSHEET_PAGE_NAME, GOOGLE_SHEETS_PRIVATE_KEY } from '$env/static/private'
import { updateBlogPosts, type BlogPost } from '../stores/blogStore';

export const load: LayoutServerLoad = async ({ params }) => {
    
        // 1) Authenticate the service account
        const googleAuth = new google.auth.JWT(
            GOOGLE_SHEETS_CLIENT_EMAIL,
            GOOGLE_SHEETS_SPREADSHEET_PAGE_NAME,
            GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            'https://www.googleapis.com/auth/spreadsheets'
        );
        
        // 2) Get Google Sheet Instance
        const sheetInstance = await google.sheets({ version: 'v4', auth: googleAuth});
        const infoObjectFromSheet = await sheetInstance.spreadsheets.values.get({
            auth: googleAuth,
            spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
            range: `${GOOGLE_SHEETS_SPREADSHEET_PAGE_NAME}!A2:Z`
        });

        // 3) Format Data
        const formattedData = infoObjectFromSheet.data.values!.map((entry: any, index: number): BlogPost => ({
            id: index + 1,
            title: entry[0],
            date: entry[1],
            category: entry[2],
            image: entry[3],
            link: entry[4],
            text: entry[5],
          }));

        console.clear();
        // console.log('Formatted Data:', formattedData);
        updateBlogPosts(formattedData)

        return {formattedData}
};