"use client"

import { Check, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  features: Array<{
    text: string
    included: boolean
  }>
  popular?: boolean
  appStoreUrl: string
  yearlyPrice?: string
  isLifetime?: boolean
  savings?: string
}

export function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  popular, 
  appStoreUrl,
  yearlyPrice,
  savings,
}: PricingCardProps) {
  const [currentPrice, setCurrentPrice] = useState(price)
  const [currentPeriod, setCurrentPeriod] = useState(period)

  // Listen for pricing period changes from the toggle
  useEffect(() => {
    const handlePeriodChange = (e: CustomEvent) => {
      if (yearlyPrice && e.detail === 'yearly') {
        setCurrentPrice(yearlyPrice)
        setCurrentPeriod('year')
      } else {
        setCurrentPrice(price)
        setCurrentPeriod(period)
      }
    }

    window.addEventListener('pricingPeriodChange', handlePeriodChange as EventListener)
    return () => {
      window.removeEventListener('pricingPeriodChange', handlePeriodChange as EventListener)
    }
  }, [price, yearlyPrice, period])

  return (
    <div className={`relative rounded-2xl ${popular ? 'border-2 border-blue-600' : 'border border-zinc-200'} bg-white p-8 shadow-lg`}>
      {popular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-2 text-sm font-medium text-white text-center">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
        <div className="mt-4 flex items-baseline">
          <span className="text-4xl font-bold tracking-tight text-zinc-900">{currentPrice}</span>
          {currentPeriod && (
            <span className="ml-1 text-sm font-semibold text-zinc-600">/{currentPeriod}</span>
          )}
          {savings && (
            <span className="ml-3 inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
              {savings}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature.text} className="flex items-center gap-3">
            <div className="flex-shrink-0">
              {feature.included ? (
                <Check className="h-5 w-5 text-blue-600" />
              ) : (
                <X 
                  className="h-5 w-5" 
                  color="#dc2626"
                />
              )}
            </div>
            <span className="text-sm text-zinc-600">{feature.text}</span>
          </li>
        ))}
      </ul>

      <Link
        href={appStoreUrl}
        className={`block w-full rounded-xl px-6 py-3 text-center text-sm font-semibold transition-all
          ${popular 
            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90' 
            : 'bg-zinc-50 text-zinc-900 hover:bg-zinc-100'
          }`}
      >
        {title === "Free" ? "Download Now" : "Get it Now"}
      </Link>
    </div>
  )
} 