'use strict'
const nodemailer = require('nodemailer');

//const router = express.Router();

export default async function handler(req, res) {
	const { name, phone, email, subject, message } = req.searchParams;

	//! *********************** */
	console.log(name + ' ' + email);
	console.log(process.env.EMAIL_USER);
	console.log(process.env.EMAIL_PASSWORD);
	//! ********************** */

	/**
	 * **** CREATE THE TRANSPORTER ****
	 */
	let transporter = nodemailer.createTransport({
		host: 'smtp.titan.email',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
		tls: {
			// do not fail on invalid certs
			rejectUnauthorized: false,
		},
	});

	try {
		// SEND EMAIL
		let info = await transporter.sendMail({
			from: `My Contact Form <${process.env.EMAIL_USER}>`,
			fromName: name,
			replyTo: `${name} <${email}>`,
			to: process.env.EMAIL_USER,
			subject: subject,
			html: `
			        Name: ${name}<br />
					Phone: ${phone}<br />
					Email: ${email}<br /><br />
					
					Message: ${message}
			    `,
		});

		console.log('Success:  %s', info.messageId);
	} catch (error) {
		console.log('Unsuccessful: ', JSON.stringify(error));
	}
	//}
}
