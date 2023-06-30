'use strict';
const nodemailer = require('nodemailer');

//const router = express.Router();

export default function handler(req, res) {
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
			user:  process.env.EMAIL_USER,
			pass:  process.env.EMAIL_PASSWORD,
		},
	});

	try {
		// SEND EMAIL
		let info = transporter.sendMail({
			from: email,
			to: process.env.EMAIL_PASSWORD,
			subject: subject,
			text: `
		            Name: ${name}
		            Phone: ${phone}
		            Email: ${email}

		            Message: ${message}
		        `,
		});

		console.log('Success:  %s', info.message);
		// res.status(200).json({ message: 'Email sent successfully!' });
	} catch (error) {
		console.log('Unsuccessful: ', JSON.stringify(error));
		// res.status(500).json({ message: 'Failed to send email.' });
	}
	//}
}
