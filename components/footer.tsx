import Link from "next/link"
import Image from "next/image"

const nav = [
  { href: "/about", label: "About" },
  { href: "/responsible-gaming", label: "Safer Gambling" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/privacy-policy", label: "Privacy" },
]

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--navy-deep))] text-white">

      {/* Safer gambling support bar */}
      <div className="border-b border-white/10">
        <div className="container mx-auto max-w-5xl px-4 xl:max-w-6xl py-5">
          <p className="text-center text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">
            Safer Gambling Support
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { href: "https://www.gamstop.co.uk/", src: "/gamstop.svg", alt: "GamStop" },
              { href: "https://www.begambleaware.org/", src: "/gamble-aware.png", alt: "BeGambleAware" },
              { href: "https://www.gamcare.org.uk/", src: "/gamcare.png", alt: "GamCare" },
              { href: "https://www.gamblingtherapy.org/", src: "/gordon.png", alt: "Gambling Therapy" },
              { href: "https://www.gamblingcommission.gov.uk/", src: "/Gambling_Commission_logo.png", alt: "UK Gambling Commission" },
            ].map((org) => (
              <Link
                key={org.alt}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-1.5 hover:opacity-80 transition-opacity"
              >
                <img src={org.src} alt={org.alt} className="h-7 w-auto object-contain" />
              </Link>
            ))}
          </div>
          <p className="text-center text-[11px] text-white/40 mt-3">
            National Gambling Helpline:{" "}
            <strong className="text-white/60">0808 8020 133</strong>{" "}
            — Free &amp; available 24 hours a day
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto max-w-5xl px-4 xl:max-w-6xl py-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/20 group-hover:ring-[hsl(var(--gold))]/50 transition-all">
                <Image src="/favicon.ico" alt="" width={28} height={28} className="h-5 w-5 object-contain" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-bold text-white text-base leading-tight">Best UK Betting Sites</span>
                <span className="text-[hsl(var(--gold))] font-display font-semibold text-xs tracking-wide">List</span>
              </div>
            </Link>
            <p className="text-[11px] text-white/40 leading-relaxed">
              Independent rankings of UK-licensed bookmakers. We do not accept bets or hold player funds.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/50 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>


        {/* Disclaimer */}
        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 px-4 py-3.5">
          <p className="text-[10px] sm:text-[11px] text-white/40 text-center leading-relaxed">
            <strong className="text-white/60">18+ only.</strong> Gambling can be addictive — please play responsibly.
            All operators listed hold valid UK Gambling Commission licences. Offers shown are subject to change and
            operator T&amp;Cs apply. bestukbettingsiteslist.com earns revenue through affiliate partnerships; this does
            not affect our rankings methodology.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-5 text-center">
          <p className="text-[10px] text-white/25">
            &copy; {new Date().getFullYear()} bestukbettingsiteslist.com &middot; 18+ &middot; United Kingdom
          </p>
        </div>
      </div>
    </footer>
  )
}
