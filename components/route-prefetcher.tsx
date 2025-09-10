"use client"
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const CRITICAL_ROUTES = [
  '/',
  '/about',
  '/appointment',
  '/services/electrical',
  '/services/office-setup',
  '/services/home-renovation',
  '/services/furniture'
]

export default function RoutePrefetcher() {
  const router = useRouter()

  useEffect(() => {
    // Prefetch critical routes after initial page load
    const prefetchRoutes = () => {
      CRITICAL_ROUTES.forEach(route => {
        router.prefetch(route)
      })
    }

    // Delay prefetching to avoid blocking initial page load
    const timer = setTimeout(prefetchRoutes, 1000)
    
    return () => clearTimeout(timer)
  }, [router])

  // Prefetch on hover for better UX
  useEffect(() => {
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="/"]') as HTMLAnchorElement
      
      if (link && link.href) {
        const url = new URL(link.href)
        router.prefetch(url.pathname)
      }
    }

    // Add hover prefetching to all internal links
    document.addEventListener('mouseenter', handleMouseEnter, true)
    
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true)
    }
  }, [router])

  return null // This component doesn't render anything
}
