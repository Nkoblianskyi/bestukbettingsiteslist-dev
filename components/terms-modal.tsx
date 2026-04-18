"use client"

import { X, ShieldAlert } from "lucide-react"

interface TermsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
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
              <ShieldAlert className="w-5 h-5 text-[hsl(var(--navy-deep))]" strokeWidth={2} />
            </div>
            <div>
              <h2 id="terms-modal-title" className="font-display text-lg font-extrabold text-white">
                Site Rules &amp; 18+
              </h2>
              <p className="text-[11px] text-[hsl(var(--gold))]/80 font-semibold uppercase tracking-wider">Terms of use</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 text-sm text-foreground/75 leading-relaxed">
          <p>
            Using <strong className="text-foreground">bestukbettingsiteslist.com</strong> means you accept these
            rules. They apply on phone, tablet, and desktop.
          </p>
          <div className="rounded-xl border border-[hsl(var(--gold))]/30 bg-[hsl(var(--gold))]/8 p-4">
            <p className="font-bold text-foreground mb-1">Age restriction</p>
            <p>You must be 18 or older. This site discusses gambling — minors should leave immediately.</p>
          </div>
          <div className="rounded-xl border border-border bg-muted/40 p-4">
            <p className="font-bold text-foreground mb-2">Responsible play</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Set time and money limits before you bet</li>
              <li>Never chase losses</li>
              <li>Ask for help early — GambleAware (0808 8020 133)</li>
            </ul>
          </div>
          <p>
            We cannot guarantee offers stay accurate — operators change terms at any time. External sites have their
            own policies; we are not responsible for third-party content.
          </p>
          <p className="text-xs text-muted-foreground">
            No warranty is provided. Do not rely on this site as legal or financial advice. See our full terms page
            for details.
          </p>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-border bg-[hsl(var(--navy))] px-5 py-3">
          <p className="text-center text-xs font-semibold text-white/60">
            18+ · T&amp;Cs apply · BeGambleAware.org · Play responsibly
          </p>
        </div>
      </div>
    </div>
  )
}
