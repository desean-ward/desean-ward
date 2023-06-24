'use client'
import Main from '@/components/main/main.component'
import TransitionEffect from '@/components/transition-effect/transition-effect.component'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'


export default function Home() {
	const path = usePathname()
	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-2'>
			<TransitionEffect />
			<Main />
		</main>
	)
}
