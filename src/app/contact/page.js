'use client'
import Contact from '@/components/contact/contact.component'
import TransitionEffect from '@/components/transition-effect/transition-effect.component'

export default function ContactPage() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between px-2'>
			<TransitionEffect />
            <Contact />
        </main>
    )
}