"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Cookie, X } from "lucide-react"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[hsl(var(--navy-deep))] border-t-2 border-[hsl(var(--gold))] shadow-2xl"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto max-w-5xl px-4 py-4 xl:max-w-6xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

          {/* Icon + text */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            <Cookie className="w-5 h-5 text-[hsl(var(--gold))] shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-white mb-0.5">
                Cookie Notice — bestukbettingsiteslist.com
              </p>
              <p className="text-[11px] text-white/50 leading-relaxed">
                We use essential cookies to keep the site running and optional analytics cookies to improve your experience.
                Declining keeps only strictly necessary cookies active.{" "}
                <Link
                  href="/cookie-policy"
                  className="text-[hsl(var(--gold))] hover:underline font-medium"
                >
                  Read our Cookie Policy
                </Link>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleDecline}
              className="rounded-lg border border-white/20 bg-transparent px-4 py-2 text-xs font-semibold text-white/60 hover:text-white hover:border-white/40 transition-colors"
            >
              Essential only
            </button>
            <button
              onClick={handleAccept}
              className="rounded-lg bg-[hsl(var(--gold))] hover:brightness-110 px-5 py-2 text-xs font-bold text-[hsl(var(--navy-deep))] transition-all"
            >
              Accept all
            </button>
            <button
              onClick={handleDecline}
              aria-label="Close"
              className="rounded-lg border border-white/15 p-2 text-white/40 hover:text-white/70 transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
