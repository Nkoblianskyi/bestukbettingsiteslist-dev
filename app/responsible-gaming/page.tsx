import { PolicyLayout, PolicySection } from "@/components/policy-layout"
import { ShieldCheck, Clock, Ban, Globe, Phone, AlertTriangle } from "lucide-react"

export default function ResponsibleGamingPage() {
  return (
    <PolicyLayout title="Safer Gambling — bestukbettingsiteslist.com">
      {/* Emergency strip */}
      <div className="rounded-xl bg-red-50 border border-red-200 p-4 flex gap-3">
        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-red-800 mb-1 text-sm">If gambling is causing you harm right now</p>
          <p className="text-red-700 text-sm leading-relaxed">
            Call the <strong>National Gambling Helpline: 0808 8020 133</strong> — free, confidential, and open 24
            hours a day, 7 days a week.
          </p>
        </div>
      </div>

      <PolicySection title="What responsible gambling means">
        <p>
          Responsible gambling means treating betting as a paid form of entertainment with a fixed budget and a clear
          limit. It means understanding that the house edge ensures losses over the long run, and that short-term wins
          do not change that mathematical reality.
        </p>
      </PolicySection>

      <PolicySection title="Core principles">
        <div className="grid sm:grid-cols-2 gap-3 mt-1">
          {[
            { icon: <Clock className="w-4 h-4 text-blue-600" />, title: "Set time limits", body: "Decide how long you will spend before you open a site. Use session timers available on every UKGC-licensed bookmaker." },
            { icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />, title: "Set deposit limits", body: "Use daily, weekly, and monthly deposit caps. They take effect immediately on all licensed sites." },
            { icon: <Ban className="w-4 h-4 text-red-500" />, title: "Never chase losses", body: "Accept that a losing session is the cost of entertainment. Increasing stakes to recover losses leads to larger losses." },
            { icon: <Globe className="w-4 h-4 text-[hsl(var(--gold-dark))]" />, title: "Gamble only with spare funds", body: "Never use money earmarked for rent, bills, food, or essentials. Never borrow to bet." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-muted/50 border border-border p-4">
              <div className="flex items-center gap-2 mb-1.5">
                {item.icon}
                <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </PolicySection>

      <PolicySection title="Warning signs">
        <ul className="space-y-1.5 pl-4 list-disc">
          {[
            "You are spending more time or money on gambling than you intended",
            "You feel anxious, irritable, or depressed when not gambling",
            "You hide your gambling activity from family or friends",
            "You have borrowed money or sold possessions to fund gambling",
            "Gambling is affecting your work, relationships, or daily responsibilities",
            "You find it difficult or impossible to stop when you decide to",
            "You are gambling to escape problems, stress, or negative emotions",
            "You need to bet larger amounts to feel the same excitement",
          ].map((sign) => <li key={sign}>{sign}</li>)}
        </ul>
        <p className="text-xs text-muted-foreground mt-2">
          If you recognise two or more of these patterns, please speak to a professional as soon as possible.
        </p>
      </PolicySection>

      <PolicySection title="Tools available on licensed UK sites">
        <ul className="space-y-1.5 pl-4 list-disc">
          <li><strong className="text-foreground/90">Deposit limits</strong> — daily, weekly, or monthly caps you set yourself</li>
          <li><strong className="text-foreground/90">Loss limits</strong> — caps on how much you can lose in a given period</li>
          <li><strong className="text-foreground/90">Session time reminders</strong> — pop-ups after a set amount of time logged in</li>
          <li><strong className="text-foreground/90">Reality checks</strong> — periodic summaries of net win/loss during a session</li>
          <li><strong className="text-foreground/90">Self-exclusion</strong> — temporary or permanent blocks on your account</li>
          <li><strong className="text-foreground/90">GamStop</strong> — national self-exclusion scheme covering all UKGC-licensed operators simultaneously</li>
        </ul>
      </PolicySection>

      <PolicySection title="Support organisations">
        <div className="grid sm:grid-cols-2 gap-3 mt-1">
          {[
            { icon: <Globe className="w-4 h-4 text-blue-600" />, name: "GambleAware", desc: "Leading UK safer-gambling charity — information, advice, and referrals to specialist treatment.", web: "www.gambleaware.org", phone: "0808 8020 133" },
            { icon: <Phone className="w-4 h-4 text-emerald-600" />, name: "GamCare", desc: "Free support, advice, and counselling for anyone affected by gambling harm.", web: "www.gamcare.org.uk", phone: "0808 8020 133" },
            { icon: <ShieldCheck className="w-4 h-4 text-purple-600" />, name: "Gamblers Anonymous", desc: "Peer-support fellowship meetings across the UK for people with gambling problems.", web: "www.gamblersanonymous.org.uk", phone: "020 7384 3040" },
            { icon: <Clock className="w-4 h-4 text-orange-600" />, name: "Gordon Moody", desc: "Residential treatment programmes and online therapy for severe gambling addiction.", web: "www.gordonmoody.org.uk", phone: "01384 241 292" },
          ].map((org) => (
            <div key={org.name} className="rounded-xl border border-border bg-card p-4">
              <div className="flex items-center gap-2 mb-1.5">
                {org.icon}
                <h3 className="font-semibold text-foreground text-sm">{org.name}</h3>
              </div>
              <p className="text-xs text-muted-foreground mb-2 leading-relaxed">{org.desc}</p>
              <p className="text-xs text-muted-foreground"><strong className="text-foreground/70">Web:</strong> {org.web}</p>
              <p className="text-xs text-muted-foreground"><strong className="text-foreground/70">Phone:</strong> {org.phone}</p>
            </div>
          ))}
        </div>
      </PolicySection>

      <PolicySection title="Support for families and friends">
        <p>
          Gambling harm affects more than the individual. If someone close to you has a gambling problem: do not lend
          them money; encourage them to seek professional help; look after your own wellbeing; and consider contacting
          GamCare, which also supports affected family members.
        </p>
        <p className="text-xs text-muted-foreground bg-muted rounded-lg p-3 border border-border mt-2">
          Gambling disorder is a recognised medical condition, not a character flaw. Recovery is possible with the right
          support. The hardest step is acknowledging there is a problem.
        </p>
      </PolicySection>
    </PolicyLayout>
  )
}
