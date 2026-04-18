"use client"

import Image from "next/image"
import { ShieldCheck, Star } from "lucide-react"

interface HeroSectionProps {
  onAdvertiserModalOpen: () => void
  onTermsModalOpen: () => void
}

function getRevisedDate() {
  const d = new Date()
  return {
    iso: d.toISOString().slice(0, 10),
    label: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
  }
}

export function HeroSection({ onAdvertiserModalOpen, onTermsModalOpen }: HeroSectionProps) {
  const { iso, label } = getRevisedDate()

  return (
    <div className="relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(var(--navy))]/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl px-4 xl:max-w-6xl py-10 md:py-14">
        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[11px] text-white/50 font-medium">
            Updated <time dateTime={iso}>{label}</time>
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-balance text-white mb-3">
          Best UK Betting Sites —{" "}
          <span className="text-[hsl(var(--gold))]">Ranked by Experts</span>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
          Our editorial team independently tests every top UK bookmaker across bonuses, markets, withdrawals and apps.
          Compare the best offers in one place — fully UKGC regulated.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2.5} />, text: "UKGC Licensed" },
            { icon: <Image src="/flag.png" alt="" width={18} height={12} className="rounded-sm" />, text: "UK Only" },
            { icon: <Star className="w-3.5 h-3.5 text-[hsl(var(--gold))] fill-[hsl(var(--gold))]" />, text: "Editor Verified" },
          ].map((b) => (
            <span
              key={b.text}
              className="inline-flex items-center gap-1.5 rounded-md bg-white/10 border border-white/20 backdrop-blur-sm px-2.5 py-1.5 text-xs font-semibold text-white/90"
            >
              {b.icon}
              {b.text}
            </span>
          ))}
        </div>

        {/* Disclosure links */}
        <div className="flex flex-wrap gap-2 items-center">
          <button
            type="button"
            onClick={onAdvertiserModalOpen}
            className="text-[10px] font-semibold uppercase tracking-wide text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
          >
            Advertiser Disclosure
          </button>
          <span className="text-white/20 text-xs">·</span>
          <button
            type="button"
            onClick={onTermsModalOpen}
            className="text-[10px] font-semibold uppercase tracking-wide text-white/40 hover:text-white/70 transition-colors underline underline-offset-2"
          >
            18+ T&amp;Cs Apply
          </button>
          <span className="text-white/20 text-xs">·</span>
          <span className="text-[10px] text-white/30">BeGambleAware.org</span>
        </div>
      </div>
    </div>
  )
}
