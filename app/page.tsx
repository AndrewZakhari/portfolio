'use client'
import Contact from '@/components/contact'
import Header from '@/components/header'

import Projects from '@/components/projects'
import Services from '@/components/services'
import Skills from '@/components/skills'


export default function Home() {
  
  return (
    <div className='bg-black'>
      
      <Header />
      <Skills />
      <Projects />
      <Services />  
      <Contact />

    </div>
  )
}
