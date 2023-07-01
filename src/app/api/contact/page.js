'use strict'
const nodemailer = require('nodemailer');

//const router = express.Router();

export default function handler(req, res) {
	const { name, phone, email, subject, message } = req.searchParams;
	
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
		let info = transporter.sendMail({
			from: `"My Contact Form" <${process.env.EMAIL_USER}>`,
			fromName: name,
			replyTo: `${name} <${email}>`,
			to: process.env.EMAIL_USER,
			subject: `Contact Form: ${subject}`,
			html: `
					Name: ${name}<br />
					Phone: ${phone}<br />
					Email: <b>${email}</b>
					
					<p><b>Re: ${subject}</b></p>

					<p>${message}</p>
			    `,
		});

		console.log('Success:  %s', info.message);
	} catch (error) {
		console.log('Unsuccessful: ', JSON.stringify(error));
	}
	//}
}
