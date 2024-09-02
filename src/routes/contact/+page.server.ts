import { format } from 'date-fns';
import nodemailer from 'nodemailer';

// TODO: DO Vite & PreRendering research
export const prerender = false;

// 
let formSubmitted = false;
const formattedDate = format(new Date(), 'MMMM do, yyyy');

async function submitFormData(name: string, email: string, message: string) {
    console.clear()
    console.log('FROM SERVER: Form Submitted');
    console.log('Date:', formattedDate);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Send Email
    let subject = 'AM Template Email';
    if(!formSubmitted) {
      formSubmitted = true;
      sendEmail(email, subject, message)

      setTimeout(() => {
        formSubmitted = false;
      }, 1000);
    } else {

    }
    return;
}

// Email
const transporter = nodemailer.createTransport({   
  host:   'smtp.gmail.com', // e.g., 'smtp.gmail.com'
  port: 587, // or the appropriate port for your provider
  secure: false, // true for 465, false for other ports
  auth: {
      user: 'eddielacrosse2@gmail.com',
      pass: 'kakx alqa trcr kjnn'
  }
});

async function sendEmail(to: string, subject: string, text: string) {
  try {
    const mailOptions = {
      from: 'eddielacrosse2@gmail.com',
      to,
      subject,
      text
    };
    transporter.verify((error, success) => {
      if (success) { // Email is valid
        transporter.sendMail(mailOptions);
        console.log('Email sent:', success);
      } else { // Email is invalid
        console.error('Invalid email address:', mailOptions.to);
        console.log(error);
        throw new Error('Invalid email address'); // Or handle the error in a way suitable for your application
      }

    });

  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Or handle the error in a way suitable for your application
  }
}

export const actions = {
	default: async ({ request }) => {  
	  console.clear();
	  console.log('Sending Contact Message:');

      try {
        const data = await request.formData();
        const name = data.get('name') as string;
        const email = data.get('email') as string;
        const message = data.get('message') as string;
        console.log('Form data:', { name, email, message });
  
        if(name == '' || email == '' || message == '') {
            // Toast
            return console.log('Please fill out entire form');
        }
        
        submitFormData(name, email, message);
        return { success: true };
        
      } catch (error) {
        throw error;
      }
	},
  test: async ({request}) => {
	  console.clear();
	  console.log('test action');
	  console.log(request);
  }
}
