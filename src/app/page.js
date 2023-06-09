'use client'
import Main from '@/components/main/main.component'
import Navbar from '@/components/navbar/navbar.component'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-2'>
			<Navbar />
			<Main />
			
		</main>
	)
}
