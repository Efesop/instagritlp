import { Organization, WithContext } from 'schema-dts'

export function OrganizationJsonLd() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Instagrit",
    url: "https://instagrit.com",
    logo: "https://instagrit.com/logo.png",
    description: "Take control and transform your life—together. Share tasks, track progress, and stay accountable with friends and teammates.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9 church road",
      addressLocality: "Redditch",
      postalCode: "B966EH",
      addressCountry: "GB"
    },
    sameAs: [
      "https://twitter.com/efesopoulos"
    ],
    founder: {
      "@type": "Person",
      name: "Ollie Efez"
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "ollie@instagrit.com",
      contactType: "customer service"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 