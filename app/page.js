import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero/>
    </main>
  )
}
