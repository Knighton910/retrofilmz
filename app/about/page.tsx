import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
// import advice from "../assets/advice.gif";
import styles from './about.module.css'

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center py-24 bg-[#ecf0f3]">
        <h1 className="mt-10 text-4xl text-black">About Me</h1>

<Image
          src="/retro3.png"
          width={600}
          height={100}
          alt="chanz image"
          className="mt-10 mb-10"
        />

        <p className='text-center text-black text-lg px-6'>
          I am a young professional that learns from my mentors
          and i love connecting with clients and making new friends.
        </p>

        <Image
          src="/retroLogo.png"
          width={100}
          height={100}
          alt="chanz image"
          className="mt-10 mb-10"
        />
        
        <Image
          src="/logo5.png"
          width={350}
          height={100}
          alt="chanz image"
          className="mt-10 mb-10"
        />


        {/* <img src={advice} atl="advice" /> */}
      </div>
    </div>
  );
  }