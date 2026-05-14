import ServiceDetailPage from '../components/ui/ServiceDetailPage'

export default function Windows() {
  return (
    <ServiceDetailPage
      eyebrow="Commercial Windows"
      title="High-Performance Windows"
      subtitle="Precision-engineered window systems designed for commercial and new construction projects."
      image="/images/projects/citizen/citizen-photo-1.png"
      imageAlt="Commercial windows"
      heading="Engineered for Excellence"
      body="We provide industry-leading commercial window installations that meet strict structural, thermal, and aesthetic requirements. From mid-rise multi-family complexes to commercial structures, our window systems are selected and installed for performance, durability, and longevity."
      bullets={[
        'Thermally broken aluminum framing',
        'High-performance Low-E glass',
        'Acoustic noise reduction systems',
        'Rigorous weather-testing standards',
      ]}
      ctaEyebrow="Windows"
      ctaHeading="Let's Talk About Your Window Package"
      ctaSubtext="Our estimators will help you select the right system for your build with performance, code compliance, and budget all factored in."
    />
  )
}
