'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RemovedPricingPage() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to home page
    router.push('/')
  }, [router])
  
  return null
}
