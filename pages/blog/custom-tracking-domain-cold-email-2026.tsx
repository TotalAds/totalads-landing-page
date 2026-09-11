import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import BlogSoftCTA from "@/components/BlogSoftCTA";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost("custom-tracking-domain-cold-email-2026")!;

export default function CustomTrackingDomainColdEmail2026() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        Most cold email teams finish SPF, DKIM, and warmup, then leave link
        tracking on the vendor&apos;s default domain. That shared tracker is
        used by thousands of other senders. When one of them burns reputation,
        your opens and clicks still route through the same host — and filters
        notice the mismatch between a careful From-domain and a noisy third-party
        redirect. A{" "}
        <strong>custom tracking domain</strong> (sometimes called a branded
        tracking domain or link branding) puts those redirects on a subdomain{" "}
        <em>you</em> control.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        This guide covers what a custom tracking domain actually does, why shared
        trackers are a quiet deliverability risk, how to set a CNAME correctly
        (including Cloudflare DNS-only), when to disable open tracking after Apple
        Mail Privacy Protection, how this fits{" "}
        <Link
          href="/blog/byo-aws-ses-vs-shared-email-infrastructure-cold-outreach"
          className="text-[#0058be] font-medium hover:underline"
        >
          BYO AWS SES
        </Link>{" "}
        stacks, and how to verify the setup without trusting vanity open rates.
        Pair it with your{" "}
        <Link
          href="/blog/cold-email-deliverability-checklist"
          className="text-[#0058be] font-medium hover:underline"
        >
          pre-send checklist
        </Link>{" "}
        and{" "}
        <Link
          href="/blog/google-postmaster-tools-cold-email-setup-guide"
          className="text-[#0058be] font-medium hover:underline"
        >
          Google Postmaster Tools
        </Link>{" "}
        monitoring — tracking is hygiene, not a substitute for list quality.
      </p>

      <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-5 mb-8">
        <h2 className="font-bold text-[#1e40af] text-sm mb-3 uppercase tracking-wide">
          Quick takeaways
        </h2>
        <ul className="space-y-2 text-sm text-[#374151]">
          <li>
            • A custom tracking domain is usually a{" "}
            <strong>CNAME</strong> from something like{" "}
            <code className="text-xs bg-[#f1f5f9] px-1 rounded">
              track.yourdomain.com
            </code>{" "}
            to your ESP&apos;s tracking host so opens/clicks stay under your
            brand&apos;s DNS tree.
          </li>
          <li>
            • Shared default trackers pool reputation across unrelated senders —
            a common reason &quot;everything else looks fine&quot; campaigns still
            look spammy on link analysis.
          </li>
          <li>
            • On Cloudflare, set the CNAME to{" "}
            <strong>DNS only</strong> (grey cloud). Proxying often breaks SSL
            verification for the vendor.
          </li>
          <li>
            • Open rates are unreliable after Apple MPP and image proxies. Prefer
            replies, positive replies, and meetings over opens — and consider
            disabling open pixels on first cold touches.
          </li>
          <li>
            • One tracker subdomain{" "}
            <strong>per sending domain</strong> (or per client, for agencies) —
            do not reuse one CTD across unrelated brands.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What a custom tracking domain actually is
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Cold email tools track two things by rewriting your HTML:{" "}
        <strong>opens</strong> (a tiny image/pixel that loads when the message is
        rendered) and <strong>clicks</strong> (links that redirect through a
        tracking host before landing on your real URL). On a shared default
        tracker, those resources live on a domain the vendor operates for many
        customers at once.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        A custom tracking domain moves that hop onto a subdomain of a domain you
        own — typically the same root you send from, or a dedicated outbound root.
        Recipients still click &quot;Book a call&quot; and land on your calendar;
        the difference is the intermediate host looks like{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">
          track.getacme.com
        </code>{" "}
        instead of a generic vendor hostname shared with every other account on
        the platform.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        That alignment matters because modern filters score more than the SMTP
        conversation. They look at URL reputation, redirect chains, and whether
        the domains in the message form a coherent story with your From address
        and authentication.{" "}
        <Link
          href="/blog/spf-dkim-dmarc-cold-email-guide"
          className="text-[#0058be] font-medium hover:underline"
        >
          SPF, DKIM, and DMARC
        </Link>{" "}
        get you authenticated; branded links reduce the &quot;authenticated but
        pointing at a spammy redirect farm&quot; pattern.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Why shared tracking domains quietly hurt deliverability
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Shared trackers are convenient on day one. They are also a reputation
        commons. If other customers blast purchased lists through the same click
        host, blocklists and heuristic systems can treat that host as higher
        risk — even when your domains and mailboxes are clean.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        There is a second failure mode that shows up in audits more than in
        dashboards:{" "}
        <strong>domain mismatch</strong>. Mail from{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">hello@tryacme.com</code>{" "}
        that routes every CTA through an unrelated tracking apex looks less like
        a careful B2B sender and more like commodity bulk mail. You already spent
        effort warming{" "}
        <Link
          href="/blog/email-warmup-verification-domain-health-complete-guide"
          className="text-[#0058be] font-medium hover:underline"
        >
          domains and mailboxes
        </Link>
        ; leaving tracking on a shared host undoes part of that story.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        Custom tracking does not magically raise reply rates. It removes an
        avoidable coupling between your campaigns and strangers&apos; mistakes.
        Treat it like isolating bounce handling on SES configuration sets — small
        ops work that keeps reputation signals attributable to{" "}
        <em>you</em>.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        How to set up a custom tracking domain (CNAME checklist)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Exact hostnames differ by tool, but the pattern is stable:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-[#475569] mb-6">
        <li>
          <strong>Pick a subdomain per sending domain.</strong> Common choices
          are <code className="text-xs bg-[#f1f5f9] px-1 rounded">track</code>,{" "}
          <code className="text-xs bg-[#f1f5f9] px-1 rounded">link</code>, or
          the vendor&apos;s suggested label (Instantly often documents{" "}
          <code className="text-xs bg-[#f1f5f9] px-1 rounded">inst</code> pointing
          at their tracking host). Prefer short, boring names.
        </li>
        <li>
          <strong>Create the CNAME in DNS.</strong> Host = the subdomain label;
          target = the value your ESP shows in settings. On Cloudflare, turn the
          proxy <em>off</em> (DNS only). Orange-cloud proxying frequently breaks
          the vendor&apos;s SSL check.
        </li>
        <li>
          <strong>Wait for propagation, then verify in the tool.</strong> Most
          platforms show &quot;CNAME verified&quot; and &quot;SSL verified.&quot;
          Use a public DNS checker if the UI stays pending after an hour.
        </li>
        <li>
          <strong>Send a test to yourself.</strong> View the HTML source or hover
          links: tracking URLs should use your subdomain. Click through once and
          confirm the final landing URL is unchanged.
        </li>
        <li>
          <strong>Document ownership for agencies.</strong> Each client sending
          domain gets its own CTD. Reusing one tracker across clients recreates a
          mini shared pool inside your agency.
        </li>
      </ol>
      <p className="text-[#475569] leading-relaxed mb-8">
        If verification fails, the usual culprits are proxied Cloudflare records,
        a typo in the target hostname, an old conflicting A/AAAA record on the
        same name, or SSL still provisioning. Fix DNS first; do not keep
        &quot;retrying&quot; campaigns on the shared default while the CTD is
        half-configured.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Open tracking, Apple MPP, and when to turn pixels off
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Open tracking inserts a remote image. Apple Mail Privacy Protection and
        similar proxies prefetch that image, which{" "}
        <strong>inflates open rates</strong> and makes A/B tests on subject lines
        noisier than they look. Amazon SES documents the same class of skew for
        its own open/click metrics: privacy settings and caching can distort
        counts (
        <a
          href="https://docs.aws.amazon.com/ses/latest/dg/faqs-metrics.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          SES open and click metrics FAQs
        </a>
        ).
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        For cold outbound, opens are a weak success metric anyway. A curious
        security scanner can &quot;open&quot; mail; a busy buyer can reply without
        ever loading images. Many high-performing teams:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] mb-6">
        <li>Disable open tracking on first-touch sequences.</li>
        <li>
          Keep click tracking only when the primary CTA is a link you need to
          attribute (demo page, case study). Plain calendar links without wraps
          are often fine.
        </li>
        <li>
          Optimize for positive replies and booked meetings — then use{" "}
          <Link
            href="/blog/inbox-placement-testing-seed-list-cold-email-2026"
            className="text-[#0058be] font-medium hover:underline"
          >
            seed-list inbox placement tests
          </Link>{" "}
          and Postmaster spam rate as health signals, not vanity opens.
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-8">
        A custom tracking domain does not make open pixels accurate. It only
        makes the infrastructure you <em>do</em> use less entangled with other
        senders. If you disable opens entirely, you may still want branded click
        tracking — or no tracking wrappers at all on ultra-short cold emails.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Custom tracking with Amazon SES and BYO infrastructure
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        LeadSnipper&apos;s model is{" "}
        <strong>bring your own Amazon SES</strong>: you own the sending account,
        domains, and reputation. SES can publish open and click events through
        configuration sets, and it rewrites links when click tracking is enabled
        (
        <a
          href="https://docs.aws.amazon.com/ses/latest/dg/faqs-metrics.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          SES metrics documentation
        </a>
        ). You can also omit open/click event types and send plain HTML links on
        HTTPS hosts you control — which is often the cleanest cold-email posture.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Practical SES-oriented rules:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] mb-6">
        <li>
          Do not enable open tracking &quot;because the dashboard looks empty.&quot;
          Empty open charts beat fake 80% opens.
        </li>
        <li>
          If a sequencer layer wraps links, configure its custom tracking domain
          on each outbound domain the same week you finish DNS auth and{" "}
          <Link
            href="/blog/aws-ses-bounce-complaint-configuration-sets-cold-email-2026"
            className="text-[#0058be] font-medium hover:underline"
          >
            bounce/complaint configuration sets
          </Link>
          .
        </li>
        <li>
          Keep transactional and cold streams separated — different domains,
          configuration sets, and trackers when you track at all.
        </li>
        <li>
          Prefer landing pages on a stable HTTPS property you own over shorteners
          and public redirect networks.
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-8">
        Compared with tools that force shared sending pools, BYO SES already
        isolates IP and complaint fate. Custom tracking is the link-layer version
        of that idea: stop sharing the redirect hop. See also{" "}
        <Link
          href="/vs/instantly"
          className="text-[#0058be] font-medium hover:underline"
        >
          LeadSnipper vs Instantly
        </Link>{" "}
        if you are comparing infrastructure ownership, not just sequence UI.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Agency and multi-domain playbook
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Agencies in India and elsewhere often run dozens of client domains. The
        failure mode is reusing one Instantly/Smartlead-style tracker across
        every client &quot;to save DNS work.&quot; That recreates a shared pool
        with your logo on it.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Instead:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] mb-6">
        <li>One CTD per client sending domain (minimum).</li>
        <li>
          Store the CNAME target and verification date in the client runbook next
          to SPF/DKIM/DMARC screenshots.
        </li>
        <li>
          When offboarding a client, remove or disable their tracker so leftovers
          do not keep resolving forever.
        </li>
        <li>
          Educate clients that open rate drops after disabling pixels are{" "}
          <em>expected</em> — reply rate is the real KPI.
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-8">
        If a client insists on open tracking for reporting, keep the CTD, show
        them Postmaster spam rate beside opens, and never let opens override a
        pause when complaints rise.{" "}
        <Link
          href="/blog/how-to-avoid-spam-folder-cold-email"
          className="text-[#0058be] font-medium hover:underline"
        >
          Spam-folder recovery
        </Link>{" "}
        still starts with list quality and authentication, not a new CNAME.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        How to verify it is working (without fooling yourself)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        After DNS verifies:
      </p>
      <ol className="list-decimal pl-6 space-y-3 text-[#475569] mb-6">
        <li>Send a seed email to a mailbox you control.</li>
        <li>
          Inspect the raw HTML: tracking hosts should match your CTD, not the
          vendor default.
        </li>
        <li>
          Click the CTA once; confirm a single clean redirect to the intended
          HTTPS destination (no unexpected extra hops).
        </li>
        <li>
          Watch bounce/complaint and Postmaster for a week — CTD changes should
          not spike complaints; if they do, you likely broke links or SSL.
        </li>
        <li>
          Do not declare victory because opens jumped; MPP and prefetch can move
          that number independently of inbox placement.
        </li>
      </ol>
      <p className="text-[#475569] leading-relaxed mb-8">
        For a deeper read on what seed tests can and cannot prove, see our{" "}
        <Link
          href="/blog/inbox-placement-testing-seed-list-cold-email-2026"
          className="text-[#0058be] font-medium hover:underline"
        >
          inbox placement testing guide
        </Link>
        . Tracking setup is one input; it is not a substitute for verified lists
        (
        <Link
          href="/blog/email-list-cleaning-why-verification-prevents-bounce-disasters"
          className="text-[#0058be] font-medium hover:underline"
        >
          list cleaning
        </Link>
        ) or sane daily volume (
        <Link
          href="/blog/how-many-emails-per-day-cold-outreach"
          className="text-[#0058be] font-medium hover:underline"
        >
          emails-per-day limits
        </Link>
        ).
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Tracking domains vs primary domain risk
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Never point a custom tracker at your corporate apex if that apex also
        serves investor mail, customer support, and payroll. Cold outbound should
        already use secondary sending domains; the tracker should live on the{" "}
        <em>same outbound root</em> (or a dedicated tracking root you are willing
        to replace), not on the brand domain you cannot burn.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Example pattern that stays sane as you scale:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] mb-6">
        <li>
          Corporate: <code className="text-xs bg-[#f1f5f9] px-1 rounded">acme.com</code>{" "}
          — people mail only, no cold sequences, no tracking CNAMEs.
        </li>
        <li>
          Outbound roots:{" "}
          <code className="text-xs bg-[#f1f5f9] px-1 rounded">tryacme.com</code>,{" "}
          <code className="text-xs bg-[#f1f5f9] px-1 rounded">getacme.com</code> — warmed
          mailboxes, SPF/DKIM/DMARC, optional{" "}
          <code className="text-xs bg-[#f1f5f9] px-1 rounded">track.tryacme.com</code>.
        </li>
        <li>
          Landing pages: a stable HTTPS site you own (product marketing or a
          lightweight demo page) — not a disposable shortener.
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-8">
        If an outbound root gets damaged, you can retire the root{" "}
        <em>and</em> its tracker together. Mixing cold tracking onto the primary
        brand domain couples link reputation to the one hostname you cannot
        rotate. That is the same logic as keeping cold sends off the CEO&apos;s
        mailbox — isolation is the feature.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        DNS examples and vendor-specific notes
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Vendors publish different targets. Instantly-style setups often ask for a
        host like <code className="text-xs bg-[#f1f5f9] px-1 rounded">inst</code>{" "}
        CNAME&apos;d to a tracking hostname they control; other tools use{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">track</code> or{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">click</code>. Always copy
        the value from your live settings panel — blog posts go stale, consoles
        do not.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        A minimal Cloudflare row looks like:
      </p>
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full text-sm text-left border border-[#e2e8f0] rounded-lg overflow-hidden">
          <thead className="bg-[#f8fafc] text-[#334155]">
            <tr>
              <th className="px-3 py-2 font-semibold">Type</th>
              <th className="px-3 py-2 font-semibold">Name</th>
              <th className="px-3 py-2 font-semibold">Target</th>
              <th className="px-3 py-2 font-semibold">Proxy</th>
            </tr>
          </thead>
          <tbody className="text-[#475569]">
            <tr className="border-t border-[#e2e8f0]">
              <td className="px-3 py-2">CNAME</td>
              <td className="px-3 py-2">
                <code className="text-xs bg-[#f1f5f9] px-1 rounded">track</code>
              </td>
              <td className="px-3 py-2">
                <em>vendor-tracking-host</em>
              </td>
              <td className="px-3 py-2">DNS only</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-[#475569] leading-relaxed mb-4">
        TTL can stay on automatic. Do not create a matching A record for the same
        name. If you previously used the subdomain for a landing page, delete or
        rename that record first — mixed record types are a classic reason
        verification loops forever.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        After SSL verifies, freeze the configuration. Rotating CTD mid-flight
        rewrites every tracked link shape and can strand analytics or break
        cached previews. Schedule CTD changes in the same maintenance window as
        domain swaps, not in the middle of a Monday blast.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Common mistakes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] mb-8">
        <li>Leaving Cloudflare proxy on and wondering why SSL never verifies.</li>
        <li>One CTD shared across every client domain.</li>
        <li>
          Enabling open + click tracking on every first touch &quot;for data,&quot;
          then optimizing subjects to inflated opens.
        </li>
        <li>
          Using public URL shorteners on top of tracking wraps (extra hop, worse
          reputation story).
        </li>
        <li>
          Changing CTD mid-campaign without re-testing links — broken CTAs look
          like spam to humans and bots.
        </li>
        <li>
          Expecting a CTD to fix a dirty list or missing{" "}
          <Link
            href="/blog/list-unsubscribe-one-click-cold-email-2026"
            className="text-[#0058be] font-medium hover:underline"
          >
            List-Unsubscribe
          </Link>{" "}
          headers.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What &quot;good enough&quot; looks like in week one
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        You do not need a perfect analytics warehouse to ship this. In the first
        week after enabling a custom tracking domain, success looks boring:
      </p>
      <ul className="list-disc pl-6 space-y-2 text-[#475569] mb-6">
        <li>Vendor UI shows CNAME + SSL verified for every active sending domain.</li>
        <li>Test messages show branded tracking hosts in the HTML source.</li>
        <li>Click-throughs land on the intended HTTPS page with no certificate warnings.</li>
        <li>
          Bounce and complaint rates stay in the same band as last week — a CTD
          should not move those numbers by itself.
        </li>
        <li>
          Your team stops quoting open rate in standups and starts quoting positive
          reply rate and meetings booked.
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-8">
        If clicks break while DNS &quot;looks fine,&quot; roll back to the previous
        known-good tracker setting, fix DNS, and only then resume volume. Broken
        CTAs create human spam complaints faster than a shared tracker ever will.
        Deliverability is a system: authentication, list hygiene, unsubscribe
        headers, complaint monitoring, and link hygiene all have to hold at once.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Where LeadSnipper fits
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        LeadSnipper is built for teams that want outbound on infrastructure they
        own. With BYO SES you keep the AWS account, domains, and suppression
        story — while the product handles sequences, warmup, and campaign ops.
        That same ownership mindset applies to links: prefer branded destinations
        and, when your stack wraps clicks, a CTD per sending domain instead of a
        shared default.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Soft recommendation: finish DNS auth, bounce/complaint plumbing, and
        tracking-domain decisions in the same setup window before you scale
        volume.{" "}
        <Link
          href="/pricing"
          className="text-[#0058be] font-medium hover:underline"
        >
          Pricing
        </Link>{" "}
        stays predictable because you pay SES near{" "}
        <Link
          href="/blog/amazon-ses-pricing-2026"
          className="text-[#0058be] font-medium hover:underline"
        >
          $0.10 per 1,000 emails
        </Link>{" "}
        plus the platform plan — not mystery shared-pool fees when someone
        else&apos;s tracking host gets noisy.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        If you are migrating from a shared-infrastructure sequencer, export
        suppressions, map each sending domain to a CTD, and re-verify links the
        same day DNS flips. Starting &quot;clean&quot; on SES with leftover shared
        trackers is how you keep one foot in the reputation commons you meant to
        leave.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Bottom line
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        A custom tracking domain will not save a bad list — but a shared tracker
        can quietly tax a good one. Point a dedicated CNAME per sending domain at
        your ESP&apos;s tracking host (DNS only on Cloudflare), verify SSL, test
        real clicks, and be skeptical of open rates after Apple MPP. On BYO SES,
        skip vanity pixels when you can, keep links on properties you own, and
        treat branded tracking as part of the same hygiene stack as Postmaster,
        SNDS, and configuration-set bounce handling.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        Ready to run cold sequences on SES you control?{" "}
        <Link
          href="/pricing"
          className="text-[#0058be] font-medium hover:underline"
        >
          Review LeadSnipper plans
        </Link>{" "}
        or{" "}
        <Link
          href="https://app.leadsnipper.com/signup?product=leadsnipper"
          className="text-[#0058be] font-semibold hover:underline"
        >
          start free
        </Link>{" "}
        and set the next domain up with authentication, bounce plumbing, and
        tracking choices that match how you actually measure success.
      </p>

      <BlogSoftCTA />
    </BlogLayout>
  );
}
