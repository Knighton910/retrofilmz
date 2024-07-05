import React from "react";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="pb-24">
        <Navbar />
      </div>

      <Image 
        src="/contact.png" 
        height={200} 
        width={1200}
        alt="tour dates image"
      />
    </div>
  );
  }