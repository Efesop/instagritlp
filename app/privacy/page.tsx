import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"

export default function PrivacyPolicy() {
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

          <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="prose prose-zinc max-w-none">
            <p className="text-lg text-zinc-500 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                At Instagrit, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (email, name)</li>
                <li>Usage data and activity</li>
                <li>Device information</li>
                <li>Task and habit tracking data</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our Service</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:{" "}
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