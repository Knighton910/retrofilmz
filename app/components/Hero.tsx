import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center py-24 bg-[#e5dfcf]'>
       <div className="flex space-x-4 mt-10">
        
        <div className="bg-white shadow-lg rounded-lg p-2 w-64">
            <h2 className="text-2xl font-bold text-black">Music Video Director</h2>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-2 w-64">
            <h2 className="text-2xl font-bold text-black">Professional Video Editing</h2>
        </div>
        </div>
      <Image 
        src="/Podcast.png"
        alt='header image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5 mb-20'
      />

<Image 
        src="/2.png"
        alt='header image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5'
      />

      {/* Main Text */}
      <div className='flex flex-col text-center mx-auto max-w-[1260px] items-center justify-center pt-20 mb-10'>
        <h1 className='text-5xl sm:text-8x1 font-bold text-black tracking-tight'>The Youtube channel has over {""}
          <span className='bg-gradient-to-r from-[#ff1919] to-[#ff6347] text-transparent bg-clip-text'>
            30,000 views
          </span>
        </h1>
      </div>

      <Image 
        src="/brezzy.png"
        alt='header image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5'
      />

<Image 
        src="/director3.png"
        alt='artist image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5'
      />

<Image 
        src="/artist3.jpg"
        alt='artist image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5'
      />

<Image 
        src="/pop1.png"
        alt='artist image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5'
      />

<Image 
        src="/pop2.png"
        alt='artist image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5'
      />

<Image 
        src="/shades.jpg"
        alt='artist image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5'
      />

      <Image 
        src="/stone.png"
        alt='footer image'
        width={500}
        height={200}
        quality={100}
        priority
        className='mt-5'
      />
    </div>
  )
}

export default Hero