'use client'
import Skills from '@/components/skills/skills.component'
import TransitionEffect from '@/components/transition-effect/transition-effect.component'


export default function SkillsPage() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between px-2'>
			<TransitionEffect />
            <Skills />
        </main>
    )
}