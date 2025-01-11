"use client"

import Image from "next/image"

interface IPhoneMockupProps {
  screenshot: string
  alt: string
  className?: string
}

export function IPhoneMockup({ screenshot, alt, className = "" }: IPhoneMockupProps) {
  const imagePath = screenshot

  console.log({
    env: process.env.NODE_ENV,
    imagePath,
  })

  return (
    <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[55px] h-[700px] w-[350px] shadow-xl ${className}`}>
      {/* Dynamic Island */}
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
        <div className="w-[120px] h-[35px] bg-black rounded-[20px] mt-2 flex items-center justify-center">
          <div className="flex gap-2">
            <div className="w-[12px] h-[12px] rounded-full bg-gray-900 ring-1 ring-gray-700" />
            <div className="w-[40px] h-[12px] rounded-full bg-gray-900" />
          </div>
        </div>
      </div>
      
      {/* Side Buttons */}
      <div className="h-[65px] w-[3px] bg-gray-700 absolute -start-[17px] top-[120px] rounded-s-lg" />
      <div className="h-[35px] w-[3px] bg-gray-700 absolute -start-[17px] top-[200px] rounded-s-lg" />
      <div className="h-[35px] w-[3px] bg-gray-700 absolute -start-[17px] top-[250px] rounded-s-lg" />
      <div className="h-[65px] w-[3px] bg-gray-700 absolute -end-[17px] top-[170px] rounded-e-lg" />
      
      {/* Screen */}
      <div className="relative rounded-[40px] overflow-hidden w-[322px] h-[672px] bg-white dark:bg-gray-800">
        <div className="absolute inset-0 bg-zinc-100" />
        <Image
          src={imagePath}
          alt={alt}
          width={322}
          height={672}
          className="relative z-10 object-cover"
          priority
          unoptimized
        />
      </div>
    </div>
  )
} 