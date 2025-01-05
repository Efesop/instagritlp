import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, BarChart, Target, Star, Calendar, Bell } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { motion } from "framer-motion"
import { IPhoneMockup } from "@/components/iphone-mockup"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
      <div className="p-6">
        <div className="mb-4 inline-flex p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  )
}

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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="flex flex-col min-h-screen overflow-hidden">
        {/* Hero Section */}
        <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16 md:py-24">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Progress Through{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Discipline
                  </span>
                </h1>
                <p className="mx-auto lg:mx-0 max-w-[600px] text-zinc-500 text-lg sm:text-xl">
                  Take control and transform your life—one duty at a time. Build lasting habits through accountability and tracking.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="https://apps.apple.com/gb/app/instagrit/id6737732671">
                  <Image
                    src="/app-store-badge.svg"
                    alt="Download on the App Store"
                    width={156}
                    height={52}
                    className="h-[52px] w-auto hover:opacity-90 transition-opacity"
                  />
                </Link>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-blue-500/20 to-indigo-500/20"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-zinc-500 font-medium">Join 1000+ users</span>
                </div>
              </div>
              {/* Feature Pills */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {["Track Daily", "Build Habits", "Stay Accountable", "See Progress"].map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 relative flex justify-center">
              {/* Notification Pills */}
              <div className="absolute right-[10%] top-[20%] z-30">
                <div className="bg-white rounded-full py-2 px-4 shadow-lg flex items-center gap-2 animate-float">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">7 Day Streak!</span>
                </div>
              </div>
              <div className="absolute left-[10%] top-[60%] z-30">
                <div className="bg-white rounded-full py-2 px-4 shadow-lg flex items-center gap-2 animate-float-delayed">
                  <Target className="h-5 w-5 text-blue-500" />
                  <span className="text-sm font-medium">Goal Achieved</span>
                </div>
              </div>

              {/* iPhone Mockup */}
              <div className="relative z-20">
                <IPhoneMockup 
                  screenshot="/app-screenshot.png"
                  alt="Instagrit App Screenshot"
                />
              </div>
            </div>
          </div>
          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-zinc-100">
            {[
              { label: "Active Users", value: "1,000+" },
              { label: "Tasks Completed", value: "50,000+" },
              { label: "Avg. Streak", value: "12 Days" },
              { label: "App Rating", value: "4.8/5" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section className="w-full bg-gradient-to-b from-zinc-50 to-white py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Core Features
              </h2>
              <p className="text-zinc-500 text-lg">
                Everything you need to build lasting habits
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<CheckCircle className="h-6 w-6 text-blue-500" />}
                title="Smart Duty Tracking"
                description="Set daily duties, track progress, and never lose sight of your goals"
              />
              <FeatureCard 
                icon={<Calendar className="h-6 w-6 text-blue-500" />}
                title="Habit Streaks"
                description="Build momentum with visual streak tracking and daily completion stats"
              />
              <FeatureCard 
                icon={<BarChart className="h-6 w-6 text-blue-500" />}
                title="Progress Analytics"
                description="Get clear, intuitive insights into your progress with easy-to-read visuals"
              />
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-24">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Powerful tools for <br />
                  consistent progress
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Target className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Achievement System</h3>
                      <p className="text-zinc-500">Stay motivated with rewards and milestones for consistent effort</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <Bell className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Smart Reminders</h3>
                      <p className="text-zinc-500">Never miss a duty with customizable notifications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:ml-12">
                <Image
                  src="/app-screenshot-2.png"
                  alt="Instagrit Features"
                  width={400}
                  height={800}
                  className="rounded-2xl shadow-2xl border border-black/10"
                />
                <div className="absolute -z-10 inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-3xl" />
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
            <div className="relative overflow-hidden rounded-3xl">
              <div className="relative z-10 px-6 py-16 sm:px-16 sm:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                  Ready to build better habits?
                </h2>
                <p className="text-blue-50 mb-8 max-w-2xl mx-auto text-lg">
                  Join thousands of users who are already transforming their lives with Instagrit.
                </p>
                <Link href="https://apps.apple.com/gb/app/instagrit/id6737732671">
                  <Button size="lg" variant="secondary" className="rounded-full bg-white text-blue-600 hover:bg-blue-50">
                    Download Now <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 blur-3xl" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
