export function FAQPageJsonLd({ mainEntity }: { 
  mainEntity: Array<{ 
    questionName: string
    acceptedAnswerText: string 
  }> 
}) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity.map((item) => ({
      '@type': 'Question',
      name: item.questionName,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.acceptedAnswerText,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  )
} 