'use client'
import Header from '@/components/header'
import Loading from '@/components/loading'
import Projects from '@/components/projects'
import Services from '@/components/services'
import Skills from '@/components/skills'
import Image from 'next/image'

export default function Home() {
  
  return (
    <div className='bg-black'>
      
      <Header />
      <Skills />
      <Projects />
      <Services />  

    </div>
  )
}
