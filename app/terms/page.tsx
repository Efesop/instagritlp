import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function Terms() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link 
            href="/"
            className="group inline-flex items-center gap-2 mb-8 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to home
          </Link>

          <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
          
          <div className="prose prose-zinc max-w-none">
            <p className="text-lg text-zinc-500 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using the Instagrit mobile application, you agree to be bound by these Terms of Service.
                If you disagree with any part of the terms, you may not access the Service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the app for personal, 
                non-commercial transitory viewing only.
              </p>
              <p className="mt-4">This license shall automatically terminate if you violate any of these restrictions:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You may not modify or copy the materials</li>
                <li>You may not use the materials for any commercial purpose</li>
                <li>You may not attempt to decompile or reverse engineer any software contained in Instagrit</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
              <p>
                The materials within Instagrit are provided on an 'as is' basis. Instagrit makes no 
                warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                including, without limitation, implied warranties or conditions of merchantability, 
                fitness for a particular purpose, or non-infringement of intellectual property or 
                other violation of rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
              <p>
                In no event shall Instagrit or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use Instagrit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at:{" "}
                <Link href="mailto:support@instagrit.com" className="text-blue-600 hover:text-blue-700">
                  support@instagrit.com
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
} 