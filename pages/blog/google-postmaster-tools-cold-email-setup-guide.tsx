import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import BlogSoftCTA from "@/components/BlogSoftCTA";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("google-postmaster-tools-cold-email-setup-guide")!;

export default function GooglePostmasterToolsColdEmailSetupGuide() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        If you send cold email to Gmail addresses and you are not watching{" "}
        <strong>Google Postmaster Tools</strong>, you are flying blind. Open rates
        and reply rates tell you what happened after delivery. Postmaster Tools
        tells you how Gmail itself sees your domain — spam complaints,
        authentication pass rates, and delivery friction — before a campaign
        quietly collapses into the spam folder.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        This guide covers setup for every cold outreach domain, which dashboards
        matter in 2026, the spam-rate thresholds Google publishes, and the exact
        playbook to run when metrics turn yellow. It pairs with our broader{" "}
        <Link
          href="/email-deliverability"
          className="text-[#0058be] font-medium hover:underline"
        >
          email deliverability
        </Link>{" "}
        workflow and the{" "}
        <Link
          href="/blog/cold-email-deliverability-checklist"
          className="text-[#0058be] font-medium hover:underline"
        >
          cold email deliverability checklist
        </Link>
        .
      </p>

      <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-5 mb-8">
        <h2 className="font-bold text-[#1e40af] text-sm mb-3 uppercase tracking-wide">
          Quick takeaways
        </h2>
        <ul className="space-y-2 text-sm text-[#374151]">
          <li>
            • Verify every cold-sending domain in{" "}
            <a
              href="https://postmaster.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0058be] font-medium hover:underline"
            >
              postmaster.google.com
            </a>{" "}
            — not just your primary brand domain.
          </li>
          <li>
            • Google asks bulk senders to keep spam rate{" "}
            <strong>below 0.10%</strong> and to{" "}
            <strong>never reach 0.30%</strong> (per{" "}
            <a
              href="https://support.google.com/mail/answer/81126"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0058be] font-medium hover:underline"
            >
              Gmail sender guidelines
            </a>
            ).
          </li>
          <li>
            • Data only covers personal @gmail.com / @googlemail.com inboxes —
            not Google Workspace business mailboxes.
          </li>
          <li>
            • Empty dashboards usually mean volume is too low that day, not that
            setup failed.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What Google Postmaster Tools actually measures
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Postmaster Tools is Google&apos;s free sender dashboard. After you verify
        a domain, it reports how mail authenticated with that domain performs
        when delivered to <em>personal</em> Gmail accounts. Official setup docs
        live in{" "}
        <a
          href="https://support.google.com/mail/answer/9981691"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          Google&apos;s Postmaster Tools help article
        </a>
        .
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        For cold email operators, that scope matters. A list heavy on corporate
        Google Workspace addresses will under-represent your true volume in
        Postmaster. You still need the tool — Gmail personal inboxes are a large
        slice of B2B lists, and Gmail&apos;s filtering logic is influential —
        but treat the charts as a Gmail-consumer signal, not a full-funnel
        deliverability score.
      </p>
      <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-6 mb-6">
        <h3 className="font-bold text-[#1e293b] mb-3">
          Dashboards cold email teams watch weekly
        </h3>
        <ul className="space-y-2 text-[#475569]">
          <li>
            <strong>Spam rate</strong> — share of authenticated mail that users
            mark as spam. This is the primary health signal for Gmail.
          </li>
          <li>
            <strong>Authentication</strong> — SPF, DKIM, and DMARC pass rates.
            Failures here often explain sudden placement drops.
          </li>
          <li>
            <strong>Delivery errors / feedback</strong> — rejections and
            temporary failures that show up before open rates fall.
          </li>
          <li>
            <strong>Reputation / compliance panels</strong> — where available in
            your Postmaster UI, use them as leading indicators alongside spam
            rate. UI labels evolve; the spam-rate thresholds do not.
          </li>
        </ul>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        Pair Postmaster with your sequencer&apos;s bounce and reply metrics, plus
        DNS health from your{" "}
        <Link
          href="/blog/spf-dkim-dmarc-cold-email-guide"
          className="text-[#0058be] font-medium hover:underline"
        >
          SPF / DKIM / DMARC setup
        </Link>
        . No single dashboard replaces the full picture.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Why cold email senders cannot skip this in 2026
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Since February 2024, Gmail has enforced stricter rules for mail to
        personal Gmail accounts: authentication, low spam rates, valid DNS, and
        TLS. Bulk senders (roughly 5,000+ messages/day to Gmail) need SPF + DKIM
        + DMARC. Google continues to point operators to Postmaster Tools as the
        place to watch spam rate and related signals.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Cold outreach sits in a harder corner than newsletters. Recipients never
        opted in, so complaint sensitivity is higher. A small spike in &quot;Report
        spam&quot; clicks can move you from healthy into the warning band overnight.
        Teams that only watch Instantly or Smartlead open rates often miss the
        real problem: Gmail already distrusts the domain.
      </p>
      <p className="text-[#475569] leading-relaxed mb-6">
        If you are comparing shared platforms versus owned sending, remember that
        Postmaster tracks <em>your domains</em>. On shared infrastructure, IP
        neighborhood risk still exists even when your domain looks fine. That is
        one reason agencies move toward{" "}
        <Link
          href="/blog/byo-aws-ses-vs-shared-email-infrastructure-cold-outreach"
          className="text-[#0058be] font-medium hover:underline"
        >
          BYO AWS SES
        </Link>{" "}
        and a dedicated campaign layer like{" "}
        <Link
          href="/cold-email-software"
          className="text-[#0058be] font-medium hover:underline"
        >
          LeadSnipper cold email software
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        How to set up Google Postmaster Tools (step by step)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Setup is DNS work, not code. Budget 10–15 minutes per domain if you
        already have registrar access.
      </p>

      <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">
        1. Sign in and add the sending domain
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4">
        Go to{" "}
        <a
          href="https://postmaster.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          postmaster.google.com
        </a>{" "}
        with any Google account. Add the domain you authenticate with — Google
        recommends the DKIM <code className="text-sm bg-[#f1f5f9] px-1 rounded">d=</code>{" "}
        domain or the SPF Return-Path domain. If those match, Postmaster can
        attribute mail signed by either.
      </p>
      <p className="text-[#475569] leading-relaxed mb-6">
        Add <strong>every</strong> cold-sending domain and relevant subdomain.
        Agencies running five client domains need five verified properties.
        Postmaster does not roll them up for you.
      </p>

      <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">
        2. Verify ownership with a DNS TXT record
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4">
        Postmaster gives you a TXT verification string. Publish it at the domain
        root in Cloudflare, Route 53, Namecheap, GoDaddy, or wherever DNS lives.
        Wait for propagation, then click Verify. Propagation is often minutes;
        sometimes a few hours.
      </p>
      <p className="text-[#475569] leading-relaxed mb-6">
        Tip: if the domain is already verified in Search Console or Google
        Workspace under the same Google account, verification can complete
        faster. Keep the TXT record in place after success so re-checks do not
        fail later.
      </p>

      <h3 className="text-xl font-bold text-[#1e293b] mt-8 mb-3">
        3. Wait for volume — then read the charts
      </h3>
      <p className="text-[#475569] leading-relaxed mb-4">
        Dashboards stay empty until Gmail sees enough personal-Gmail volume on a
        given day. Low-volume cold domains often show gaps. That is a privacy
        threshold, not a broken install. Keep sending clean, verified mail and
        check again after consistent Gmail-bound volume.
      </p>
      <p className="text-[#475569] leading-relaxed mb-6">
        While you wait, finish warmup and list hygiene. A verified Postmaster
        property with a dirty list is still a reputation problem waiting to
        graph. Use{" "}
        <Link
          href="/email-warmup"
          className="text-[#0058be] font-medium hover:underline"
        >
          structured email warmup
        </Link>{" "}
        and verify contacts before the first real campaign.
      </p>

      <BlogSoftCTA />

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Spam rate: the metric that decides your Gmail fate
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Google&apos;s published guidance is unambiguous: keep the spam rate
        reported in Postmaster Tools <strong>below 0.10%</strong>, and{" "}
        <strong>avoid ever reaching 0.30% or higher</strong>. Crossing into the
        higher band increases spam classification risk and can take time to
        recover from even after you clean up.
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="bg-[#f1f5f9]">
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Spam rate band
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                How to treat it
              </th>
              <th className="px-4 py-2 border border-[#e2e8f0] font-semibold text-[#1e293b]">
                Immediate action
              </th>
            </tr>
          </thead>
          <tbody className="text-[#475569]">
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Under 0.10%
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Healthy operating range
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Keep verifying lists; hold steady volume
              </td>
            </tr>
            <tr className="bg-[#f8fafc]">
              <td className="px-4 py-2 border border-[#e2e8f0]">
                0.10% – under 0.30%
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Warning zone
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Pause aggressive sends; audit copy &amp; targeting
              </td>
            </tr>
            <tr>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                0.30%+
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Enforcement risk
              </td>
              <td className="px-4 py-2 border border-[#e2e8f0]">
                Stop cold volume; rewarm; fix root cause
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        For cold email, treat <strong>0.10% as a ceiling, not a target</strong>.
        Aim operationally lower by tightening ICP, removing unengaged contacts,
        and making opt-out obvious. Google also notes that spam-rate improvements
        can take time to reflect in classification — so react early, not after a
        week of silence.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Authentication dashboard: catch DNS rot early
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Cold email stacks break DNS more often than people admit: a new ESP
        added to SPF without removing old includes, a DKIM key rotated in SES
        but not in DNS, a DMARC policy that never got republished after a domain
        move. Postmaster&apos;s authentication charts surface those failures
        against real Gmail traffic.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Target near-100% pass rates for SPF and DKIM on mail you intend to send.
        DMARC should be published (even at{" "}
        <code className="text-sm bg-[#f1f5f9] px-1 rounded">p=none</code> while
        you monitor) so alignment issues are visible. Bulk-sender rules expect
        SPF + DKIM + DMARC for high Gmail volume.
      </p>
      <p className="text-[#475569] leading-relaxed mb-6">
        When authentication dips, fix DNS before you blame copy. Walk through
        our{" "}
        <Link
          href="/blog/spf-dkim-dmarc-cold-email-guide"
          className="text-[#0058be] font-medium hover:underline"
        >
          SPF vs DKIM vs DMARC guide
        </Link>{" "}
        and validate records with your{" "}
        <Link
          href="/email-deliverability"
          className="text-[#0058be] font-medium hover:underline"
        >
          deliverability checks
        </Link>
        . If you send through Amazon SES, confirm the identities and DKIM
        statuses match what{" "}
        <Link
          href="/blog/how-to-set-up-aws-ses-for-cold-email-step-by-step"
          className="text-[#0058be] font-medium hover:underline"
        >
          your SES cold email setup
        </Link>{" "}
        expects — AWS documents DKIM and identity verification in the{" "}
        <a
          href="https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dkim.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          Amazon SES DKIM documentation
        </a>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Domain health beyond Postmaster
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Postmaster will not tell you about Microsoft Outlook placement, Yahoo
        filtering, or whether your list just hit a spam trap cluster. Use it as
        the Gmail lens inside a wider{" "}
        <Link
          href="/blog/domain-reputation-management-protect-sender-score"
          className="text-[#0058be] font-medium hover:underline"
        >
          domain reputation management
        </Link>{" "}
        habit:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] mb-6">
        <li>
          Verify every list before send — hard bounces poison reputation faster
          than mediocre copy. See{" "}
          <Link
            href="/blog/email-list-cleaning-why-verification-prevents-bounce-disasters"
            className="text-[#0058be] font-medium hover:underline"
          >
            why verification prevents bounce disasters
          </Link>
          .
        </li>
        <li>
          Warm new domains for weeks, not days —{" "}
          <Link
            href="/blog/email-warmup-verification-domain-health-complete-guide"
            className="text-[#0058be] font-medium hover:underline"
          >
            warmup + verification + domain health
          </Link>
          .
        </li>
        <li>
          Cap daily volume per domain —{" "}
          <Link
            href="/blog/how-many-emails-per-day-cold-outreach"
            className="text-[#0058be] font-medium hover:underline"
          >
            how many emails per day
          </Link>{" "}
          keeps ramp curves realistic.
        </li>
        <li>
          Prefer dedicated sending infrastructure when scale matters — compare{" "}
          <Link
            href="/vs/instantly"
            className="text-[#0058be] font-medium hover:underline"
          >
            LeadSnipper vs Instantly
          </Link>{" "}
          if shared pools are part of your risk profile.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What to do when Postmaster turns bad
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Do not keep blasting while you &quot;investigate.&quot; Gmail remembers
        complaint spikes. Use this recovery sequence:
      </p>
      <div className="space-y-3 mb-6">
        {[
          {
            n: "1",
            t: "Pause cold volume on the affected domain",
            d: "Move remaining sends to healthy, warmed domains if you must keep pipeline moving. Never double volume on a sick domain.",
          },
          {
            n: "2",
            t: "Fix authentication and list quality first",
            d: "Confirm SPF/DKIM/DMARC, remove hard bounces, and stop sending to roles/catch-alls that never engage.",
          },
          {
            n: "3",
            t: "Tighten offer and targeting",
            d: "Spam clicks often mean relevance failure. Narrow ICP, rewrite the first line, and make unsubscribe obvious.",
          },
          {
            n: "4",
            t: "Rewarm with engagement-heavy traffic",
            d: "Drop to low daily volume with highly engaged contacts. Rebuild trust over 2–4 weeks before scaling again.",
          },
          {
            n: "5",
            t: "Re-check Postmaster daily until stable",
            d: "Spam rate should trend back under 0.10% and stay there. Only then restore prior sending cadence.",
          },
        ].map((step) => (
          <div
            key={step.n}
            className="flex items-start gap-3 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl p-4"
          >
            <span className="text-[#0058be] font-bold text-lg mt-0.5">
              {step.n}
            </span>
            <div>
              <h4 className="font-bold text-[#1e293b] text-sm">{step.t}</h4>
              <p className="text-[#475569] text-sm">{step.d}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[#475569] leading-relaxed mb-6">
        If open rates fell first and Postmaster confirms the story, dig into{" "}
        <Link
          href="/blog/cold-email-open-rate-dropping-fix-domain-reputation"
          className="text-[#0058be] font-medium hover:underline"
        >
          diagnosing open-rate drops from domain reputation
        </Link>{" "}
        and{" "}
        <Link
          href="/blog/why-cold-emails-land-in-spam-fix-today"
          className="text-[#0058be] font-medium hover:underline"
        >
          why cold emails land in spam
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Agency workflow: Postmaster as a daily ritual
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Indian and multi-client agencies lose domains when nobody owns
        deliverability. Assign a simple cadence:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] mb-4">
        <li>
          <strong>Daily (active campaigns):</strong> glance spam rate + bounces
          in your sequencer.
        </li>
        <li>
          <strong>2–3× per week:</strong> open Postmaster for every sending
          domain; screenshot anomalies into the client channel.
        </li>
        <li>
          <strong>On every new domain:</strong> verify in Postmaster before
          warmup completes — so data is ready when volume starts.
        </li>
        <li>
          <strong>On infrastructure changes:</strong> re-check authentication
          the same day you touch SES identities, Google Workspace, or DNS.
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-6">
        LeadSnipper fits this operating rhythm: BYO AWS SES so reputation is
        yours, built-in verification so bounce spikes are rarer, and INR-friendly{" "}
        <Link
          href="/pricing"
          className="text-[#0058be] font-medium hover:underline"
        >
          pricing
        </Link>{" "}
        for agencies that outgrew shared-pool tools. Compare stacks on our{" "}
        <Link
          href="/blog/instantly-vs-leadsnipper-indian-agencies-comparison"
          className="text-[#0058be] font-medium hover:underline"
        >
          Instantly vs LeadSnipper for Indian agencies
        </Link>{" "}
        page when you are ready to consolidate.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Postmaster Tools checklist before you scale
      </h2>
      <div className="bg-gradient-to-r from-[#3b82f6]/5 to-[#22c55e]/5 border border-[#3b82f6]/20 rounded-xl p-6 mb-6">
        <ul className="space-y-3 text-[#475569]">
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Every cold-sending domain verified at postmaster.google.com
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            SPF, DKIM, and DMARC published and aligning with From domain
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Spam rate habitually under 0.10%; escalation plan if it rises
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Lists verified; catch-alls and role addresses filtered
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Warmup complete before aggressive cold volume
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Clear unsubscribe path in every sequence
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#22c55e] mt-0.5">&#10003;</span>
            Owner assigned to check Postmaster on a fixed cadence
          </li>
        </ul>
      </div>


      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Common Postmaster myths that waste agency time
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>&quot;Empty charts mean I am blocked.&quot;</strong> Usually it means
        that day&apos;s personal-Gmail volume stayed under Google&apos;s reporting
        threshold. Keep authentication clean and volume consistent; data fills in
        when Gmail has enough sample size.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>&quot;High open rates prove Postmaster is fine.&quot;</strong> Open
        rates are noisy (privacy proxies, prefetch, bot opens). Spam rate and
        authentication from Gmail&apos;s own dashboards are clearer leading
        indicators when placement is at risk.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        <strong>&quot;I only need Postmaster on the root brand domain.&quot;</strong>{" "}
        Cold email almost always uses secondary sending domains. Each one needs
        its own verification. Skipping a subdomain is how agencies miss the
        domain that is actually dying.
      </p>
      <p className="text-[#475569] leading-relaxed mb-6">
        <strong>&quot;Switching sequencers fixes a red spam rate.&quot;</strong>{" "}
        Moving from Instantly to Smartlead (or the reverse) does not reset Gmail
        domain history. Fix lists, complaints, and DNS — then choose infrastructure
        that isolates risk. Soft product fit still matters for ops, which is why
        many teams evaluate{" "}
        <Link
          href="/cold-email-software"
          className="text-[#0058be] font-medium hover:underline"
        >
          purpose-built cold email software
        </Link>{" "}
        with verification and owned SES rather than another shared pool.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Bottom line
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Google Postmaster Tools will not write your sequences or fix a bad ICP —
        but it is the cheapest early-warning system Gmail gives you. Verify every
        domain, watch spam rate against Google&apos;s 0.10% / 0.30% guidance, keep
        authentication clean, and treat any sustained rise in complaints as an
        emergency — not a spreadsheet footnote.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        When monitoring, warmup, verification, and owned SES infrastructure live
        in one workflow, fewer domains die quietly. That is the operating model
        LeadSnipper is built for.
      </p>
      <p className="text-[#475569] leading-relaxed">
        Ready to pair Postmaster discipline with sending that you actually
        control?{" "}
        <Link
          href="https://app.leadsnipper.com/signup?product=leadsnipper"
          className="text-[#0058be] font-semibold hover:underline"
        >
          Start a free LeadSnipper trial
        </Link>{" "}
        or review{" "}
        <Link
          href="/pricing"
          className="text-[#0058be] font-medium hover:underline"
        >
          plans and limits
        </Link>{" "}
        before you scale the next domain.
      </p>
    </BlogLayout>
  );
}
