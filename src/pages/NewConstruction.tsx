import ServiceDetailPage from '../components/ui/ServiceDetailPage'
import { PROCESS_STEPS } from '../data/company'

export default function NewConstruction() {
  return (
    <ServiceDetailPage
      eyebrow="Builder Partnerships"
      title="New Construction"
      subtitle="Window and glass scopes for builders and developers, planned and installed to match your construction schedule."
      image="/images/projects/citizen/citizen-photo-1.png"
      imageAlt="New construction multifamily project with windows installed by Ox Glass"
      heading="Built for Builders"
      body="In new construction, timing and reliability are everything. Ox Glass integrates with your project schedule, jobsite access, and trade sequencing so product arrives and installs when you need it, and because we carry windows, mirrors, storefront, and shower glass, one partner can cover several phases of the same build."
      bullets={[
        'Volume pricing without sacrificing quality',
        'Dedicated pre-production coordinator and field supervisor for your sites',
        'Strict adherence to safety and building codes',
        'Turnkey scopes from windows through mirrors and shower glass',
      ]}
      process={{
        heading: 'Our 5-Point Value Engineering Process',
        intro:
          'Every new construction project at Ox Glass follows the same five steps, from the first plan review to the closeout QC meeting, so you always know what is happening and what comes next.',
        steps: PROCESS_STEPS,
      }}
      relatedProjectIds={['citizen', '85-north', 'ridgeview']}
      ctaEyebrow="New Construction"
      ctaHeading="Let's Build Something Great Together"
      ctaSubtext="From groundbreak to punch list, our team integrates with your construction schedule. Send us your plans and let's talk."
      ctaImage="/images/projects/85 north/85-north-photo-1.png"
    />
  )
}
