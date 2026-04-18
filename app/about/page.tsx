import { PolicyLayout, PolicySection } from "@/components/policy-layout"

export default function AboutPage() {
  return (
    <PolicyLayout title="About bestukbettingsiteslist.com">


      <PolicySection title="Why this site exists">
        <p>
          The UK betting market is competitive and every brand leads with its biggest welcome offer. We built
          bestukbettingsiteslist.com to cut through that noise: one ranked table, consistent scoring across
          bookmakers, and plain-English notes so you can compare product quality — not just bonus headlines — before
          you click through.
        </p>
      </PolicySection>

      <PolicySection title="Editorial standards">
        <p>
          Rankings are built on a multi-factor scoring model that covers odds competitiveness, live-betting depth,
          app quality, withdrawal speed, and promotional transparency. Affiliate revenue helps fund the editorial work
          but does not purchase rank positions — if a product quality declines, its score moves down.
        </p>
        <ul className="space-y-2 pl-4 list-disc mt-2">
          <li><strong className="text-foreground/90">Licensing:</strong> Only UKGC-licensed operators are considered.</li>
          <li><strong className="text-foreground/90">Responsible gambling:</strong> Deposit tools, session limits, and self-exclusion must be clearly accessible.</li>
          <li><strong className="text-foreground/90">Product:</strong> Live betting, bet builders, streaming, and acca tools are evaluated.</li>
          <li><strong className="text-foreground/90">Payments:</strong> Commonly available UK payment rails and realistic cash-out timelines.</li>
          <li><strong className="text-foreground/90">Support:</strong> Responsive customer service when issues arise.</li>
        </ul>
      </PolicySection>

      <PolicySection title="Our review process">
        <p>
          Our editors open real accounts, complete full KYC, make deposits via common UK payment methods, and time
          the withdrawal process. We also test bet builders, live-betting interfaces, and streaming access on both
          desktop and mobile. Offers and features are cross-referenced against regulator bulletins on a rolling basis.
        </p>
      </PolicySection>

      <PolicySection title="Commercial transparency">
        <p>
          Outbound links to bookmakers may include affiliate identifiers. This generates revenue that funds the
          site. Full disclosure is available via the &quot;Advertiser Disclosure&quot; button on the homepage. Our
          order of merit is determined by editorial scoring, not commercial arrangements.
        </p>
      </PolicySection>

      <PolicySection title="Responsible gambling commitment">
        <p>
          Gambling should be entertainment with a fixed, affordable ceiling. If you are chasing losses, gambling to
          relieve stress, or losing track of time and money spent, please contact one of the support organisations
          linked in our site footer. They are free, confidential, and available around the clock.
        </p>
        <p className="text-xs text-muted-foreground bg-muted rounded-lg p-3 border border-border mt-2 font-medium">
          18+ only — bestukbettingsiteslist.com does not accept wagers. All gambling activity takes place on fully
          licensed third-party platforms subject to their own terms and conditions.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
