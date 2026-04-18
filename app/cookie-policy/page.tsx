import Link from "next/link"
import { PolicyLayout, PolicySection } from "@/components/policy-layout"

export default function CookiePolicyPage() {
  return (
    <PolicyLayout title="Cookie Policy — bestukbettingsiteslist.com">
      <PolicySection title="What is a cookie?">
        <p>
          A cookie is a small text file placed on your device when you visit a webpage. Cookies allow websites to
          remember your preferences, keep sessions active, and help us understand how visitors interact with our
          content in the aggregate.
        </p>
      </PolicySection>

      <PolicySection title="How bestukbettingsiteslist.com uses cookies">
        <ul className="space-y-2 pl-4 list-disc">
          <li>
            <strong className="text-foreground/90">Strictly necessary:</strong> Stores your cookie preference choice
            and basic security tokens required to serve the page correctly. These cannot be disabled without breaking
            core functionality.
          </li>
          <li>
            <strong className="text-foreground/90">Analytics (if accepted):</strong> Anonymous aggregated counts of
            pages viewed, scroll depth, and navigation paths — used to improve the layout and usefulness of our
            rankings.
          </li>
          <li>
            <strong className="text-foreground/90">Functional:</strong> Remembers UI state such as dismissed modal
            windows so they do not reappear on subsequent page loads during the same session.
          </li>
          <li>
            <strong className="text-foreground/90">Affiliate / referral:</strong> When you click through to a
            bookmaker, their affiliate network may set cookies under their own policy. We do not control those
            third-party cookies.
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Session vs persistent cookies">
        <p>
          Session cookies expire when you close your browser tab. Persistent cookies remain on your device until
          they reach their expiry date or you clear them manually. We keep persistent cookie lifetimes as short as
          practically necessary.
        </p>
      </PolicySection>

      <PolicySection title="Third-party cookies">
        <p>
          Embedded widgets, partner scripts, or analytics providers may set cookies under their own domains and
          policies. We encourage you to review those policies directly if full transparency is important to you.
        </p>
      </PolicySection>

      <PolicySection title="Your controls">
        <p>
          You can manage cookies at any time through the consent banner at the bottom of the page or directly via
          your browser settings. All major browsers allow you to block, delete, or auto-expire cookies.
        </p>
        <p className="text-xs text-muted-foreground bg-muted rounded-lg p-3 border border-border mt-2">
          Note: Blocking all cookies may prevent some features from working correctly — for example, the consent
          banner may reappear on every visit.
        </p>
      </PolicySection>

      <PolicySection title="Policy updates">
        <p>
          We will revise this notice whenever our technical stack changes materially. The effective date at the top
          reflects the most recent revision.
        </p>
      </PolicySection>

      <PolicySection title="Contact">
        <p>
          For questions about this notice, email us at{" "}
          <a href="mailto:info@bestukbettingsiteslist.com" className="text-[hsl(var(--navy))] font-medium hover:underline">
            info@bestukbettingsiteslist.com
          </a>
          . For broader data questions, see our{" "}
          <Link href="/privacy-policy" className="text-[hsl(var(--navy))] font-medium hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
