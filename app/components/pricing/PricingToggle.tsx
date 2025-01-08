"use client"

import { useState } from "react"

export function PricingToggle() {
  const [isYearly, setIsYearly] = useState(false)

  const handleToggle = () => {
    setIsYearly(!isYearly)
    // Dispatch a custom event that PricingCard components will listen to
    window.dispatchEvent(
      new CustomEvent('pricingPeriodChange', { 
        detail: isYearly ? 'monthly' : 'yearly' 
      })
    )
  }

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <span className={`text-sm font-medium ${!isYearly ? 'text-blue-600' : 'text-zinc-600'}`}>
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-zinc-200 transition-colors hover:bg-zinc-300"
        aria-label="Toggle pricing period"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isYearly ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <div className="flex items-center gap-2">
        <span className={`text-sm font-medium ${isYearly ? 'text-blue-600' : 'text-zinc-600'}`}>
          Yearly
        </span>
        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
          Save 36%
        </span>
      </div>
    </div>
  )
} 