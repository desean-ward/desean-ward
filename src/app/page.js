'use client';
import Main from '@/components/main/main.component';
import TransitionEffect from '@/components/transition-effect/transition-effect.component';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-2'>
			<TransitionEffect />
			<Main />
		</main>
	);
}
