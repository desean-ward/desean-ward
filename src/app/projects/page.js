'use client'
import Projects from '@/components/projects/projects.component'
import TransitionEffect from '@/components/transition-effect/transition-effect.component'

export default function ProjectsPage() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between px-2'>
			<TransitionEffect />
            <Projects />
        </main>
    )
}