import Link from 'next/link'
import Image from 'next/image'
import { IPhoneMockup } from '@/components/iphone-mockup'

const AppStoreButton = () => {
  return (
    <Link 
      href="https://apps.apple.com/gb/app/instagrit/id6737732671"
      className="relative group transform-gpu"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity will-change-transform backface-hidden" />
      <Image
        src="/iosdownload.svg"
        alt="Download on the App Store"
        width={156}
        height={52}
        priority
        unoptimized
        className="h-[52px] w-auto relative transform-gpu transition-transform group-hover:scale-105 will-change-transform backface-hidden"
      />
    </Link>
  )
}

export function BlogCTA() {
  return (
    <div className="my-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100" />
      
      {/* Enhanced glow effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2">
        <div className="w-[400px] h-[600px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Get disciplined with friends
          </h3>
          
          <p className="text-gray-600 mb-8 text-lg">
            Join thousands of others who are using Instagrit to build better habits and achieve their goals.
          </p>
          
          <div className="flex justify-center md:justify-start">
            <AppStoreButton />
          </div>
        </div>

        {/* iPhone Mockup */}
        <div className="relative w-full md:w-auto">
          <div className="relative z-20 h-[300px] md:h-[400px] overflow-hidden">
            <IPhoneMockup 
              screenshot="/landing3.png"
              alt="Instagrit App Screenshot"
              className="scale-[0.7] md:scale-[0.85] -mt-10 transform-gpu"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 