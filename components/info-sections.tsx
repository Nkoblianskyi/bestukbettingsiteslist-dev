"use client"


const sections = [
  {

    title: "How we rank UK betting sites",
    body: "Our editorial team opens real accounts, tests deposits and withdrawals, places bets across multiple markets, and contacts customer support on every bookmaker we review. Rankings reflect current product quality — not headline bonus sizes. Affiliate partnerships fund this site but never alter the order of merit.",
  },
  {

    title: "What our scores measure",
    body: "Each bookmaker is scored across five pillars: odds competitiveness in mainstream markets, live-betting depth and streaming coverage, mobile app stability and speed, KYC and withdrawal experience, and transparency of promotional terms. Weighted averages produce the final score shown on each listing.",
  },
  {

    title: "Choosing the right bookmaker for you",
    body: "The top-ranked site is not always the best fit for every punter. If you follow Premier League football daily, prioritise in-play depth and an acca builder. If horse racing is your game, look for Best Odds Guaranteed and early morning markets. Use the feature tags on each card to match the product to how you actually bet.",
  },
  {

    title: "Welcome bonuses — what to check",
    body: "Free-bet and deposit-match offers change without notice. The figures on our cards are snapshots; the live terms on the operator's site are the legal document. Key things to verify: minimum qualifying bet, odds restrictions, days to use the credit, and whether the free-bet stake is returned on winning.",
  },
  {

    title: "UKGC licensing and player safety",
    body: "Every bookmaker listed here holds a licence from the UK Gambling Commission, which mandates segregated player funds, independent auditing, and accessible responsible-gambling tooling. A licence is a minimum standard — it means there is a regulator with real enforcement power if something goes wrong.",
  },
  {

    title: "Responsible gambling",
    body: "Set a fixed stake budget before you start and treat any return as a bonus. Deposit limits, session timers, and self-exclusion are free tools available on every UKGC-licensed site. If gambling starts to feel compulsive rather than recreational, use the National Gambling Helpline (0808 8020 133, free, 24/7) or the links in our footer.",
  },
]

export function InfoSections() {
  return (
    <section className="mt-10 sm:mt-12">
      {/* Section intro */}
      <div className="flex items-center gap-3 mb-6">
        <div className="h-5 w-1 rounded-full bg-[hsl(var(--gold))]" aria-hidden />
        <h2 className="font-display text-base sm:text-lg font-bold text-foreground">
          How bestukbettingsiteslist reviews bookmakers
        </h2>
      </div>

      <div className="rounded-xl bg-[hsl(var(--navy))]/4 border border-border p-4 sm:p-5 mb-5">
        <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
          Finding the right bookmaker is not about chasing the biggest welcome bonus — it is about locating an operator
          whose product matches the markets you bet on, the device you use, and the speed at which you expect to access
          winnings. Our table is built to surface those differences clearly.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {sections.map((block) => {

          return (
            <article
              key={block.title}
              className="bg-card border border-border rounded-xl p-4 sm:p-5 hover:border-[hsl(var(--gold))]/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div>
                  <h3 className="font-display text-sm font-bold text-foreground mb-1.5">{block.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{block.body}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div className="mt-5 rounded-xl border border-border bg-card px-4 py-3">
        <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
          Content &copy; bestukbettingsiteslist.com. Promotions are for adults 18+ in Great Britain only. Identity
          verification and location checks apply. Additional restrictions may apply — see each operator for full terms.
        </p>
      </div>
    </section>
  )
}
