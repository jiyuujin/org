import * as React from 'react'

export function useGoogleAdsense() {
  const loadAd = React.useCallback(() => {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const component = window.document.getElementById('__next').querySelector('.adsbygoogle')
      if (component) {
        component.addEventListener('load', loadAd)
      }
    }
    return () => {
      if (typeof window !== 'undefined') {
        const component = window.document.getElementById('__next').querySelector('.adsbygoogle')
        if (component) {
          component.removeEventListener('load', loadAd)
        }
      }
    }
  }, [loadAd])
}
