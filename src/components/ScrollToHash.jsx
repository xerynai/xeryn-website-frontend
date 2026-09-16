import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Whenever the URL changes and has a #hash (e.g. /#products or /services),
// scroll to that element after the new page has rendered.
export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      // small delay lets the new page's DOM render first
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location])

  return null
}