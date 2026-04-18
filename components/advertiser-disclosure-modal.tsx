"use client"

import { X, Megaphone } from "lucide-react"

interface AdvertiserDisclosureModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserDisclosureModal({ isOpen, onClose }: AdvertiserDisclosureModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="adv-disclosure-title"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg max-h-[92vh] sm:max-h-[88vh] flex flex-col bg-card rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[hsl(var(--navy))] px-5 pt-5 pb-4 relative shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-start gap-3 pr-10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--gold))]">
              <Megaphone className="w-5 h-5 text-[hsl(var(--navy-deep))]" strokeWidth={2} />
            </div>
            <div>
              <h2 id="adv-disclosure-title" className="font-display text-lg font-extrabold text-white">
                Advertiser Disclosure
              </h2>
              <p className="text-[11px] text-[hsl(var(--gold))]/80 font-semibold uppercase tracking-wider">How we are funded</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 text-sm text-foreground/75 leading-relaxed">
          <div className="rounded-xl border border-border bg-muted/40 p-4">
            <h3 className="text-sm font-bold text-foreground mb-1.5">Commercial links</h3>
            <p>
              bestukbettingsiteslist.com may receive payment when you use outbound links to bookmakers. That income
              supports hosting and editorial work.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground mb-1.5">Editorial independence</h3>
            <p className="mb-2">Fees do not buy placement. We order and score brands by:</p>
            <ul className="space-y-1.5">
              {[
                "UKGC licence and regulatory compliance",
                "Odds competitiveness and market depth",
                "Promotional clarity and payout speed",
                "App stability, mobile UX, and customer support",
              ].map((item) => (
                <li key={item} className="flex gap-2 items-start">
                  <span className="text-[hsl(var(--gold))] font-bold mt-0.5 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[hsl(var(--gold))]/30 bg-[hsl(var(--gold))]/8 p-4">
            <h3 className="text-sm font-bold text-foreground mb-1.5">Your check</h3>
            <p>
              Confirm every offer on the operator&apos;s own site. Stake only what you can afford to lose.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-border bg-[hsl(var(--navy))] px-5 py-3">
          <p className="text-center text-xs font-semibold text-white/60">
            18+ · UK customers only · Play responsibly · BeGambleAware.org
          </p>
        </div>
      </div>
    </div>
  )
}
