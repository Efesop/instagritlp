import Image from "next/image"

interface IPhoneMockupProps {
  screenshot: string
  alt: string
}

export function IPhoneMockup({ screenshot, alt }: IPhoneMockupProps) {
  return (
    <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      {/* iPhone Notch */}
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" />
      
      {/* Side Buttons */}
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg" />
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg" />
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg" />
      
      {/* Screen */}
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <Image
          src={screenshot}
          alt={alt}
          width={272}
          height={572}
          className="w-[272px] h-[572px] object-cover"
          priority
        />
      </div>
    </div>
  )
} 