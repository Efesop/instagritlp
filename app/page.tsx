import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, BarChart, Target, Star, Calendar, Bell } from "lucide-react"

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-24 md:py-32">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Progress Through <span className="text-primary">Discipline</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              Take control and transform your life—one duty at a time. Build lasting habits through accountability and tracking.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://apps.apple.com/gb/app/instagrit/id6737732671">
                <Image
                  src="/app-store-badge.svg"
                  alt="Download on the App Store"
                  width={156}
                  height={52}
                  className="h-[52px] w-auto"
                />
              </Link>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-primary/10 border-2 border-background" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Join 1000+ users</span>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <Image
              src="/app-screenshot.png"
              alt="Instagrit App Screenshot"
              width={300}
              height={600}
              className="rounded-[2.5rem] shadow-xl"
            />
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 sm:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Everything you need to stay on track</h2>
          <p className="text-muted-foreground">
            Powerful features to help you build and maintain positive habits
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<CheckCircle className="h-6 w-6 text-primary" />}
            title="Smart Duty Tracking"
            description="Set daily duties, track progress, and never lose sight of your goals"
          />
          <FeatureCard 
            icon={<Calendar className="h-6 w-6 text-primary" />}
            title="Habit Streaks"
            description="Build momentum with visual streak tracking and daily completion stats"
          />
          <FeatureCard 
            icon={<BarChart className="h-6 w-6 text-primary" />}
            title="Progress Analytics"
            description="Get clear, intuitive insights into your progress with easy-to-read visuals"
          />
          <FeatureCard 
            icon={<Target className="h-6 w-6 text-primary" />}
            title="Achievement System"
            description="Stay motivated with rewards and milestones for consistent effort"
          />
          <FeatureCard 
            icon={<Bell className="h-6 w-6 text-primary" />}
            title="Smart Reminders"
            description="Never miss a duty with customizable notifications and reminders"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-24 sm:py-32 bg-muted/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">Loved by users</h2>
          <p className="text-muted-foreground">
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
      </section>

      {/* CTA Section */}
      <section className="container py-24 sm:py-32">
        <div className="relative rounded-3xl bg-primary px-6 py-16 sm:px-16 sm:py-24 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl mb-4">
            Ready to build better habits?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already transforming their lives with Instagrit.
          </p>
          <Link href="https://apps.apple.com/gb/app/instagrit/id6737732671">
            <Button size="lg" variant="secondary">
              Download Now <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
