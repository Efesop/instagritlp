import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Target, Star, Bell } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { IPhoneMockup } from "@/components/iphone-mockup"
import { Card } from "@/components/ui/card"
//import { motion } from "framer-motion"
import { TrackingIcon, StreakIcon, AnalyticsIcon } from '@/components/features/FeatureIcons';

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
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Discipline
                  </span>
                  {/* Decorative elements */}
                  <div className="absolute -z-10 -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl opacity-50" />
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-16">
                Take control and transform your life—one duty at a time. Build lasting habits through accountability and tracking.
              </p>

              <div className="flex items-center gap-4 mb-16">
                <AppStoreButton />
                
                <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/50 border border-zinc-100 backdrop-blur-sm">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-8 h-8 rounded-full ring-2 ring-white bg-gradient-to-br from-blue-500/80 to-indigo-500/80 flex items-center justify-center text-[10px] font-medium text-white"
                      >
                        {String.fromCharCode(65 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">1,000+ users</span>
                    <span className="text-xs text-zinc-500">Join the community</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { text: "Track Daily", icon: "📊" },
                  { text: "Build Habits", icon: "⚡" },
                  { text: "Stay Accountable", icon: "🤝" },
                  { text: "See Progress", icon: "📈" }
                ].map((feature) => (
                  <div
                    key={feature.text}
                    className="group px-4 py-2 rounded-full bg-white border border-zinc-100 shadow-sm transform-gpu transition-all hover:shadow-md hover:scale-105 will-change-transform backface-hidden"
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700">
                      {feature.icon}
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side with iPhone remains the same */}
            <div className="flex-1 relative flex justify-center">
              {/* Notification Pills - Matching app's native notification style */}
              {/* Top Right */}
              <div className="absolute right-[10%] top-[10%] z-30">
                <div className="bg-sky-950/35 rounded-2xl py-3 px-5 shadow-lg flex items-center gap-3 animate-float backdrop-blur-xl will-change-transform">
                  <CheckCircle className="h-5 w-5 text-green-400" strokeWidth={2} />
                  <span className="text-sm font-medium text-white">
                    7 Day Streak!
                  </span>
                </div>
              </div>

              {/* Top Left */}
              <div className="absolute left-[5%] top-[30%] z-30">
                <div className="bg-sky-950/35 rounded-2xl py-3 px-5 shadow-lg flex items-center gap-3 animate-float-delayed backdrop-blur-xl will-change-transform">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-pink-600" />
                  <span className="text-sm font-medium text-white">
                    Sarah completed 3 duties
                  </span>
                </div>
              </div>

              {/* Middle Right */}
              <div className="absolute right-[5%] top-[50%] z-30">
                <div className="bg-sky-950/35 rounded-2xl py-3 px-5 shadow-lg flex items-center gap-3 animate-float backdrop-blur-xl will-change-transform">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600" />
                  <span className="text-sm font-medium text-white">
                    Mike is on fire! 🔥
                  </span>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute left-[10%] bottom-[35%] z-30">
                <div className="bg-sky-950/35 rounded-2xl py-3 px-5 shadow-lg flex items-center gap-3 animate-float-delayed backdrop-blur-xl will-change-transform">
                  <Target className="h-5 w-5 text-indigo-400" strokeWidth={2} />
                  <span className="text-sm font-medium text-white">
                    Goal Achieved
                  </span>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="absolute right-[8%] bottom-[15%] z-30">
                <div className="bg-sky-950/35 rounded-2xl py-3 px-5 shadow-lg flex items-center gap-3 animate-float backdrop-blur-xl will-change-transform">
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-600" />
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    2 friends joined!
                  </span>
                </div>
              </div>

              {/* iPhone Mockup */}
              <div className="relative z-20">
                <IPhoneMockup 
                  screenshot="/landing2.png"
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
              { label: "Active Users", value: "1,000+", trend: "+25% this month" },
              { label: "Tasks Completed", value: "50,000+", trend: "+12% this week" },
              { label: "Avg. Streak", value: "12 Days", trend: "↑ 3 days" },
              { label: "App Rating", value: "4.8/5", trend: "⭐ App Store" },
            ].map((stat) => (
              <div key={stat.label} className="text-center group transition-all hover:scale-105">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 font-medium">{stat.label}</div>
                <div className="text-xs text-blue-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
                Core Features
              </h2>
              <p className="text-zinc-500 text-lg font-medium">
                Everything you need to build lasting habits
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrackingIcon className="text-blue-600" />,
                  title: "Smart Duty Tracking",
                  description: "Set daily duties, track progress, and never lose sight of your goals",
                  hoverGradient: "from-blue-500/10 to-blue-600/10"
                },
                {
                  icon: <StreakIcon className="text-orange-500" />,
                  title: "Habit Streaks",
                  description: "Build momentum with visual streak tracking and daily completion stats",
                  hoverGradient: "from-orange-500/10 to-orange-600/10"
                },
                {
                  icon: <AnalyticsIcon className="text-green-500" />,
                  title: "Progress Analytics",
                  description: "Get clear, intuitive insights into your progress with easy-to-read visuals",
                  hoverGradient: "from-green-500/10 to-green-600/10"
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
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-[width] duration-75 ease-out bg-gradient-to-r from-blue-500/50 to-indigo-500/50 transform-gpu" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
                  Powerful tools for <br />
                  consistent progress
                </h2>

                <div className="space-y-6">
                  {/* Achievement System */}
                  <div 
                    className="group relative rounded-2xl bg-white/50 hover:bg-white/80 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-100"
                  >
                    <div className="flex gap-4 items-start">
                      {/* Icon container with simple background change */}
                      <div className="p-3 rounded-xl bg-blue-500/5 hover:bg-blue-500/10">
                        <Target className="h-6 w-6 text-blue-600" />
                      </div>

                      {/* Text content */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                          Achievement System
                        </h3>
                        <p className="text-zinc-500 leading-relaxed">
                          Stay motivated with rewards and milestones for consistent effort
                        </p>
                      </div>
                    </div>
                    
                    {/* Optional: Simple highlight effect instead of line */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/[0.02]" />
                  </div>

                  {/* Smart Reminders */}
                  <div 
                    className="group relative rounded-2xl bg-white/50 hover:bg-white/80 backdrop-blur-sm p-6 border border-white/20 hover:border-blue-100"
                  >
                    <div className="flex gap-4 items-start">
                      {/* Icon container with simple background change */}
                      <div className="p-3 rounded-xl bg-blue-500/5 hover:bg-blue-500/10">
                        <Bell className="h-6 w-6 text-indigo-600" />
                      </div>

                      {/* Text content */}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-xl bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-transparent">
                          Smart Reminders
                        </h3>
                        <p className="text-zinc-500 leading-relaxed">
                          Never miss a duty with customizable notifications
                        </p>
                      </div>
                    </div>
                    
                    {/* Optional: Simple highlight effect instead of line */}
                    <div className="absolute inset-0 rounded-2xl bg-blue-500/0 group-hover:bg-blue-500/[0.02]" />
                  </div>
                </div>
              </div>

              {/* Right side image with enhanced effects */}
              <div className="relative lg:ml-12">
                <div className="relative z-10">
                  <Image
                    src="/app-screenshot-2.png"
                    alt="Instagrit Features"
                    width={400}
                    height={800}
                    className="rounded-2xl shadow-2xl border border-black/5 transition-transform duration-300 hover:scale-[1.02]"
                  />
                  {/* Floating elements */}
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                  <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                </div>
                
                {/* Enhanced background effects */}
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl blur-2xl transform rotate-6" />
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl blur-2xl transform -rotate-6" />
              </div>
            </div>
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
                quote="This app has completely transformed my daily routine. The streak system keeps me motivated!"
                author="Sarah K."
                rating={5}
              />
              <Testimonial
                quote="Simple, effective, and actually makes me want to complete my daily tasks."
                author="Michael R."
                rating={5}
              />
              <Testimonial
                quote="The best habit tracking app I have used. Clean interface and powerful features."
                author="David M."
                rating={5}
              />
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
                    <div className="flex -space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-6 h-6 rounded-full ring-2 ring-blue-600 bg-gradient-to-br from-blue-500 to-indigo-500"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-white">
                      1,000+ Happy Users
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

