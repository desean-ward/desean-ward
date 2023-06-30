'use strict';
import express from 'express';
const nodemailer = require('nodemailer');

const router = express.Router();

console.log(process.env.EMAIL_USER);
console.log('INSIDE HANDLER');
router.post('/contact', async (req, res) => {
	if (req.method === 'POST') {
		const { name, phone, email, subject, message } = req.data;
		/**
		 * **** CREATE THE TRANSPORTER ****
		 */
		const transporter = nodemailer.createTransport({
			host: 'smtp.titan.email',
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		try {
			// SEND EMAIL
			await transporter.sendMail({
				from: 'dward1711@yahoo.com', //email,
				to: process.env.EMAIL_USER,
				subject: 'Testing API', // subject,
				// text: `
                //     Name: ${name}
                //     Phone: ${phone}
                //     Email: ${email}
                //     Message: ${message}
                // `,
                text: 'This is a test'
			});

			//res.status(200).json({ message: 'Email sent successfully!' });
			//console.log(req);
            console.log('Success');
		} catch (error) {
			//res.status(500).json({ message: 'Failed to send email.' });
			//console.log(req);
            console.log(JSON.stringify(error))
		}
	}
})
