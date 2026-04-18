import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PolicyLayoutProps {
  title: string
  children: React.ReactNode
}

export function PolicyLayout({ title, children }: PolicyLayoutProps) {
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })

  return (
    <div className="bg-background min-h-screen">
      {/* Navy top bar */}
      <div className="bg-[hsl(var(--navy))] border-b-2 border-[hsl(var(--gold))]">
        <div className="container mx-auto max-w-3xl px-4 py-5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Rankings
          </Link>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight text-balance">
            {title}
          </h1>
          <p className="text-white/40 text-xs mt-1.5">Effective: {date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl px-4 py-8 sm:py-10">
        <div className="bg-card rounded-xl border border-border shadow-sm p-5 sm:p-7 lg:p-8">
          <div className="prose-custom space-y-7 text-foreground/80 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-base sm:text-lg font-display font-bold text-foreground mb-2 flex items-center gap-2">
        <span className="inline-block w-1 h-4 rounded-full bg-[hsl(var(--gold))] shrink-0" aria-hidden />
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-foreground/70 space-y-2 pl-3">{children}</div>
    </section>
  )
}
