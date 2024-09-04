import { error } from '@sveltejs/kit';
import { google } from 'googleapis'; 
import type { LayoutServerLoad } from './$types';
import { 
    GOOGLE_SHEETS_SPREADSHEET_ID, 
    GOOGLE_SHEETS_CLIENT_EMAIL, 
    GOOGLE_SHEETS_SPREADSHEET_BLOGS_PAGE, 
    GOOGLE_SHEETS_SPREADSHEET_META, 
    GOOGLE_SHEETS_SPREADSHEET_LANDING_PAGE, 
    GOOGLE_SHEETS_SPREADSHEET_EMAIL_LIST, 
    GOOGLE_SHEETS_PRIVATE_KEY 
} from '$env/static/private'
import { updateBlogPosts, type BlogPost } from '../stores/blogStore';

export const load: LayoutServerLoad = async ({ params }) => {
    
        // 1) Authenticate the service account for Blogs
        const googleAuthBlog = new google.auth.JWT(
            GOOGLE_SHEETS_CLIENT_EMAIL,
            GOOGLE_SHEETS_SPREADSHEET_BLOGS_PAGE,
            GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            'https://www.googleapis.com/auth/spreadsheets'
        );
        const googleAuthMeta = new google.auth.JWT(
            GOOGLE_SHEETS_CLIENT_EMAIL,
            GOOGLE_SHEETS_SPREADSHEET_META,
            GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            'https://www.googleapis.com/auth/spreadsheets'
        );
        
        const googleAuthEmailList = new google.auth.JWT(
            GOOGLE_SHEETS_CLIENT_EMAIL,
            GOOGLE_SHEETS_SPREADSHEET_EMAIL_LIST,
            GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            'https://www.googleapis.com/auth/spreadsheets'
        );
        
        const googleAuthLanding = new google.auth.JWT(
            GOOGLE_SHEETS_CLIENT_EMAIL,
            GOOGLE_SHEETS_SPREADSHEET_LANDING_PAGE,
            GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
            'https://www.googleapis.com/auth/spreadsheets'
        );
        
        // 2) Get Google Sheet Instances
        // Blogs
        const blogSheetInstance = await google.sheets({ version: 'v4', auth: googleAuthBlog});
        const blogs = await blogSheetInstance.spreadsheets.values.get({
            auth: googleAuthBlog,
            spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
            range: `${GOOGLE_SHEETS_SPREADSHEET_BLOGS_PAGE}!A2:Z`
        });
        // Landing Page
        const landingPageSheetInstance = await google.sheets({ version: 'v4', auth: googleAuthLanding});
        const landingPageData = await landingPageSheetInstance.spreadsheets.values.get({
            auth: googleAuthLanding,
            spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
            range: `${GOOGLE_SHEETS_SPREADSHEET_LANDING_PAGE}!A2:Z`
        });
        // Meta
        const MetadataPageSheetInstance = await google.sheets({ version: 'v4', auth: googleAuthMeta});
        const Metadata = await MetadataPageSheetInstance.spreadsheets.values.get({
            auth: googleAuthMeta,
            spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
            range: `${GOOGLE_SHEETS_SPREADSHEET_META}!A2:Z`
        });

        // 3) Format Data
        const formattedBlogs = blogs.data.values!.map((entry: any, index: number): BlogPost => ({
            id: index + 1,
            title: entry[0],
            date: entry[1],
            category: entry[2],
            image: entry[3],
            link: entry[4],
            text: entry[5],
          }));

        interface Metadata {
            adminEmail: string,
            siteLogo: string,
        }
        const formattedMetadata = Metadata.data.values!.map((entry: any, index: number): Metadata => ({
            adminEmail: entry[0],
            siteLogo: entry[1],
          }));

        interface LandingPageData {
            // A
            ctaHeader: string,
            // B
            featuredBlogOne: string,
            // C
            featuredBlogTwo: string,
            // D
            featuredBlogThree: string,
            // E
            about: string,
            // F
            heroSectionPhoto: string,
            // G
            aboutSectionPhoto: string
        }
        const formattedLandingPageData = landingPageData.data.values!.map((entry: any, index: number): LandingPageData => ({
            ctaHeader: entry[0],
            featuredBlogOne: entry[1],
            featuredBlogTwo: entry[2],
            featuredBlogThree: entry[3],
            about: entry[4],
            heroSectionPhoto: entry[4],
            aboutSectionPhoto: entry[5],
          }));

        console.clear();
        // TODO: Make MetaData Store?
        // TODO: Landing Page
        console.log('Formatted Landing:', formattedLandingPageData);
        console.log('Formatted Meta:', formattedMetadata);
        updateBlogPosts(formattedBlogs)

        return {formattedBlogs, formattedLandingPageData}
};