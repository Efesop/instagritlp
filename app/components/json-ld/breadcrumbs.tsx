import { BreadcrumbList, WithContext } from 'schema-dts'

interface BreadcrumbsJsonLdProps {
  items: {
    name: string
    item: string
  }[]
}

export function BreadcrumbsJsonLd({ items }: BreadcrumbsJsonLdProps) {
  const jsonLd: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://instagrit.com${item.item}`
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
} 