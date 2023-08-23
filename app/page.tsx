'use client'
import Cert from '@/components/cert'
import Contact from '@/components/contact'
import Header from '@/components/header'

import Projects from '@/components/projects'
import Services from '@/components/services'
import Skills from '@/components/skills'


export default function Home() {
  
  return (
    <div className='bg-black  overflow-x-hidden'>
      
      <Header />
      <Skills />
      <Projects />
      <Services />  
      <Contact />
      <Cert />

    </div>
  )
}
