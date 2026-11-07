import ServiceDetailPage from '../components/ui/ServiceDetailPage'

export default function Storefronts() {
  return (
    <ServiceDetailPage
      eyebrow="First Impressions"
      title="Commercial Storefronts"
      subtitle="Durable, inviting, and architecturally clean storefront systems for commercial and mixed-use buildings."
      image="/images/projects/bloomington/bloomington-photo-4.png"
      imageAlt="Commercial storefront glass and entrance on a new building"
      heading="Make a Lasting Impression"
      body="A building's storefront is its handshake with the public. We install aluminum and glass storefront systems that deliver visibility, natural light, and durability for leasing offices, retail bays, clubhouses, and ground-floor commercial space, coordinated alongside the window scope when we carry both."
      bullets={[
        'Aluminum storefront framing and entrance doors',
        'ADA-compliant entrance hardware',
        'Energy-code compliant insulated glass',
        'Clean integration with surrounding facade and windows',
      ]}
      ctaEyebrow="Storefronts"
      ctaHeading="Make a Lasting First Impression"
      ctaSubtext="Our team will review your drawings and help you choose a storefront system that looks right and performs for decades."
      relatedProjectIds={['victory-heights', 'sanctuary', 'bloomington']}
    />
  )
}
