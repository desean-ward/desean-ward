'use strict';
const nodemailer = require('nodemailer');

//const router = express.Router();

export default async function handler(req, res) {
	const { name, phone, email, subject, message } = req.searchParams;

	//! *********************** */
	console.log(name);
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
			rejectUnauthorized: false
		},
	});

	try {
		// SEND EMAIL
		let info = await transporter.sendMail({
			from: email,
			to: process.env.EMAIL_USER,
			subject: subject,
			html: `
		            Name: ${name}
		            Phone: ${phone}
		            Email: ${email}

		            Message: ${message}
		        `,
		});

		console.log('Success:  %s', info.messageId);
	} catch (error) {
		console.log('Unsuccessful: ', JSON.stringify(error));
	}
	//}
}
