import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Smartphone, BarChart, Target, Bell } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32">
        <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl">
          Progress Through <span className="text-primary">Discipline</span>
        </h1>
        <p className="max-w-[42rem] text-center text-muted-foreground sm:text-xl">
          Take control and transform your life—one duty at a time. Build lasting habits through accountability and tracking.
        </p>
        <div className="flex gap-4">
          <Link href="https://apps.apple.com/gb/app/instagrit/id6737732671">
            <Button size="lg">
              Download Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24 sm:py-32">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            icon={<CheckCircle />}
            title="Smart Duty Tracking"
            description="Set daily duties, track progress, and never lose sight of your goals"
          />
          <FeatureCard 
            icon={<BarChart />}
            title="Visual Progress Analytics"
            description="Get clear, intuitive insights into your progress with easy-to-read visuals"
          />
          <FeatureCard 
            icon={<Target />}
            title="Achievement System"
            description="Stay motivated with rewards and milestones for consistent effort"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-24 sm:py-32 bg-muted/50">
        <h2 className="text-3xl font-bold text-center mb-12">Simple Pricing</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <PriceCard 
            title="Monthly"
            price="£2.99"
            period="/month"
          />
          <PriceCard 
            title="Yearly"
            price="£22.99"
            period="/year"
            popular={true}
          />
          <PriceCard 
            title="Lifetime"
            price="£39.99"
            period="/one-time"
          />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
      <div className="p-3 rounded-full bg-primary/10 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function PriceCard({ title, price, period, popular = false }) {
  return (
    <div className={`relative p-6 bg-card rounded-lg shadow-sm ${popular ? 'border-2 border-primary' : 'border border-border'}`}>
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
          Most Popular
        </span>
      )}
      <div className="text-center">
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className="flex justify-center items-baseline mb-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
        <Button className="w-full">Get Started</Button>
      </div>
    </div>
  )
}
