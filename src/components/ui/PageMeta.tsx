import { useEffect } from 'react'

const SITE_NAME = 'Ox Glass'
const DEFAULT_TITLE = 'Ox Glass | Integrity First, Service Always'
const DEFAULT_DESCRIPTION =
  'Ox Glass installs windows, mirrors, storefronts, and shower glass doors for new construction and commercial projects across Utah. Based in Lehi, UT.'

interface PageMetaProps {
  title?: string
  description?: string
}

// Sets the document title and meta description per page so tabs, history,
// and search results are not all "Ox Glass | Integrity First, Service Always".
export default function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = description ?? DEFAULT_DESCRIPTION
    return () => {
      document.title = DEFAULT_TITLE
    }
  }, [title, description])
  return null
}
