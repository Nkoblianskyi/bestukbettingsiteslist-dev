"use client"

import { useState, useEffect } from "react"
import { X, Star,  ExternalLink } from "lucide-react"
import Link from "next/link"
import type { BettingSite } from "../types"

interface Top3ModalProps {
  bettingSites: BettingSite[]
  casinoSites: BettingSite[]
}

const PODIUM = [
  {
    label: "#2",
    badge: "Runner-Up",
    accentBar: "bg-slate-400",
    border: "border-slate-300",
    ctaStyle: "bg-[hsl(var(--navy))] text-white hover:brightness-110",
    height: "pt-4",
  },
  {
    label: "#1",
    badge: "Editor's Choice",
    accentBar: "bg-[hsl(var(--gold))]",
    border: "border-[hsl(var(--gold))]",
    ctaStyle: "bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))] hover:brightness-110",
    height: "pt-0",
    isTop: true,
  },
  {
    label: "#3",
    badge: "Best Value",
    accentBar: "bg-orange-400",
    border: "border-orange-300",
    ctaStyle: "bg-[hsl(var(--navy))] text-white hover:brightness-110",
    height: "pt-4",
  },
]

function ModalCard({ site, config }: { site: BettingSite; config: (typeof PODIUM)[number] }) {
  return (
    <div
      className={`relative flex flex-col flex-1 max-w-[280px] ${config.height} ${config.isTop ? "z-20" : "z-10"}`}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full rounded-t-xl ${config.accentBar}`} />

      <div
        className={`flex flex-col flex-1 rounded-b-xl border-x border-b ${config.border} bg-card shadow-xl overflow-hidden ${
          config.isTop ? "shadow-[hsl(var(--gold))]/20" : ""
        }`}
      >
        {/* Badge */}
        <div className="flex items-center justify-center gap-1.5 py-2 bg-[hsl(var(--navy))]">
          <span className={`text-[10px] font-bold uppercase tracking-widest ${config.isTop ? "text-[hsl(var(--gold))]" : "text-white/60"}`}>
            {config.badge}
          </span>
        </div>

        {/* Logo */}
        <div className="mx-4 mt-4 mb-3 flex items-center justify-center bg-slate-50 border border-border rounded-lg h-[64px] px-3">
          <img
            src={site?.logo || "/placeholder.svg"}
            alt={site?.name || ""}
            className="max-h-[44px] w-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 px-4 pb-4 gap-2.5">
          {/* Stars */}
          <div className="flex justify-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
            ))}
          </div>

          {/* Offer */}
          <div className="text-center">
            <p className="font-display text-base font-extrabold text-foreground leading-tight">
              {site?.bonus}
            </p>
            <p className="text-xs font-semibold text-emerald-700 mt-0.5">
              {site?.welcomeOffer ?? site?.bonus}
            </p>
          </div>

          {/* CTA */}
          <Link
            href={site?.link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-1.5 w-full rounded-lg font-bold text-xs py-2.5 transition-all active:scale-[0.98] ${config.ctaStyle}`}
          >
            {config.isTop ? "Claim Top Offer" : "Get Bonus"}
            <ExternalLink className="w-3 h-3" />
          </Link>

          {/* Terms */}
          <p className="text-[9px] text-muted-foreground leading-snug line-clamp-2 text-center">
            {site?.terms ?? ""}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Modal({ bettingSites, casinoSites: _casinoSites }: Top3ModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 8000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const top3 = bettingSites.slice(0, 3)
  // Podium order: 2nd, 1st, 3rd
  const ordered = [top3[1], top3[0], top3[2]]

  return (
    <div className="hidden md:flex fixed inset-0 bg-black/80 backdrop-blur-sm z-50 items-center justify-center p-4">
      <div className="relative w-full max-w-3xl">
        {/* Close */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute -top-4 -right-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg text-foreground hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Card container */}
        <div className="bg-background rounded-2xl overflow-hidden shadow-2xl">
          {/* Navy header */}
          <div className="bg-[hsl(var(--navy))] px-6 py-5 text-center">
            <p className="text-[hsl(var(--gold))] text-[10px] font-bold uppercase tracking-[0.25em] mb-1">
              bestukbettingsiteslist.com
            </p>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Today&apos;s Top UK Betting Offers
            </h2>
            <p className="text-white/50 text-xs mt-1">Curated picks from our expert team</p>
          </div>

          {/* Gold accent line */}
          <div className="h-0.5 w-full bg-[hsl(var(--gold))]" />

          {/* Podium */}
          <div className="bg-slate-50 px-6 py-6">
            <div className="flex items-end justify-center gap-3">
              {ordered.map((site, i) => (
                <ModalCard key={site?.id ?? i} site={site} config={PODIUM[i]} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-card border-t border-border px-6 py-3">
            <p className="text-center text-[10px] text-muted-foreground">
              18+ · Operator T&amp;Cs apply ·{" "}
              <a
                href="https://www.begambleaware.org"
                className="text-[hsl(var(--navy))] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                BeGambleAware.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
