import ServiceDetailPage from '../components/ui/ServiceDetailPage'

export default function NewConstruction() {
  return (
    <ServiceDetailPage
      eyebrow="Services"
      title="New Construction"
      subtitle="Reliable partnership and premium glass solutions for builders and developers."
      image="/images/projects/citizen/citizen-photo-1.png"
      imageAlt="New construction glass project"
      heading="Built for Builders"
      body="We understand that in new construction, timing and reliability are everything. Ox Glass integrates with project schedules, jobsite access, and trade sequencing so premium products arrive and install when you need them."
      bullets={[
        'Volume pricing without sacrificing quality',
        'Dedicated project managers for your sites',
        'Strict adherence to safety and building codes',
        'Turnkey solutions from windows to mirrors',
      ]}
      ctaEyebrow="New Construction"
      ctaHeading="Let's Build Something Great Together"
      ctaSubtext="From groundbreak to punch list, our team integrates with your construction schedule. Reach out and let's talk."
      ctaImage="/images/projects/85 north/85-north-photo-1.png"
    />
  )
}
