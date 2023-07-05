const nodemailer = require('nodemailer');

//const router = express.Router();
console.log(process.env.NEXT_PUBLIC_EMAIL_USER);
export default async function handler(req, res) {
	const { name, phone, email, subject, message } = req.searchParams;
	/**
	 * **** CREATE THE TRANSPORTER ****
	 */
	let transporter = nodemailer.createTransport({
		host: 'smtp.titan.email',
		port: 465,
		secure: true,
		auth: {
			user: process.env.NEXT_PUBLIC_EMAIL_USER,
			pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
		},
		tls: {
			// do not fail on invalid certs
			rejectUnauthorized: false,
		},
	});

	const mailData = {
		from: `"My Contact Form" <${process.env.NEXT_PUBLIC_EMAIL_USER}>`,
		fromName: name,
		replyTo: `${name} <${email}>`,
		to: process.env.NEXT_PUBLIC_EMAIL_USER,
		subject: `Contact Form: ${subject}`,
		html: `
				Name: ${name}<br />
				Phone: ${phone}<br />
				Email: <b>${email}</b>
				
				<p><b>Re: ${subject}</b></p>

				<p>${message}</p>
			`,
	};

	try {
		await new Promise((res, rej) => {
			// SEND EMAIL
			// transporter.sendMail(mailData, (err, info) => {
			// 	if (err) {
			// 		console.log(err)
			// 		rej(err)
			// 	} else {
			// 		console.log(info)
			// 		res(info)
			// 	}
			// })

			transporter.sendMail(mailData);

			res.status(200).json({ status: 'OK' });
			return 'success';
		});
	} catch (error) {
		return 'fail';
	}
}
