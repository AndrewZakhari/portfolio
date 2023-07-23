import Header from '@/components/header'
import Loading from '@/components/loading'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <Projects />
      <Loading />
    </div>
  )
}
