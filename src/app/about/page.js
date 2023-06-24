'use client'
import About from '@/components/about/about.component'
import TransitionEffect from '@/components/transition-effect/transition-effect.component'

export default function AboutPage() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between px-2'>
			<TransitionEffect />
            <About />
        </main>
    )
}