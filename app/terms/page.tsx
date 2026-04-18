import Link from "next/link"
import { PolicyLayout, PolicySection } from "@/components/policy-layout"

export default function TermsPage() {
  return (
    <PolicyLayout title="Website Terms of Use — bestukbettingsiteslist.com">
      <PolicySection title="Agreement to terms">
        <p>
          By accessing or using bestukbettingsiteslist.com you accept these terms in full. If you disagree with any
          part of this document, please discontinue use of the site immediately.
        </p>
      </PolicySection>

      <PolicySection title="Nature of the service">
        <p>
          We publish independent editorial comparisons and rankings of third-party bookmaking services. We are not a
          bookmaker, betting exchange, or gambling operator. We do not place bets, accept deposits, or hold player
          funds on behalf of any individual.
        </p>
      </PolicySection>

      <PolicySection title="Age restriction">
        <p>
          This website is strictly for adults aged 18 years or older residing in Great Britain. By using the site you
          confirm you meet this requirement. Gambling under 18 is illegal under UK law.
        </p>
      </PolicySection>

      <PolicySection title="Accuracy of information">
        <p>
          Bonus figures, odds information, and product descriptions are editorial snapshots that may not reflect
          current live terms. Offers change without notice. Always verify promotions and rules directly on the
          bookmaker&apos;s official website before depositing or placing any bet.
        </p>
      </PolicySection>

      <PolicySection title="External links">
        <p>
          Links leaving this site take you to third-party environments governed by their own terms and privacy
          policies. We are not responsible for the conduct, content, or practices of linked operators. Some links
          carry affiliate identifiers — see the Advertiser Disclosure on the homepage.
        </p>
      </PolicySection>

      <PolicySection title="Responsible gambling">
        <p>
          Gambling carries financial risk. Only stake money you can afford to lose. Use the deposit limits,
          self-exclusion tools, and reality checks offered by all UKGC-licensed operators. The National Gambling
          Helpline is available free 24/7 on 0808 8020 133.
        </p>
      </PolicySection>

      <PolicySection title="Intellectual property">
        <p>
          Original copy, layout, and design elements created by bestukbettingsiteslist.com remain our intellectual
          property. Bookmaker logos are the property of their respective owners and are reproduced nominatively for
          identification purposes only.
        </p>
      </PolicySection>

      <PolicySection title="Limitation of liability">
        <p>
          To the maximum extent permitted by English and Welsh law, we exclude all liability for any loss or damage
          arising from reliance on the content of this site, including financial loss resulting from betting
          decisions. Jurisdiction-specific statutory rights are unaffected.
        </p>
      </PolicySection>

      <PolicySection title="Privacy">
        <p>
          Please read our{" "}
          <Link href="/privacy-policy" className="text-[hsl(var(--navy))] font-medium hover:underline">
            Privacy Policy
          </Link>{" "}
          for information on how we handle personal data.
        </p>
      </PolicySection>

      <PolicySection title="Amendments">
        <p>
          We reserve the right to amend these terms at any time. Continued use of the site following any update
          constitutes acceptance of the revised terms.
        </p>
      </PolicySection>

      <PolicySection title="Governing law">
        <p>
          These terms are governed by the laws of England and Wales. Any dispute shall be subject to the
          non-exclusive jurisdiction of the courts of England and Wales.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
