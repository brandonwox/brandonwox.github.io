import ServiceDetailPage from '../components/ui/ServiceDetailPage'

export default function Storefronts() {
  return (
    <ServiceDetailPage
      eyebrow="First Impressions"
      title="Premium Storefronts"
      subtitle="Durable, inviting, and architecturally clean storefront systems for commercial buildings."
      image="/images/projects/bloomington/bloomington-photo-4.png"
      imageAlt="Commercial storefronts"
      heading="Make a Lasting Impression"
      body="A commercial building's storefront is its handshake with the public. We install robust aluminum and glass storefront systems that offer visibility, natural light, and structural integrity for retail centers, offices, and institutions."
      bullets={[
        'Heavy-duty aluminum framing systems',
        'ADA compliant entrance doors',
        'Impact and security resistant glass options',
        'Seamless integration with structural facades',
      ]}
      ctaEyebrow="Storefronts"
      ctaHeading="Make a Lasting First Impression"
      ctaSubtext="Our team will assess your space and help you choose the storefront system that looks great and performs for decades."
    />
  )
}
