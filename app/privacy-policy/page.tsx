import Link from "next/link"
import { PolicyLayout, PolicySection } from "@/components/policy-layout"

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout title="Privacy Policy — bestukbettingsiteslist.com">
      <PolicySection title="Who we are">
        <p>
          bestukbettingsiteslist.com is an independent comparison website that reviews and ranks UK-licensed
          bookmakers. The site is operated by K.C. NTOMATA LIMITED, registered in Cyprus. We publish editorial
          comparisons only — we do not accept wagers or hold player funds.
        </p>
      </PolicySection>

      <PolicySection title="Data we may process">
        <ul className="space-y-1.5 pl-4 list-disc">
          <li>
            <strong className="text-foreground/90">Technical logs:</strong> IP address, browser type, approximate
            location derived from IP, and timestamps of requests.
          </li>
          <li>
            <strong className="text-foreground/90">Usage signals:</strong> Pages visited, scroll depth, and
            navigation flows — only when analytics cookies are accepted.
          </li>
          <li>
            <strong className="text-foreground/90">Communications:</strong> If you contact us by email, we retain
            the thread for as long as necessary to resolve your query.
          </li>
        </ul>
        <p className="text-xs text-muted-foreground bg-muted rounded-lg p-3 border border-border mt-2">
          We do not operate a sportsbook. We do not hold betting history, payment details, or personal account
          information related to gambling activity.
        </p>
      </PolicySection>

      <PolicySection title="Legal bases (UK GDPR)">
        <p>
          We rely on legitimate interests to operate and secure the site, and on consent for non-essential cookies.
          You may withdraw consent at any time via your browser settings or the cookie banner on this site.
        </p>
      </PolicySection>

      <PolicySection title="Sharing">
        <p>
          Data may be processed by our hosting provider, analytics vendor, and affiliate networks under data
          processing agreements. We do not sell personal data as a commercial product. We will comply with lawful
          requests from competent authorities.
        </p>
      </PolicySection>

      <PolicySection title="Retention">
        <p>
          Server logs rotate on a short cycle. Analytics aggregates are stored in anonymised form. Email
          correspondence is deleted once fully resolved unless legal obligations require otherwise.
        </p>
      </PolicySection>

      <PolicySection title="Security">
        <p>
          We use HTTPS in transit, access controls on all dashboards, and work with vendors that maintain
          industry-standard security practices. No online system is risk-free; please report any suspected
          vulnerability promptly.
        </p>
      </PolicySection>

      <PolicySection title="Your rights">
        <p>
          Under UK GDPR you may request access to, correction of, deletion of, restriction of, or portability of
          personal data we hold about you. You also have the right to object to processing based on legitimate
          interests.
        </p>
        <p className="mt-2">
          Supervisory authority: the{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-[hsl(var(--navy))] font-medium hover:underline">
            Information Commissioner&apos;s Office (ICO)
          </a>{" "}
          — ico.org.uk
        </p>
      </PolicySection>

      <PolicySection title="Children">
        <p>
          This site is intended solely for adults aged 18 and over. We do not knowingly collect data from minors.
          If you believe a child has submitted information to us, please contact us immediately.
        </p>
      </PolicySection>

      <PolicySection title="International transfers">
        <p>
          Some of our subprocessors operate outside the UK. Where this occurs we rely on UK Standard Contractual
          Clauses or equivalent approved transfer mechanisms.
        </p>
      </PolicySection>

      <PolicySection title="Changes">
        <p>
          Updates will appear here with a revised date. Continued use of the site after a material change
          constitutes acceptance unless we are required by law to obtain fresh consent.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          Data-related queries:{" "}
          <a href="mailto:info@bestukbettingsiteslist.com" className="text-[hsl(var(--navy))] font-medium hover:underline">
            info@bestukbettingsiteslist.com
          </a>
          . For cookie-specific questions, see our{" "}
          <Link href="/cookie-policy" className="text-[hsl(var(--navy))] font-medium hover:underline">
            Cookie Policy
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
