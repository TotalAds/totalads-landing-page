import Link from "next/link";
import React from "react";

import BlogLayout from "@/components/BlogLayout";
import BlogSoftCTA from "@/components/BlogSoftCTA";
import { getBlogPost } from "@/lib/blog";

const post = getBlogPost(
  "aws-ses-bounce-complaint-configuration-sets-cold-email-2026"
)!;

export default function AwsSesBounceComplaintConfigurationSetsColdEmail2026() {
  return (
    <BlogLayout post={post}>
      <p className="text-lg text-[#475569] leading-relaxed mb-8">
        Owning Amazon SES is only half the job. The other half is catching{" "}
        <strong>bounces</strong> and <strong>complaints</strong> before they
        quietly push your account into review — or pause sending entirely. Most
        teams that{" "}
        <Link
          href="/blog/how-to-set-up-aws-ses-for-cold-email-step-by-step"
          className="text-[#0058be] font-medium hover:underline"
        >
          set up SES for cold email
        </Link>{" "}
        stop at domain verification and SMTP credentials. Configuration sets,
        event destinations, and suppression options are what turn SES from a
        cheap pipe into infrastructure you can operate.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        This guide walks through bounce vs complaint signals, why they matter
        for cold outreach, how to create configuration sets with SNS /
        CloudWatch / Firehose destinations, how account-level and config-set
        suppression differ, and what to do when rates spike — including how this
        fits{" "}
        <Link
          href="/blog/byo-aws-ses-vs-shared-email-infrastructure-cold-outreach"
          className="text-[#0058be] font-medium hover:underline"
        >
          BYO AWS SES
        </Link>{" "}
        on LeadSnipper.
      </p>

      <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-xl p-5 mb-8">
        <h2 className="font-bold text-[#1e40af] text-sm mb-3 uppercase tracking-wide">
          Quick takeaways
        </h2>
        <ul className="space-y-2 text-sm text-[#374151]">
          <li>
            • SES can put your account under review around{" "}
            <strong>~5% bounce</strong> or <strong>~0.1% complaint</strong>, and
            may pause sending near{" "}
            <strong>~10% bounce</strong> / <strong>~0.5% complaint</strong> (
            <a
              href="https://docs.aws.amazon.com/ses/latest/dg/faqs-enforcement.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0058be] font-medium hover:underline"
            >
              SES sending review FAQs
            </a>
            ). Alarm earlier.
          </li>
          <li>
            • Use a dedicated{" "}
            <strong>configuration set</strong> for cold outbound so bounce /
            complaint events stay visible and separate from transactional mail (
            <a
              href="https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0058be] font-medium hover:underline"
            >
              configuration sets overview
            </a>
            ).
          </li>
          <li>
            • Publish <code className="text-xs bg-[#f1f5f9] px-1 rounded">BOUNCE</code>{" "}
            and{" "}
            <code className="text-xs bg-[#f1f5f9] px-1 rounded">COMPLAINT</code>{" "}
            events to SNS (alerts), CloudWatch (alarms), and optionally Firehose
            (history).
          </li>
          <li>
            • Keep account-level suppression on for bounce + complaint; override
            carefully with{" "}
            <code className="text-xs bg-[#f1f5f9] px-1 rounded">
              PutConfigurationSetSuppressionOptions
            </code>
            .
          </li>
          <li>
            • Every send must pass{" "}
            <code className="text-xs bg-[#f1f5f9] px-1 rounded">
              ConfigurationSetName
            </code>{" "}
            or the{" "}
            <code className="text-xs bg-[#f1f5f9] px-1 rounded">
              X-SES-CONFIGURATION-SET
            </code>{" "}
            header — otherwise your destinations never see the events.
          </li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Why bounces and complaints kill SES reputation
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        SES does not grade you on open rates. It grades you on whether recipients
        and mailbox providers reject or reject-as-spam what you send. High bounce
        volume usually means bad data, stale lists, or aggressive scraping.
        High complaint volume usually means relevance problems, weak opt-out
        paths, or volume that outran trust. Either signal can put the whole
        account under review — not just one campaign. That is the uncomfortable
        part of shared AWS accounts: one careless upload can freeze password
        resets and invoices alongside your outbound sequences.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        AWS publishes clear floors: aim for bounce under roughly{" "}
        <strong>2%</strong> and complaint under roughly{" "}
        <strong>0.1%</strong>. Review often starts near{" "}
        <strong>5% bounce</strong> / <strong>0.1% complaint</strong>; pause risk
        climbs near <strong>10% bounce</strong> / <strong>0.5% complaint</strong>.
        Those are account-level reputation metrics computed over a representative
        volume of mail, not a cute daily average you can ignore after one good
        week.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        Cold email teams feel this faster than newsletter senders because list
        quality varies and messages are unsolicited. That is why{" "}
        <Link
          href="/blog/email-list-cleaning-why-verification-prevents-bounce-disasters"
          className="text-[#0058be] font-medium hover:underline"
        >
          list verification
        </Link>{" "}
        and bounce/complaint plumbing belong in the same operating checklist as
        DNS and{" "}
        <Link
          href="/email-warmup"
          className="text-[#0058be] font-medium hover:underline"
        >
          email warmup
        </Link>
        .
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Hard bounce vs soft bounce vs complaint feedback
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        A <strong>hard bounce</strong> is a permanent rejection — address does
        not exist, domain invalid, mailbox deleted. Treat it as a terminal
        signal: suppress immediately and never retry. A <strong>soft bounce</strong>{" "}
        is temporary — mailbox full, greylisting, transient outage. SES may
        retry for a period; only after delivery ultimately fails does the event
        surface as a bounce worth suppressing. Do not invent your own retry
        loops on top of SES for addresses that already hard-bounced.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        A <strong>complaint</strong> means the message was accepted by the
        recipient&apos;s server, then marked as spam (via a feedback loop SES
        receives). Complaints are rarer than bounces and more expensive: they
        tell mailbox providers your mail is unwanted. Easy unsubscribe (including{" "}
        <Link
          href="/blog/list-unsubscribe-one-click-cold-email-2026"
          className="text-[#0058be] font-medium hover:underline"
        >
          List-Unsubscribe / one-click
        </Link>
        ) reduces complaint pressure; suppression after a complaint is
        non-negotiable.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        In SES event publishing, matching types include{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">BOUNCE</code> and{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">COMPLAINT</code>{" "}
        among others. Wire both. Delivery and reject events are useful extras;
        opens/clicks are optional and often noisy for cold outbound.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        Note the nuance in SES docs: bounce events cover hard bounces, and soft
        bounces appear when SES eventually gives up after retries. Complaint
        events only arrive for providers that share feedback with SES. That is
        why a &quot;low complaint rate&quot; in SES is not proof Gmail loves you —
        you still need Postmaster spam rate and honest reply quality as parallel
        checks.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What configuration sets are for
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        A{" "}
        <a
          href="https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          configuration set
        </a>{" "}
        is a named bundle of rules you attach to sends: event destinations, IP
        pool selection (if you use dedicated IPs), and suppression preferences.
        Without one, you are flying on identity-level defaults and hope. With
        one, every cold campaign can publish the same bounce/complaint stream to
        the same SNS topic and CloudWatch alarms.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        For agencies and multi-product companies, configuration sets are also
        the clean way to <strong>isolate cold vs transactional</strong> traffic.
        Password resets should not share the same reputation story as a 3-step
        outbound sequence — and when something spikes, you want to know which
        stream caused it.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Create a configuration set (console or CLI shape)
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        In the SES console (same region as your verified identities):{" "}
        <strong>Configuration → Configuration sets → Create</strong>. Name it
        something obvious, e.g.{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">
          cold-outbound-2026
        </code>
        . Leave IP pool blank unless you already lease dedicated IPs and want
        outbound on a separate pool from receipts or product mail.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Then add at least one event destination. AWS documents the SNS path
        clearly in{" "}
        <a
          href="https://docs.aws.amazon.com/ses/latest/dg/event-publishing-add-event-destination-sns.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          Set up an Amazon SNS event destination
        </a>{" "}
        and in the Messaging Blog walkthrough{" "}
        <a
          href="https://aws.amazon.com/blogs/messaging-and-targeting/amazon-ses-set-up-notifications-for-bounces-and-complaints/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          Set up notifications for bounces and complaints
        </a>
        . Practical pattern for cold email:
      </p>
      <ul className="list-disc pl-6 text-[#475569] space-y-2 mb-4">
        <li>
          <strong>SNS</strong> — near-real-time bounce/complaint payloads to
          email, Slack via Lambda, or your suppression worker.
        </li>
        <li>
          <strong>CloudWatch</strong> — dimensions for campaign or domain so you
          can alarm on rate, not just raw counts.
        </li>
        <li>
          <strong>Kinesis Data Firehose</strong> — archive events to S3 for
          weekly hygiene audits and client reporting.
        </li>
      </ul>
      <p className="text-[#475569] leading-relaxed mb-4">
        Enable the destination, select at minimum{" "}
        <strong>hard bounces</strong> and <strong>complaints</strong>, grant SES
        permission to publish to the SNS topic, and subscribe an endpoint you
        actually watch. A topic nobody reads is decoration.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        For SNS access policies, follow the console validation step carefully —
        SES must be allowed to{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">sns:Publish</code>{" "}
        to that topic from your configuration set. If validation fails, events
        will not flow even though the destination looks &quot;enabled.&quot; For
        CloudWatch destinations, pick dimensions you can filter later (for
        example message tags for campaign_id or client_id) so one noisy client
        does not hide inside a single account-wide graph.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Account-level vs configuration-set suppression
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        SES maintains an{" "}
        <a
          href="https://docs.aws.amazon.com/ses/latest/dg/sending-email-suppression-list.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          account-level suppression list
        </a>
        . When enabled for bounce and/or complaint reasons, SES automatically
        adds addresses and refuses future sends to them — protecting you from
        yourself. For cold email, turning this off is almost never wise.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Configuration sets can override those preferences. The API operation is{" "}
        <a
          href="https://docs.aws.amazon.com/cli/latest/reference/sesv2/put-configuration-set-suppression-options.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          PutConfigurationSetSuppressionOptions
        </a>
        . You can keep account defaults, override with config-set-level reasons
        (<code className="text-xs bg-[#f1f5f9] px-1 rounded">BOUNCE</code>,{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">COMPLAINT</code>),
        or — dangerously — override in a way that disables suppression for that
        stream. AWS documents the override combinations in{" "}
        <a
          href="https://docs.aws.amazon.com/ses/latest/dg/sending-email-suppression-list-config-level.html"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0058be] font-medium hover:underline"
        >
          configuration set-level suppression
        </a>
        .
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        Recommended default for outbound: account-level{" "}
        <strong>BOUNCE + COMPLAINT</strong> on, and either no override on the
        cold config set, or an explicit override that still enables both reasons.
        Use overrides to tighten a risky client stream — not to &quot;keep
        retrying&quot; dead addresses.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        You must pass the configuration set on every send
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Creating the set does nothing by itself. API / SDK sends need{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">
          ConfigurationSetName
        </code>
        . Raw SMTP / header-based paths need{" "}
        <code className="text-xs bg-[#f1f5f9] px-1 rounded">
          X-SES-CONFIGURATION-SET: cold-outbound-2026
        </code>
        . You can also attach a default configuration set to a verified identity
        in the console so forgotten headers still inherit the right rules —
        useful when multiple tools send through the same domain.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        After wiring, send a deliberate hard-bounce test to a known-invalid
        address on a throwaway subdomain (never on your primary brand domain
        at volume) and confirm the SNS notification arrives. If it does not,
        fix destination IAM / topic policy before you scale.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Isolate cold vs transactional; pause and reputation alarms
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Run product and receipt mail on a separate configuration set (and ideally
        separate subdomain). When outbound bounce rate climbs, you can pause cold
        sequences without guessing whether password resets caused the spike.
        Dedicated IP pools amplify this isolation if your volume justifies the{" "}
        <Link
          href="/blog/amazon-ses-pricing-2026"
          className="text-[#0058be] font-medium hover:underline"
        >
          SES pricing
        </Link>{" "}
        for leased IPs.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        Mirror AWS reputation metrics into CloudWatch alarms with headroom —
        for example notify well below the review floors so a human can halt
        campaigns the same day. Pair SES metrics with{" "}
        <Link
          href="/blog/google-postmaster-tools-cold-email-setup-guide"
          className="text-[#0058be] font-medium hover:underline"
        >
          Google Postmaster Tools
        </Link>{" "}
        spam rate; SES pause risk and Gmail spam rate are related but not the
        same dashboard.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        What to do when bounce or complaint rates spike
      </h2>
      <ol className="list-decimal pl-6 text-[#475569] space-y-3 mb-4">
        <li>
          <strong>Pause outbound immediately</strong> on the affected domains /
          sequences. Continuing to &quot;push through&quot; is how reviews become
          pauses.
        </li>
        <li>
          <strong>Read the events</strong> — hard bounce clusters by domain or
          list source usually mean a bad import; complaint clusters by template
          or offer usually mean messaging or targeting failure.
        </li>
        <li>
          <strong>Suppress globally</strong> in your CRM / sequencer, not only
          in SES. SES account suppression stops retries through SES; your tool
          must stop scheduling follow-ups too.
        </li>
        <li>
          <strong>Re-verify the list</strong> before restarting. See the{" "}
          <Link
            href="/blog/email-list-cleaning-why-verification-prevents-bounce-disasters"
            className="text-[#0058be] font-medium hover:underline"
          >
            list cleaning guide
          </Link>{" "}
          — unverified uploads are the classic bounce disaster.
        </li>
        <li>
          <strong>Restart slowly</strong> on warmed domains with tighter daily
          caps. Check your{" "}
          <Link
            href="/email-deliverability"
            className="text-[#0058be] font-medium hover:underline"
          >
            deliverability
          </Link>{" "}
          checklist and the broader{" "}
          <Link
            href="/blog/cold-email-deliverability-checklist"
            className="text-[#0058be] font-medium hover:underline"
          >
            pre-send deliverability checklist
          </Link>{" "}
          before volume returns.
        </li>
      </ol>
      <p className="text-[#475569] leading-relaxed mb-4">
        If SES already paused the account, follow AWS&apos;s review process
        honestly: root cause, remediation, and evidence you will not repeat the
        pattern. Vague &quot;we fixed lists&quot; replies waste weeks.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        While paused, use the downtime to confirm SPF / DKIM / DMARC still align,
        that List-Unsubscribe works, and that your sequencer cannot re-import
        suppressed addresses from a CSV. Configuration sets and SNS give you
        detection; list hygiene and send discipline are still what lower the
        underlying rates. Treat a spike as an operations incident with an owner,
        a timeline, and a written restart plan — not as a quiet dashboard
        annoyance.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        How this fits LeadSnipper BYO SES
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        LeadSnipper is built for teams that want{" "}
        <Link
          href="/cold-email-software"
          className="text-[#0058be] font-medium hover:underline"
        >
          cold email software
        </Link>{" "}
        on infrastructure they own. With BYO SES you keep the AWS account,
        reputation, and configuration sets — while LeadSnipper handles sequences,
        warmup, and campaign ops. That split matters: shared-pool tools can hide
        bounce plumbing; on SES you either wire it or inherit the risk.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Compared with tools that rent shared sending (see{" "}
        <Link
          href="/vs/instantly"
          className="text-[#0058be] font-medium hover:underline"
        >
          LeadSnipper vs Instantly
        </Link>
        ), BYO SES plus configuration sets gives you explicit bounce/complaint
        destinations and account-level suppression you can audit.{" "}
        <Link
          href="/pricing"
          className="text-[#0058be] font-medium hover:underline"
        >
          Pricing
        </Link>{" "}
        stays predictable because you pay SES at{" "}
        <Link
          href="/blog/amazon-ses-pricing-2026"
          className="text-[#0058be] font-medium hover:underline"
        >
          ~$0.10 per 1,000 emails
        </Link>{" "}
        plus the platform plan — not mystery shared-IP fees when someone else
        burns reputation.
      </p>
      <p className="text-[#475569] leading-relaxed mb-4">
        Soft recommendation: finish SES identity + config-set + SNS alarms first,
        then connect the account to LeadSnipper and keep outbound on the cold
        configuration set. Warmup and verified lists still matter more than any
        dashboard widget.
      </p>
      <p className="text-[#475569] leading-relaxed mb-8">
        If you are migrating from a shared-infrastructure tool, export
        suppressions and bounce history before you flip DNS. Starting &quot;clean&quot;
        on SES with a polluted CRM is how bounce rates spike in week one. Bring
        your suppression list, your config set name, and your CloudWatch alarms
        into the new stack the same day the first campaign goes live.
      </p>

      <h2 className="text-2xl font-bold text-[#1e293b] mt-10 mb-4">
        Bottom line
      </h2>
      <p className="text-[#475569] leading-relaxed mb-4">
        Bounce and complaint handling is not optional polish on Amazon SES — it
        is how you keep the right to send. Create a cold-outbound configuration
        set, publish BOUNCE and COMPLAINT to SNS and CloudWatch, keep
        suppression on for both reasons, pass ConfigurationSetName or
        X-SES-CONFIGURATION-SET on every message, isolate transactional mail, and
        pause yourself before AWS pauses you.
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
        and wire the next domain with bounce plumbing you can actually see.
      </p>

      <BlogSoftCTA />
    </BlogLayout>
  );
}
