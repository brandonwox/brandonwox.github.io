import ServiceDetailPage from '../components/ui/ServiceDetailPage'

export default function ShowerGlassDoors() {
  return (
    <ServiceDetailPage
      eyebrow="Residential & Commercial"
      title="Shower Glass Doors"
      subtitle="Frameless and semi-frameless shower enclosures measured, specified, and installed with clean finish detail."
      image="/images/projects/citizen/citizen-photo-3.png"
      imageAlt="Shower glass enclosure"
      heading="Precision Finish Work for High-Volume Builds"
      body="Our shower glass team supports apartments, hotels, model units, and residential projects with tempered enclosures that install cleanly and stand up to daily use. We coordinate measurements, hardware, and installation so finished bathrooms feel polished and consistent."
      bullets={[
        'Frameless and semi-frameless configurations',
        'Tempered safety glass',
        'Custom hardware finishes',
        'Measured and installed by experienced crews',
      ]}
      ctaEyebrow="Shower Glass"
      ctaHeading="Need Shower Glass for a Project?"
      ctaSubtext="Send us your unit count, finish requirements, and schedule, and our team will help coordinate a clean shower glass package."
      background="white"
    />
  )
}
