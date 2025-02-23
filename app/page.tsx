'use client'

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
import { FAQItem } from '@/components/faq-item'
import { FAQPageJsonLd } from '@/app/components/json-ld/faq'
import { trackDownload } from '@/lib/analytics'

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
  const imagePath = '/iosdownload.svg'
  
  const handleClick = () => {
    gtag('event', 'click', {
      'event_category': 'engagement',
      'event_label': 'download',
      'click': 'download'
    });
  }
  
  return (
    <Link 
      href="https://apps.apple.com/gb/app/instagrit/id6737732671"
      onClick={handleClick}
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
  const faqData = [
    {
      question: "What makes Instagrit different from other discipline building apps?",
      answer: "Instagrit focuses on shared accountability and discipline rather than motivation. By connecting you with friends who share similar goals we create a support system that keeps you consistent even when motivation fades."
    },
    {
      question: "How does the shared accountability feature work?",
      answer: "You can share duties (tasks/habits) with friends and both of you will be notified of each other's progress. This creates mutual accountability and increases the likelihood of staying consistent."
    },
    {
      question: "Is Instagrit free to use?",
      answer: "Yes! Instagrit offers a free tier that includes core features like duty creation, history tracking, achievements and basic notifications. You'll also get a 14 day free trial of all premium features (no credit card required) when you sign up. Premium features like duty sharing, analytics, categories and advanced tracking are available through our paid plans."
    },
    {
      question: "Can I track multiple duties at once?",
      answer: "Absolutely! You can create and track multiple duties simultaneously, organizing them by categories to stay focused on what matters most."
    },
    {
      question: "How do streaks and achievements work in Instagrit?",
      answer: "Streaks are counted each day you complete your duties. They serve as a visual motivator and help build momentum. Achievements are earned when you complete certain objectives and hit milestones."
    },
    {
      question: "What happens if I miss a day?",
      answer: "Missing a day resets your streak, but you'll be rewarded for getting back on track! Instagrit is about building long-term discipline, not perfection. You can always start fresh and learn from what caused the miss."
    }
  ]

  return (
    <>
      <SiteHeader />
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 py-4 md:py-8">
            {/* Left side content */}
            <div className="flex-1 text-center md:text-left">
              {/* iOS Badge */}
              <div className="inline-flex items-center bg-[#EEF3FF] rounded-full px-4 py-2 mb-8 md:mb-14">
                <div className="relative flex h-2 w-2 mr-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4066E8] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4066E8]"></span>
                </div>
                <span className="text-[#4066E8] text-sm font-medium">Now available on iOS</span>
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-8">
                F*!# Motivation.{" "}
                <div className="inline">
                  Get Disciplined With{" "}
                  <span className="relative inline-flex">
                    {'Friends'.split('').map((letter, i) => (
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
                </div>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-16">
                Stop relying on motivation. Build lasting discipline through shared accountability and daily habits. Perfect for the unmotivated.
              </p>
              
              {/* Action buttons and social proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8 md:mb-16">
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
                    <span className="text-xs text-zinc-500">Share a duty with a friend</span>
                  </div>
                </div>
              </div>

              {/* Features list */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {[
                  { text: "Share Duties", icon: "🤝" },
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
                      <span>{feature.text}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side with iPhone */}
            <div className="relative w-full md:w-auto md:flex-1">
              {/* Notification Pills - Modern frosted glass effect */}
              {/* Top Right - Success notification */}
              <div className="absolute right-[5%] sm:right-[10%] top-[8%] sm:top-[10%] z-30">
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
              <div className="absolute left-[5%] top-[28%] sm:top-[30%] z-30">
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
              <div className="absolute right-[5%] top-[48%] sm:top-[50%] z-30">
                <div className="group bg-white/80 hover:bg-gray-500/20 rounded-2xl py-3 px-5 flex items-center gap-3 animate-float backdrop-blur-lg will-change-transform border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.1)] transition-all duration-300">
                  <div className="h-5 w-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-[3px] ring-blue-500/20" />
                  <span className="text-[15px] font-medium text-black drop-shadow-sm">
                    Mike is on fire! 🔥
                  </span>
                </div>
              </div>

              {/* Bottom Left - Achievement notification */}
              <div className="absolute left-[5%] top-[68%] sm:bottom-[35%] z-30">
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
              <div className="absolute right-[5%] top-[88%] sm:bottom-[15%] z-30">
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

              {/* iPhone Mockup Container */}
              <div className="relative z-20 h-[400px] md:h-auto overflow-hidden">
                <IPhoneMockup 
                  screenshot="/landing3.png"
                  alt="Instagrit App Screenshot"
                  className="scale-[0.85] md:scale-100 -mt-10 md:mt-0 transform-gpu"
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
              { label: "Duties Completed", value: "350+", trend: "+200% this week" },
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
        <section id="path-to-resistance" className="w-full bg-gradient-to-b from-zinc-50/50 to-white py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
                Your path to most resistance
              </h2>
              <p className="text-zinc-500 text-lg font-medium">
                Motivation is sh!#. Here's what you need to become disciplined
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrackingIcon className="text-blue-600" />,
                  title: "Shared Duty Tracking",
                  description: "Share duties with friends, track progress and keep each other accountable",
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
        <section id="how-it-works" className="w-full bg-[#F5F7FF] py-12 lg:py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 mb-8 lg:mb-16 text-center">
              Benefits and Features
            </h2>
            
            <FeatureShowcase />
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="w-full bg-zinc-50 py-24">
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
        <section className="w-full py-12 sm:py-24 bg-gradient-to-b from-zinc-50/50 to-white" id="pricing">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Pricing
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                Start free, upgrade if you need it.
              </p>
            </div>

            {/* Free Trial Message - Moved above pricing toggle */}
            <div className="mb-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 shadow-sm">
                <span className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                  </span>
                  <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    14-day free trial
                  </span>
                </span>
                <span className="text-sm text-zinc-500">
                  No credit card needed.{" "}
                  <Link 
                    href="https://apps.apple.com/gb/app/instagrit/id6737732671" 
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Learn more
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </span>
              </div>
            </div>

            {/* Pricing Toggle */}
            <PricingToggle />

            {/* Pricing cards grid */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3 lg:gap-12 max-w-5xl mx-auto">
              {/* Premium Card - Shows first on mobile */}
              <PricingCard
                title="Premium"
                price="£2.99"
                yearlyPrice="£22.99"
                period="month"
                popular={true}
                features={[
                  { text: "Create duties", included: true },
                  { text: "Duty sharing with friends", included: true },
                  { text: "Duty history and notifications", included: true },
                  { text: "Daily streaks and trophies", included: true },
                  { text: "Dark mode", included: true },
                  { text: "Categorise duties", included: true },
                  { text: "Analytics and tracking", included: true },
                  { text: "Duty progress visualisations", included: true },
                  { text: "Daily rank monitoring", included: true },
                ]}
                appStoreUrl="https://apps.apple.com/gb/app/instagrit/id6737732671"
              />
              
              {/* Lifetime Card - Shows second on mobile */}
              <PricingCard
                title="Lifetime"
                price="£39.99"
                features={[
                  { text: "Create duties", included: true },
                  { text: "Duty sharing with friends", included: true },
                  { text: "Duty history and notifications", included: true },
                  { text: "Daily streaks and trophies", included: true },
                  { text: "Dark mode", included: true },
                  { text: "Categorise duties", included: true },
                  { text: "Analytics and tracking", included: true },
                  { text: "Duty progress visualisations", included: true },
                  { text: "Daily rank monitoring", included: true },
                ]}
                appStoreUrl="https://apps.apple.com/gb/app/instagrit/id6737732671"
                savings="Save £2.59/mo"
              />

              {/* Free Card - Shows last on mobile */}
              <div className="md:[grid-row:1] md:col-start-1">
                <PricingCard
                  title="Free"
                  price="£0"
                  features={[
                    { text: "Create duties", included: true },
                    { text: "Duty history and notifications", included: true },
                    { text: "Daily streaks and trophies", included: true },
                    { text: "Dark mode", included: true },
                    { text: "Duty sharing with friends", included: false },
                    { text: "Categorise duties", included: false },
                    { text: "Analytics and tracking", included: false },
                    { text: "Duty progress visualisations", included: false },
                    { text: "Daily rank monitoring", included: false },
                  ]}
                  appStoreUrl="https://apps.apple.com/gb/app/instagrit/id6737732671"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full bg-gradient-to-b from-white to-zinc-50/50 py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
                Frequently Asked Questions
              </h2>
              <p className="text-zinc-500 text-lg">
                Everything you need to know about getting disciplined with Instagrit
              </p>
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
                <div className="absolute inset-0 rotate-45 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl" />
                <div className="absolute inset-0 -rotate-45 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 blur-3xl" />
              </div>
            </div>

            <div className="relative max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem 
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
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
                  Ready to get disciplined?
                </h2>
                <p className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto">
                  Join our community who are already transforming their lives with Instagrit.
                </p>
                
                <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
                  <Link 
                    href="https://apps.apple.com/gb/app/instagrit/id6737732671"
                    onClick={trackDownload}
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

        {/* Footer */}
        <footer className="w-full border-t bg-gradient-to-b from-white to-zinc-50/50">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-16">
              {/* Company Info */}
              <div className="space-y-4">
                <Link 
                  href="/" 
                  className="group flex items-center space-x-3 font-bold text-xl"
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Image
                      src="/logo.png"
                      alt="Instagrit Logo"
                      width={32}
                      height={32}
                      className="relative w-8 h-8 transform-gpu transition-transform group-hover:scale-110"
                    />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Instagrit
                  </span>
                </Link>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Building discipline through shared accountability. Join our motivated movement.
                </p>
              </div>

              {/* Product */}
              <div className="relative">
                <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-zinc-100/50 to-blue-50/50 opacity-0 hover:opacity-100 transition-opacity rounded-xl -z-10" />
                <h3 className="font-semibold mb-4 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent">Product</h3>
                <ul className="space-y-3">
                  {[
                    { text: "Features", href: "/#path-to-resistance" },
                    { text: "How it works", href: "/#how-it-works" },
                    { text: "Pricing", href: "/#pricing" },
                    { text: "Download", href: "https://apps.apple.com/gb/app/instagrit/id6737732671" },
                    { text: "Blog", href: "/blog" },
                  ].map((link) => (
                    <li key={link.text}>
                      <Link 
                        href={link.href}
                        className="group flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                      >
                        <span className="relative">
                          {link.text}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600/40 to-indigo-600/40 group-hover:w-full transition-[width]" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="relative">
                <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-zinc-100/50 to-blue-50/50 opacity-0 hover:opacity-100 transition-opacity rounded-xl -z-10" />
                <h3 className="font-semibold mb-4 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent">Company</h3>
                <ul className="space-y-3">
                  {[
                    //{ text: "About", href: "#" },
                    { text: "Privacy", href: "privacy" },
                    { text: "Terms", href: "terms" },
                  ].map((link) => (
                    <li key={link.text}>
                      <Link 
                        href={link.href}
                        className="group flex items-center text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                      >
                        <span className="relative">
                          {link.text}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-600/40 to-indigo-600/40 group-hover:w-full transition-[width]" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social */}
              <div className="relative">
                <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-zinc-100/50 to-blue-50/50 opacity-0 hover:opacity-100 transition-opacity rounded-xl -z-10" />
                <h3 className="font-semibold mb-4 bg-gradient-to-br from-zinc-900 to-zinc-600 bg-clip-text text-transparent">Connect</h3>
                <div className="flex space-x-4">

                  <Link 
                    href="https://www.instagram.com/instagritapp/"
                    className="group relative p-2 hover:text-pink-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <div className="absolute inset-0 bg-pink-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="relative h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>

                  <Link 
                    href="https://tiktok.com/@instagrit"
                    className="group relative p-2 hover:text-gray-900 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on TikTok"
                  >
                    <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="relative h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </Link>

                  <Link 
                    href="https://twitter.com/efesopoulos"
                    className="group relative p-2 hover:text-blue-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                  >
                    <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <svg className="relative h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Link>
                  
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-zinc-200/80">
              <div className="py-8 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm text-zinc-500">
                  © {new Date().getFullYear()} Instagrit. All rights reserved.
                </p>
                <div className="flex items-center mt-4 sm:mt-0">
                  <span className="text-sm text-zinc-500">Made with</span>
                  <span className="mx-2 text-red-500 animate-pulse">❤️</span>
                  <span className="text-sm text-zinc-500">by Ollie Efez</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <FAQPageJsonLd
        mainEntity={faqData.map(({ question, answer }) => ({
          questionName: question,
          acceptedAnswerText: answer,
        }))}
      />
    </>
  )
}

