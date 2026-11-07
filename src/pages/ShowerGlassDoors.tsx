import ServiceDetailPage from '../components/ui/ServiceDetailPage'

export default function ShowerGlassDoors() {
  return (
    <ServiceDetailPage
      eyebrow="Residential & Commercial"
      title="Shower Glass Doors"
      subtitle="Frameless and semi-frameless shower enclosures measured, specified, and installed with clean finish detail."
      image="/images/general/3ba35739-9e4e-4125-b362-6d2fafe54dcf.jpg"
      imageAlt="Frameless glass shower enclosure with brass hardware in a finished bathroom"
      heading="Precision Finish Work for High-Volume Builds"
      body="Our shower glass team supports apartments, hotels, model units, and residential projects with tempered enclosures that install cleanly and stand up to daily use. We coordinate measurements, hardware, and installation so finished bathrooms feel polished and consistent from the first unit to the last."
      bullets={[
        'Frameless and semi-frameless configurations',
        'Tempered safety glass',
        'Custom hardware finishes',
        'Measured and installed by experienced crews',
      ]}
      ctaEyebrow="Shower Glass"
      ctaHeading="Need Shower Glass for a Project?"
      ctaSubtext="Send us your unit count, finish requirements, and schedule, and our team will help coordinate a clean shower glass package."
      ctaImage="/images/projects/citizen/citizen-photo-3.png"
      relatedProjectIds={['olayan-residence', 'citizen']}
      background="white"
    />
  )
}
