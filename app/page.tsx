import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Target, Star } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { IPhoneMockup } from "@/components/iphone-mockup"
import { Card } from "@/components/ui/card"
//import { motion } from "framer-motion"
import { TrackingIcon, StreakIcon, AnalyticsIcon } from '@/components/features/FeatureIcons';
import { FeatureShowcase } from "./components/features/FeatureShowcase"
import { PricingCard } from "./components/pricing/PricingCard"
import { PricingToggle } from "./components/pricing/PricingToggle"

interface TestimonialProps {
  quote: string
  author: string
  rating: number
}

function Testimonial({ quote, author, rating }: TestimonialProps) {
  return (
    <Card className="p-6">
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4">&ldquo;{quote}&rdquo;</p>
      <p className="font-semibold">{author}</p>
    </Card>
  )
}

const AppStoreButton = () => {
  const basePath = process.env.NODE_ENV === 'production' ? '/instagritlp' : ''
  const imagePath = `${basePath}/iosdownload.svg`
  
  return (
    <Link 
      href="https://apps.apple.com/gb/app/instagrit/id6737732671"
      className="relative group transform-gpu"
    >
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity will-change-transform backface-hidden" />
      <Image
        src={imagePath}
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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row items-center gap-12 py-16 md:py-24">
            <div className="flex-1">
              <div className="inline-flex items-center bg-[#EEF3FF] rounded-full px-4 py-2 mb-14">
                <div className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4066E8] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4066E8]"></span>
                </div>
                <span className="text-[#4066E8] text-sm font-medium">Now available on iOS</span>
              </div>
              
              <h1 className="text-6xl font-bold tracking-tight mb-8">
                Progress Through{" "}
                <span className="inline-flex items-baseline">
                  <span className="relative inline-flex">
                    {'Shared'.split('').map((letter, i) => (
                      <span 
                        key={i}
                        className="text-blue-600 animate-letter-bounce"
                        style={{ 
                          animationDelay: `${i * 100}ms`,
                        }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                  <span className="text-zinc-900 ml-2">Discipline</span>
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-16">
                Take control and transform your life—together. Share tasks, track progress, and stay accountable with friends and teammates.
              </p>

              <div className="flex items-center gap-4 mb-16">
                <AppStoreButton />
                
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/50 border border-zinc-100 backdrop-blur-sm">
                  <div className="flex -space-x-2">
                    {[
                      { initial: "J", bg: "from-blue-400 to-blue-500" },
                      { initial: "M", bg: "from-purple-400 to-purple-500" },
                      { initial: "R", bg: "from-emerald-400 to-emerald-500" },
                      { initial: "A", bg: "from-orange-400 to-orange-500" }
                    ].map((avatar, i) => (
                      <div 
                        key={i} 
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${avatar.bg} ring-2 ring-white flex items-center justify-center text-[12px] font-medium text-white`}
                      >
                        {avatar.initial}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">50+ users</span>
                    <span className="text-xs text-zinc-500">Share a task with a friend</span>
                  </div>
                </div>
              </div>

            

              <div className="flex flex-wrap gap-4">
                {[
                  { text: "Share Tasks", icon: "🤝" },
                  { text: "Track Progress", icon: "📊" },
                  { text: "Build habits", icon: "🔥" },
                  { text: "Get disciplined", icon: "⚡" }
                ].map((feature) => (
                  <div
                    key={feature.text}
                    className="group relative px-3 py-2 rounded-full bg-white border border-zinc-100 shadow-sm transform-gpu transition-all hover:shadow-md hover:scale-105 will-change-transform backface-hidden"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700">
                      {feature.icon}
                      <div className="flex flex-col">
                        <span>{feature.text}</span>
                      </div>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side with iPhone remains the same */}
            <div className="flex-1 relative flex justify-center">
              {/* Notification Pills - Modern frosted glass effect */}
              {/* Top Right - Success notification */}
              <div className="absolute right-[10%] top-[10%] z-30">
                <div className="group bg-white/80 hover:bg-white/20 rounded-2xl py-3 px-5 flex items-center gap-3 animate-float backdrop-blur-lg will-change-transform border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <div className="p-1.5 rounded-full bg-green-500/20">
                    <CheckCircle className="h-4 w-4 text-green-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] font-medium text-black drop-shadow-sm">
                    7 Day Streak!
                  </span>
                </div>
              </div>

              {/* Top Left - Shared Task Activity */}
              <div className="absolute left-[5%] top-[30%] z-30">
                <div className="group bg-white/80 hover:bg-white/20 rounded-2xl py-3 px-5 flex items-center gap-3 animate-float-delayed backdrop-blur-lg will-change-transform border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <div className="flex -space-x-2">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 ring-[3px] ring-rose-500/20 flex items-center justify-center text-[10px] font-medium text-white">S</div>
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400 ring-[3px] ring-blue-500/20 flex items-center justify-center text-[10px] font-medium text-white">M</div>
                  </div>
                  <span className="text-[15px] font-medium text-black drop-shadow-sm">
                    Completed "Workout" with Jane
                  </span>
                </div>
              </div>

              {/* Middle Right - Status notification */}
              <div className="absolute right-[5%] top-[50%] z-30">
                <div className="group bg-white/80 hover:bg-gray-500/20 rounded-2xl py-3 px-5 flex items-center gap-3 animate-float backdrop-blur-lg will-change-transform border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-[3px] ring-blue-500/20" />
                  <span className="text-[15px] font-medium text-black drop-shadow-sm">
                    Mike is on fire! 🔥
                  </span>
                </div>
              </div>

              {/* Bottom Left - Achievement notification */}
              <div className="absolute left-[10%] bottom-[35%] z-30">
                <div className="group bg-white/80 hover:bg-white/20 rounded-2xl py-3 px-5 flex items-center gap-3 animate-float-delayed backdrop-blur-lg will-change-transform border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <div className="p-1.5 rounded-full bg-blue-500/20">
                    <Target className="h-4 w-4 text-blue-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] font-medium text-black drop-shadow-sm">
                    Goal Achieved
                  </span>
                </div>
              </div>

              {/* Bottom Right - Social notification */}
              <div className="absolute right-[8%] bottom-[15%] z-30">
                <div className="group bg-white/80 hover:bg-white/20 rounded-2xl py-3 px-5 flex items-center gap-3 animate-float backdrop-blur-lg will-change-transform border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <div className="flex -space-x-1">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 ring-[3px] ring-emerald-500/20" />
                    <div className="h-5 w-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-400 ring-[3px] ring-violet-500/20" />
                  </div>
                  <span className="text-[15px] font-medium text-black drop-shadow-sm">
                    2 friends joined!
                  </span>
                </div>
              </div>

              {/* iPhone Mockup */}
              <div className="relative z-20">
                <IPhoneMockup 
                  screenshot="/landing3.png"
                  alt="Instagrit App Screenshot"
                />
              </div>

              {/* Enhanced glow effect */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[400px] h-[600px] bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
          {/* Updated Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-zinc-100">
            {[
              { label: "Active Users", value: "50+", trend: "+50% this month" },
              { label: "Tasks Completed", value: "350+", trend: "+200% this week" },
              { label: "Avg. Streak", value: "3 Days", trend: "↑ 2 days" },
              { label: "App Rating", value: "4.9/5", trend: "⭐ App Store" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                <div className="text-xs text-blue-500 mt-1">
                  {stat.trend}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section className="w-full bg-gradient-to-b from-zinc-50/50 to-white py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
                Your path to most resistance
              </h2>
              <p className="text-zinc-500 text-lg font-medium">
                Everything you need to become more disciplined
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrackingIcon className="text-blue-600" />,
                  title: "Smart Task Tracking",
                  description: "Set daily duties, track progress, and never lose sight of your goals",
                  hoverGradient: "from-blue-500/10 to-blue-600/10",
                  underlineGradient: "from-blue-500/50 to-blue-600/50"
                },
                {
                  icon: <StreakIcon className="text-orange-500" />,
                  title: "Habit Streaks",
                  description: "Build momentum with visual streak tracking and daily completion stats",
                  hoverGradient: "from-orange-500/10 to-orange-600/10",
                  underlineGradient: "from-orange-500/50 to-orange-600/50"
                },
                {
                  icon: <AnalyticsIcon className="text-green-500" />,
                  title: "Progress Analytics",
                  description: "Get clear, intuitive insights into your progress with easy-to-read visuals",
                  hoverGradient: "from-green-500/10 to-green-600/10",
                  underlineGradient: "from-green-500/50 to-green-600/50"
                }
              ].map((feature) => (
                <div 
                  key={feature.title}
                  className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl shadow-zinc-200/50 border border-zinc-100 transform-gpu will-change-auto"
                >
                  {/* Background Gradient - Preload the opacity */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.hoverGradient}`} />
                  </div>

                  {/* Content Container - Hardware accelerated transform */}
                  <div className="relative z-10 transform-gpu backface-hidden">
                    <div className="relative mb-6">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100/50 border border-zinc-100">
                        {feature.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom line - Separate transform */}
                  <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-[width] duration-75 ease-out bg-gradient-to-r ${feature.underlineGradient} transform-gpu`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 mb-16">
              Benefits and Features <br />
            </h2>
            
            <FeatureShowcase />
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full bg-zinc-50 py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Loved by users
              </h2>
              <p className="text-muted-foreground text-lg">
                Don&apos;t just take our word for it - hear what our users have to say
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Testimonial
                quote="This app is just what i was hoping for, an easy way to track large goals and small tasks. I like how user friendly it is."
                author="Nomads Nest"
                rating={5}
              />
              <Testimonial
                quote="Quick and easy, helped me set realistic goals whilst staying accountable"
                author="I am Super Vegeta"
                rating={5}
              />
              <Testimonial
                quote="The app teaches me how to get things done."
                author="Davis Tang"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-full py-24 bg-gradient-to-b from-zinc-50/50 to-white" id="pricing">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pricing
              </h2>
              <p className="text-lg text-muted-foreground">
                Start free, upgrade if you need it.
              </p>
            </div>

            {/* Pricing Toggle */}
            <PricingToggle />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 max-w-5xl mx-auto">
              <PricingCard
                title="Free"
                price="£0"
                features={[
                  { text: "Create tasks/duties", included: true },
                  { text: "Task sharing with friends", included: true },
                  { text: "Task history and notifications", included: true },
                  { text: "Daily streaks and trophies", included: true },
                  { text: "Dark mode", included: true },
                  { text: "Categorise tasks", included: false },
                  { text: "Analytics and tracking", included: false },
                  { text: "Task progress visualisations", included: false },
                  { text: "Daily rank monitoring", included: false },

                ]}
                appStoreUrl="https://apps.apple.com/gb/app/instagrit/id6737732671"
              />
              <PricingCard
                title="Premium"
                price="£2.99"
                yearlyPrice="£22.99"
                period="month"
                popular={true}
                features={[
                  { text: "Create tasks/duties", included: true },
                  { text: "Task sharing with friends", included: true },
                  { text: "Task history and notifications", included: true },
                  { text: "Daily streaks and trophies", included: true },
                  { text: "Dark mode", included: true },
                  { text: "Categorise tasks", included: true },
                  { text: "Analytics and tracking", included: true },
                  { text: "Task progress visualisations", included: true },
                  { text: "Daily rank monitoring", included: true },
                ]}
                appStoreUrl="https://apps.apple.com/gb/app/instagrit/id6737732671"
              />
              <PricingCard
                title="Lifetime"
                price="£39.99"
                //isLifetime={true}
                features={[
                  { text: "Create tasks/duties", included: true },
                  { text: "Task sharing with friends", included: true },
                  { text: "Task history and notifications", included: true },
                  { text: "Daily streaks and trophies", included: true },
                  { text: "Dark mode", included: true },
                  { text: "Categorise tasks", included: true },
                  { text: "Analytics and tracking", included: true },
                  { text: "Task progress visualisations", included: true },
                  { text: "Daily rank monitoring", included: true },
                ]}
                appStoreUrl="https://apps.apple.com/gb/app/instagrit/id6737732671"
              />
            </div>

            {/* FAQ or Additional Info */}
            <div className="mt-16 text-center">
              <p className="text-sm text-zinc-500">
                All paid plans include a 7-day free trial. Cancel anytime.{" "}
                <Link href="https://apps.apple.com/gb/app/instagrit/id6737732671" className="text-blue-600 hover:text-blue-700">
                  Learn more
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] isolate">
              {/* Background gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600" />
              <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:60px_60px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50" />
              
              {/* Decorative blurred circles */}
              <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/20 blur-3xl" />
              <div className="absolute -right-20 -bottom-20 h-[400px] w-[400px] rounded-full bg-indigo-500/20 blur-3xl" />

              <div className="relative z-10 px-6 py-24 sm:px-16 sm:py-32 text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Ready to build better habits?
                </h2>
                <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
                  Join thousands of users who are already transforming their lives with Instagrit.
                </p>
                
                <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
                  <Link 
                    href="https://apps.apple.com/gb/app/instagrit/id6737732671"
                    className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                  >
                    Download Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <div className="absolute -inset-0.5 -z-10 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 blur transition-opacity group-hover:opacity-20" />
                  </Link>

                  {/* Social proof pill */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 backdrop-blur-sm border border-white/10">
                    <div className="flex -space-x-2">
                      {[
                        { initial: "J", bg: "from-blue-400 to-blue-500" },
                        { initial: "M", bg: "from-purple-400 to-purple-500" },
                        { initial: "R", bg: "from-emerald-400 to-emerald-500" }
                      ].map((avatar, i) => (
                        <div 
                          key={i} 
                          className={`w-6 h-6 rounded-full bg-gradient-to-br ${avatar.bg} flex items-center justify-center text-[10px] font-medium text-white ring-2 ring-blue-600/20`}
                        >
                          {avatar.initial}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-white">
                      50+ Happy Users
                    </span>
                  </div>
                </div>
              </div>

              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50 blur-2xl opacity-50 animate-gradient" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

