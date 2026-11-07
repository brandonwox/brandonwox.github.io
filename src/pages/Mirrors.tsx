import ServiceDetailPage from '../components/ui/ServiceDetailPage'

export default function Mirrors() {
  return (
    <ServiceDetailPage
      eyebrow="Commercial Mirrors"
      title="Commercial Mirrors"
      subtitle="Custom-cut, cleanly finished mirrors for unit bathrooms, gyms, studios, restrooms, and lobbies."
      image="/images/general/ox_SKP2022_10.jpg"
      imageAlt="Frameless vanity mirror installed above a double sink in a new apartment unit"
      heading="Reflecting Your Best Spaces"
      body="Our mirror team measures, coordinates, and installs mirrors for apartment and hotel units, fitness centers, amenity spaces, and large-scale commercial restrooms. Because we are often already on site for the window scope, mirrors can be sequenced into the same project without adding another subcontractor."
      bullets={[
        'Unit vanity mirrors at multifamily volume',
        'Large-scale gym and studio mirrors',
        'Polished and beveled edge options',
        'Secure commercial-grade mounting',
      ]}
      ctaEyebrow="Mirrors"
      ctaHeading="Custom Mirrors for Any Space"
      ctaSubtext="Tell us your unit count and dimensions and our team will coordinate the mirror package through installation."
      ctaImage="/images/projects/gladhouse/gladhouse-photo-2.png"
      relatedProjectIds={['olayan-residence', 'gladhouse', 'sanctuary']}
      reverse
      background="white"
    />
  )
}
