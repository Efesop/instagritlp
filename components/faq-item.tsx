'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div 
      className={cn(
        "group relative rounded-2xl border border-zinc-200/80 bg-white/50 backdrop-blur-sm",
        "transition-all duration-200 hover:bg-white/80",
        "shadow-sm hover:shadow-md",
        isOpen && "ring-1 ring-blue-500/20 bg-white/80"
      )}
    >
      <button
        className="flex w-full items-center justify-between p-6 text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <span className={cn(
          "font-semibold text-lg",
          "text-zinc-900",
          "group-hover:text-blue-600",
          "transition-all duration-200"
        )}>
          {question}
        </span>
        <div className="ml-4 flex-shrink-0">
          <div className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full",
            "border border-zinc-200 bg-white",
            "group-hover:border-blue-200 group-hover:bg-blue-50",
            "transition-all duration-200"
          )}>
            <ChevronDown 
              className={cn(
                "h-4 w-4",
                "text-zinc-500 group-hover:text-blue-600",
                "transition-transform duration-200",
                isOpen && "rotate-180"
              )} 
            />
          </div>
        </div>
      </button>
      {isOpen && (
        <div
          id={`faq-answer-${question.toLowerCase().replace(/\s+/g, '-')}`}
          className="px-6 pb-6"
        >
          <p className="text-zinc-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  )
} 