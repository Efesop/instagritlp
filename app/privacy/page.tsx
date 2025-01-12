import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Breadcrumbs } from "@/app/components/breadcrumbs"
import { BreadcrumbsJsonLd } from "@/app/components/json-ld/breadcrumbs"

export const metadata = {
  title: 'Privacy Policy | Instagrit',
  description: 'Learn about how we protect your privacy and handle your data at Instagrit.',
}

export default function PrivacyPolicy() {
  const breadcrumbs = [
    { name: 'Home', item: '/' },
    { name: 'Privacy', item: '/privacy' }
  ]

  return (
    <>
      <SiteHeader />
      <BreadcrumbsJsonLd items={breadcrumbs} />
      <div className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Breadcrumbs />
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
              Effective Date: January 10, 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to Instagrit, a mobile application designed to help users set goals, track habits, and build discipline. 
                This Privacy Policy outlines how Filmshape Ltd ("we," "our," or "us") collects, uses, discloses, and protects 
                your information when you use the Instagrit app ("App").
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              <p>
                We are committed to protecting your privacy and minimizing data collection. As of the effective date, 
                we do not collect any personal data from users of the Instagrit app. All data related to your goals, 
                tasks, and progress is stored locally on your device and is not transmitted to our servers or any third parties.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect the data stored on your device 
                from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no security 
                measures are entirely foolproof, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
              <p>
                Instagrit does not integrate with third-party services that collect user data. However, the App is 
                available for download through the Apple App Store, which may collect certain information as described 
                in Apple's Privacy Policy. We encourage you to review Apple's policies to understand their data 
                collection practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">5. Children's Privacy</h2>
              <p>
                Our App is not intended for use by children under the age of 13. We do not knowingly collect personal 
                information from children under 13. If we become aware that we have inadvertently collected such 
                information, we will take steps to delete it promptly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be effective immediately upon 
                posting the updated policy within the App. We encourage you to review this policy periodically to 
                stay informed about our data practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-4">
                Filmshape Ltd<br />
                Email: <Link href="mailto:ollie@instagrit.com" className="text-blue-600 hover:text-blue-700">
                  ollie@instagrit.com
                </Link><br />
                Address: 9 church road, Redditch B966eh
              </p>
              <p className="mt-4">
                By using the Instagrit app, you acknowledge that you have read and understood this Privacy Policy 
                and agree to its terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  )
} 