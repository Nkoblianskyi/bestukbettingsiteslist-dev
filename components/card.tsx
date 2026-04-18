"use client"

import { useState } from "react"
import { Star, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"
import type { BettingSite } from "../types"
import Link from "next/link"

interface SiteCardProps {
  site: BettingSite
  rank: number
}

const RANK_META: Record<number, { badge: string; badgeStyle: string; rankStyle: string }> = {
  1: {
    badge: "Editor's Choice",
    badgeStyle: "bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))]",
    rankStyle: "text-[hsl(var(--gold))]",
  },
  2: {
    badge: "Top Rated",
    badgeStyle: "bg-slate-200 text-slate-700",
    rankStyle: "text-slate-400",
  },
  3: {
    badge: "Best Value",
    badgeStyle: "bg-orange-100 text-orange-700",
    rankStyle: "text-orange-400",
  },
}

function StarRating({ score, size = 13 }: { score: number; size?: number }) {
  const starRating = score / 2
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => {
        const fill = Math.max(0, Math.min(1, starRating - i))
        return (
          <span key={i} className="relative shrink-0" style={{ width: size, height: size }}>
            <Star
              className="absolute inset-0 text-slate-200"
              style={{ width: size, height: size }}
              fill="currentColor"
              strokeWidth={0}
            />
            <Star
              className="absolute inset-0 text-[hsl(var(--gold))]"
              style={{
                width: size,
                height: size,
                clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)`,
              }}
              fill="currentColor"
              strokeWidth={0}
            />
          </span>
        )
      })}
    </div>
  )
}

export function Card({ site, rank }: SiteCardProps) {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false)
  const meta = RANK_META[rank] ?? { badge: `#${rank}`, badgeStyle: "bg-slate-100 text-slate-600", rankStyle: "text-slate-400" }
  const isTop = rank === 1
  const termsText = site.terms ?? ""

  return (
    <article
      className={`relative bg-card rounded-xl overflow-hidden transition-shadow duration-200 ${
        isTop
          ? "ring-2 ring-[hsl(var(--gold))] shadow-lg shadow-[hsl(var(--gold))]/10"
          : "border border-border shadow-sm hover:shadow-md"
      }`}
    >
      {/* Rank-1 gold accent bar at top */}
      {isTop && (
        <div className="h-1 w-full bg-[hsl(var(--gold))]" aria-hidden />
      )}

      {/* ——— Desktop layout (lg+) ——— */}
      <div className="hidden lg:grid grid-cols-[64px_200px_1fr_180px_160px] items-stretch min-h-[104px]">

        {/* 1. Rank column */}
        <div className="flex flex-col items-center justify-center bg-[hsl(var(--navy))] gap-1 py-4 px-2">
          <span className="text-[9px] font-bold uppercase tracking-widest text-white/40">Rank</span>
          <span className={`font-display text-3xl font-extrabold leading-none ${meta.rankStyle}`}>{rank}</span>
          {RANK_META[rank] && (
            <span className={`mt-1.5 text-[7px] font-bold uppercase px-1.5 py-0.5 rounded-sm whitespace-nowrap ${meta.badgeStyle}`}>
              {meta.badge}
            </span>
          )}
        </div>

        {/* 2. Logo column */}
        <div className="flex items-center justify-center bg-slate-50 border-r border-border px-5 py-4">
          <img
            src={site.logo || "/placeholder.svg"}
            alt={site.name}
            className="max-h-[56px] max-w-[140px] w-auto object-contain"
          />
        </div>

        {/* 3. Offer column */}
        <div className="flex flex-col items-center justify-center px-6 py-4 border-r border-border gap-1 text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">Welcome Offer</p>
          <p className="font-display text-lg font-extrabold text-foreground leading-tight">{site.bonus}</p>
          <p className="text-sm font-semibold text-emerald-700">{site.welcomeOffer}</p>
        </div>

        {/* 4. Score column */}
        <div className="flex flex-col items-center justify-center gap-1.5 px-4 py-4 border-r border-border">
          <div className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-[hsl(var(--navy))] ring-2 ring-[hsl(var(--gold))]/50 shrink-0">
            <span className="font-display text-xl font-extrabold text-white leading-none">{site.score.toFixed(1)}</span>
            <span className="text-[7px] font-bold uppercase tracking-wider text-[hsl(var(--gold))]">Score</span>
          </div>
          <StarRating score={site.score} size={12} />
          <span className="text-[9px] text-muted-foreground">{site.reviews.toLocaleString("en-GB")} reviews</span>
        </div>

        {/* 5. CTA column */}
        <div className="flex flex-col items-center justify-center gap-2 px-4 py-4">
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-1.5 rounded-lg font-bold text-sm py-3 transition-all hover:brightness-110 active:scale-[0.98] ${
              isTop
                ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))] shadow-md"
                : "bg-[hsl(var(--navy))] text-white"
            }`}
          >
            Claim Offer
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
          
        </div>
      </div>

      {/* ——— Tablet layout (md to lg) ——— */}
      <div className="hidden md:grid lg:hidden grid-cols-[52px_160px_1fr_130px] items-stretch min-h-[90px]">
        {/* Rank */}
        <div className="flex flex-col items-center justify-center bg-[hsl(var(--navy))] py-3 px-1 gap-0.5">
          <span className="text-[7px] font-bold uppercase tracking-widest text-white/40">Rank</span>
          <span className={`font-display text-2xl font-extrabold leading-none ${meta.rankStyle}`}>{rank}</span>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center bg-slate-50 border-r border-border px-4 py-3">
          <img src={site.logo || "/placeholder.svg"} alt={site.name} className="max-h-[48px] max-w-[120px] w-auto object-contain" />
        </div>

        {/* Offer + badge */}
        <div className="flex flex-col justify-center px-4 py-3 border-r border-border gap-0.5">
          {RANK_META[rank] && (
            <span className={`self-start text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-sm mb-1 ${meta.badgeStyle}`}>
              {meta.badge}
            </span>
          )}
          <p className="font-display text-sm font-extrabold text-foreground leading-tight">{site.bonus}</p>
          <p className="text-xs font-semibold text-emerald-700">{site.welcomeOffer}</p>
        </div>

        {/* Score + CTA */}
        <div className="flex flex-col items-center justify-center gap-2 px-3 py-3">
          <div className="flex flex-col items-center justify-center w-11 h-11 rounded-full bg-[hsl(var(--navy))] ring-2 ring-[hsl(var(--gold))]/50 shrink-0">
            <span className="font-display text-base font-extrabold text-white leading-none">{site.score.toFixed(1)}</span>
          </div>
          <StarRating score={site.score} size={10} />
          <Link
            href={site.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full flex items-center justify-center gap-1 rounded-lg font-bold text-xs py-2 transition-all hover:brightness-110 ${
              isTop ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))]" : "bg-[hsl(var(--navy))] text-white"
            }`}
          >
            Claim
            <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* ——— Mobile layout ——— */}
      <div className="md:hidden">
        <div className="flex items-stretch">
          {/* Rank stripe */}
          <div className="w-12 shrink-0 bg-[hsl(var(--navy))] flex flex-col items-center justify-center py-4 gap-1">
            <span className="text-[7px] font-bold uppercase tracking-widest text-white/40">Rank</span>
            <span className={`font-display text-2xl font-extrabold leading-none ${meta.rankStyle}`}>{rank}</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 p-3">
            {/* Logo + badge row */}
            <div className="flex items-start justify-between gap-2 mb-2.5">
              <div className="flex items-center justify-center bg-slate-50 border border-border rounded-lg h-[46px] w-[100px] px-2 shrink-0">
                <img src={site.logo || "/placeholder.svg"} alt={site.name} className="max-h-[32px] max-w-full object-contain" />
              </div>
              {RANK_META[rank] && (
                <span className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded-sm ${meta.badgeStyle}`}>
                  {meta.badge}
                </span>
              )}
            </div>

            {/* Offer */}
            <p className="font-display text-base font-extrabold text-foreground leading-tight mb-0.5">{site.bonus}</p>
            <p className="text-xs font-semibold text-emerald-700 mb-2.5">{site.welcomeOffer}</p>

            {/* Score + CTA row */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-[hsl(var(--navy))] ring-2 ring-[hsl(var(--gold))]/50 shrink-0">
                  <span className="font-display text-sm font-extrabold text-white leading-none">{site.score.toFixed(1)}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <StarRating score={site.score} size={11} />
                  <span className="text-[9px] text-muted-foreground">{site.reviews.toLocaleString("en-GB")} reviews</span>
                </div>
              </div>
              <Link
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`shrink-0 flex items-center gap-1.5 rounded-lg font-bold text-sm px-4 py-2.5 transition-all hover:brightness-110 active:scale-[0.98] ${
                  isTop ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy-deep))]" : "bg-[hsl(var(--navy))] text-white"
                }`}
              >
                Claim
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Terms row — all breakpoints */}
      {termsText && (
        <div className="border-t border-border bg-muted/40 px-3 py-2 md:px-4">
          <div className="flex items-start justify-between gap-2">
            <p className={`text-[10px] text-muted-foreground leading-snug flex-1 ${!isTermsExpanded ? "line-clamp-1" : ""}`}>
              <span className="font-bold text-foreground/50 uppercase tracking-wider mr-1 text-[9px]">T&Cs:</span>
              {termsText}
            </p>
            {termsText.length > 80 && (
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsTermsExpanded(!isTermsExpanded) }}
                className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={isTermsExpanded ? "Collapse terms" : "Expand terms"}
              >
                {isTermsExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>
        </div>
      )}
    </article>
  )
}
