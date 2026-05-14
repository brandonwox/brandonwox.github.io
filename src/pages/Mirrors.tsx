import ServiceDetailPage from '../components/ui/ServiceDetailPage'

export default function Mirrors() {
  return (
    <ServiceDetailPage
      eyebrow="Commercial Mirrors"
      title="Commercial Mirrors"
      subtitle="Custom-cut, flawlessly finished mirrors for gyms, studios, restrooms, and lobbies."
      image="/images/projects/gladhouse/gladhouse-photo-1.png"
      imageAlt="Commercial mirrors"
      heading="Reflecting Your Best Spaces"
      body="Our mirror team measures, coordinates, and installs mirrors for fitness centers, hotel lobbies, amenity spaces, and large-scale commercial restrooms with clean finish detail."
      bullets={[
        'Large-scale gym and studio mirrors',
        'Custom restroom vanity mirrors',
        'Polished and beveled edges',
        'Secure commercial-grade mounting',
      ]}
      ctaEyebrow="Mirrors"
      ctaHeading="Custom Mirrors for Any Space"
      ctaSubtext="Tell us your dimensions and our team will coordinate the mirror package through installation."
      ctaImage="/images/general/475497286.jpg"
      reverse
      background="white"
    />
  )
}
