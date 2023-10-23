'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/navbar.component';
import TransitionEffect from '@/components/transition-effect/transition-effect.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<head>
				<title>De Sean Ward | Fullstack Software Engineer</title>
				<meta
					name='description'
					content='Code, Coffee, & Creativity'
				/>

				<link rel='manifest' href='/site.webmanifest'></link>
			</head>

			<body className={inter.className}>
				<Navbar />
				<TransitionEffect />
				{children}
				<ToastContainer />
			</body>
		</html>
	);
}
