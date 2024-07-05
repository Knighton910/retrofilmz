import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
// import advice from "../assets/advice.gif";
import styles from './about.module.css'

export default function Page() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center py-24 bg-[#15181b]">
        <h1 className="mt-10 text-4xl text-white">Podcast services</h1>

        <Image
          src="/pod1.png"
          width={600}
          height={100}
          alt="podcast image"
          className="mt-10 mb-10"
        />
        
        <Image
          src="/pod3.png"
          width={600}
          height={100}
          alt="podcast image"
          className="mt-10 mb-10"
        />


        {/* <img src={advice} atl="advice" /> */}
      </div>
    </div>
  );
  }