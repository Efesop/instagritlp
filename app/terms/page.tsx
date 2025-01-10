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
              Effective Date: January 10, 2025
            </p>

            <p className="mb-8">
              These Terms and Conditions ("Terms") govern your use of the Instagrit mobile application ("App"), 
              owned and operated by Filmshape Ltd ("we," "our," or "us"). By using Instagrit, you agree to these Terms. 
              If you do not agree, do not use the App.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Use of the App</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instagrit is designed to help users set goals, track habits, and build discipline.</li>
                <li>You must be at least 13 years old to use the App.</li>
                <li>You agree to use the App only for lawful purposes and in accordance with these Terms.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. User Data and Privacy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instagrit does not collect or store personal data. All data related to your goals, tasks, and progress is stored locally on your device.</li>
                <li>For details, refer to our Privacy Policy.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Ownership and Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All content, features, and functionality in the App (excluding user-created content) are owned by Filmshape Ltd.</li>
                <li>You may not copy, modify, distribute, or create derivative works based on Instagrit without our permission.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. In-App Purchases and Subscriptions</h2>
              <p>Instagrit offers the following in-app purchases:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Monthly Premium: £2.99 per month</li>
                <li>Yearly Premium: £22.99 per year</li>
                <li>Lifetime Premium: £39.99 (one-time purchase)</li>
              </ul>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Payments are processed through the Apple App Store.</li>
                <li>Subscriptions auto-renew unless canceled at least 24 hours before the renewal date.</li>
                <li>You can manage or cancel your subscription through your Apple ID settings.</li>
                <li>Refunds are subject to Apple's refund policies, and we do not process refunds directly.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instagrit is provided "as is" without warranties of any kind. We do not guarantee that the App will always be available, error-free, or meet your expectations.</li>
                <li>We are not responsible for any loss of data, device malfunctions, or any other issues arising from the use of the App.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
              <p>We reserve the right to terminate or restrict your access to the App if you violate these Terms.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">7. Changes to These Terms</h2>
              <p>We may update these Terms from time to time. Any changes will be posted in the App and will take effect immediately.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p>If you have any questions about these Terms, contact us at:</p>
              <p className="mt-4">
                Filmshape Ltd<br />
                Email: <Link href="mailto:ollie@instagrit.com" className="text-blue-600 hover:text-blue-700">
                  ollie@instagrit.com
                </Link><br />
                Address: 9 church road, redditch, b966eh
              </p>
              <p className="mt-4">
                By using Instagrit, you acknowledge that you have read, understood, and agreed to these Terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
} 