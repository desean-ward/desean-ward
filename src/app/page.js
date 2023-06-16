'use client'
import Main from '@/components/main/main.component'
import About from '@/components/about/about.component'
import Skills from '@/components/skills/skills.component'
import Projects from '@/components/projects/projects.component'
import Contact from '@/components/contact/contact.component'


export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between px-2'>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	)
}
