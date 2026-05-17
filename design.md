# LeadSnipper — Website Master Design & Copy Document
> Version 1.0 | Brand Color #3B82F6 | Design Inspiration: Gojiberry.ai (dark AI SaaS) + Beeze.ai (footer)

---

## TABLE OF CONTENTS

1. [Brand Positioning](#1-brand-positioning)
2. [Design System](#2-design-system)
3. [Component Library](#3-component-library)
4. [Homepage](#4-homepage)
5. [Products Landing Page](#5-products-landing-page)
6. [LeadSnipper Product Page](#6-leadsnipper-email-deliverability-platform)
7. [SocialSnipper Product Page](#7-socialsnipper-linkedin-scheduler--content-researcher)
8. [Services Page](#8-services-page)
9. [Blog Page](#9-blog-page)
10. [Pricing Page](#10-pricing-page)
11. [Navigation & Footer](#11-navigation--footer)
12. [Legal Pages](#12-legal-pages)
13. [SEO Strategy](#13-seo-strategy)
14. [Copy Guidelines](#14-copy-guidelines)

---

## 1. BRAND POSITIONING

### The Shift: What We Are Now

> **"We build and operate AI-powered outbound systems."**

LeadSnipper is not positioned as "another cold email tool." It is positioned as a **B2B Growth Infrastructure Company** — the operational backbone of an entire go-to-market motion.

---

### The Three-Layer Business Model

```
LAYER 1 — SaaS Products (self-serve, recurring)
  → LeadSnipper: Email deliverability platform
  → SocialSnipper: LinkedIn scheduler + content researcher

LAYER 2 — Done-for-You Services (high-margin, relationship-based)
  → We build and operate outbound systems for B2B companies
  → AI automation, CRM, lead gen, analytics, web apps, consulting

LAYER 3 — Content & SEO (trust moat, compounding asset)
  → Blog: deliverability guides, outbound playbooks, AI automation
  → This feeds both product signups AND service inquiries
```

---

### Master Tagline

```
We build and operate AI-powered outbound systems.
```

### Hero Sub-headline Options (A/B test these)

```
A: "Email infrastructure you own. Pipeline results we deliver."
B: "From cold email to full-stack GTM — own your outbound or let us run it."
C: "Most tools rent you infrastructure. We build systems that compound."
```

### One-Sentence Brand Differentiator

```
Other tools give you software. We give you a running outbound machine.
```

### Long-Term Vision Statement (for About page / investor deck)

```
LeadSnipper is evolving into India's leading B2B Growth Infrastructure company —
where SaaS products support services, services feed product adoption, consulting
builds trust, content drives SEO, and AI becomes compounding leverage for every
B2B team we touch.
```

---

### ICP (Ideal Customer Profiles) — Priority Order

| # | Who | Company Size | Pain | Wins On |
|---|-----|-------------|------|---------|
| 1 | Agency founder | 1–5 people, 3–10 clients | Client domain health, multi-account chaos | Multi-domain, PDF reports, BYO SES |
| 2 | Solo B2B founder | 1–10 people | Can't afford to burn domain, 4-tool stack | Price ₹499, all-in-one, simplicity |
| 3 | SDR/BDR team lead | 20–200 people | No visibility into domain health | Analytics, domain dashboard, managed SES |
| 4 | SaaS growth operator | 10–50 people | Fragmented stack, poor list hygiene | Unified platform, Reoon built-in |
| 5 | Service retainer client | Any | "Build us the outbound machine" | Full done-for-you engagement |

---

### Positioning Against Competitors

| vs Instantly | vs Smartlead | vs Mailchimp |
|-------------|-------------|-------------|
| They own your infrastructure | Complex UI, steep curve | Built for newsletters, not cold |
| Shared IPs = shared risk | No native verification | Gets nervous at cold email |
| No built-in verification | Limited analytics | No warmup or domain health |
| **We:** BYO SES, your reputation | **We:** Simpler, built-in Reoon, PDF reports | **We:** Cold email is the product |

---

## 2. DESIGN SYSTEM

### Philosophy

Inspired by Gojiberry.ai's dark, high-contrast AI SaaS aesthetic:
- **Dark first** — near-black base with luminous accents
- **Premium and technical** — communicates infrastructure-grade trust
- **Motion-forward** — subtle glows, gradient shifts, hover states that feel alive
- **Density balanced** — information-rich without feeling cluttered

---

### Color Palette

```css
/* BRAND */
--blue-500: #3B82F6;        /* Primary brand — CTA buttons, links, accents */
--blue-600: #2563EB;        /* Button hover states */
--blue-400: #60A5FA;        /* Lighter accent, inline highlights */
--blue-glow: rgba(59, 130, 246, 0.15);  /* Glow behind hero, card borders */

/* BACKGROUNDS — Dark Mode (primary) */
--bg-base: #060810;         /* Page background — deepest black-blue */
--bg-card: #0C1018;         /* Card background */
--bg-surface: #111827;      /* Elevated surfaces, input fields */
--bg-muted: #1A2236;        /* Subtle sections, table rows */
--bg-overlay: rgba(11, 16, 27, 0.9); /* Modals, nav blur */

/* TEXT */
--text-primary: #F8FAFC;    /* Headlines */
--text-secondary: #CBD5E1;  /* Body copy */
--text-muted: #64748B;      /* Labels, metadata, placeholders */
--text-dim: #94A3B8;        /* Supporting info */

/* BORDERS */
--border-subtle: rgba(255, 255, 255, 0.06);
--border-default: rgba(255, 255, 255, 0.10);
--border-strong: rgba(255, 255, 255, 0.18);
--border-blue: rgba(59, 130, 246, 0.30);

/* SEMANTIC */
--green: #10B981;
--green-glow: rgba(16, 185, 129, 0.12);
--amber: #F59E0B;
--amber-glow: rgba(245, 158, 11, 0.12);
--red: #EF4444;
--purple: #8B5CF6;
--purple-glow: rgba(139, 92, 246, 0.12);
```

---

### Typography

```
DISPLAY FONT: "Instrument Serif" or "Playfair Display"
  — Use for: Hero headlines ONLY (the big punchy statement)
  — Weight: 400 italic or 700
  — Letter spacing: -0.02em

HEADING FONT: "Geist" (by Vercel) or "Inter"
  — Use for: Section titles, card headers, navigation
  — Weights: 500, 600, 700, 800
  — Letter spacing: -0.025em for large, -0.01em for small

BODY FONT: "Inter" or "DM Sans"
  — Use for: All body copy, descriptions, UI text
  — Weights: 400 regular, 500 medium
  — Line height: 1.65 for body, 1.4 for headings

MONO FONT: "Geist Mono" or "JetBrains Mono"
  — Use for: Code snippets, technical labels, status badges, metric values
  — Weight: 400, 500

NOTE: Load fonts from Google Fonts or Fontsource (self-hosted preferred for performance)
```

**Type Scale:**

```
Hero H1:     clamp(52px, 7vw, 88px)  — Weight 700-800, letter-spacing -0.03em
Section H2:  clamp(36px, 5vw, 56px)  — Weight 700, letter-spacing -0.025em
Card H3:     24px–32px               — Weight 600-700
Subhead H4:  18px–22px               — Weight 600
Body Large:  18px                    — Weight 400, line-height 1.7
Body:        16px                    — Weight 400, line-height 1.65
Small:       14px                    — Weight 400
Caption:     12px                    — Weight 500 (mono for technical)
```

---

### Spacing System

```
Base unit: 4px

xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   40px
2xl:  64px
3xl:  96px
4xl:  128px
5xl:  160px

Section padding: 96px–128px top/bottom
Container max-width: 1200px
Content max-width (text blocks): 640px
Card padding: 32px (desktop), 24px (mobile)
```

---

### Background Textures & Effects

**1. Hero Radial Glow (Gojiberry-style)**
```css
/* Behind the hero headline — creates depth */
background: 
  radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.18) 0%, transparent 70%),
  radial-gradient(ellipse 50% 40% at 80% 60%, rgba(139,92,246,0.08) 0%, transparent 60%),
  #060810;
```

**2. Grid Pattern Overlay**
```css
/* Subtle dot grid on hero background */
background-image: radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px);
background-size: 32px 32px;
```

**3. Noise Texture**
```css
/* Applied as ::before on hero — adds grain depth */
background-image: url('data:image/svg+xml,...'); /* SVG fractalNoise */
opacity: 0.03;
```

**4. Card Glassmorphism (Gojiberry-style)**
```css
background: rgba(12, 16, 24, 0.7);
border: 1px solid rgba(255, 255, 255, 0.08);
backdrop-filter: blur(12px);
box-shadow: 0 0 0 1px rgba(59,130,246,0.08), 0 24px 64px rgba(0,0,0,0.4);
border-radius: 20px;
```

**5. Gradient Border Cards (premium feel)**
```css
/* Feature cards with glowing border on hover */
border: 1px solid transparent;
background: linear-gradient(#0C1018, #0C1018) padding-box,
            linear-gradient(135deg, rgba(59,130,246,0.5), rgba(139,92,246,0.2), transparent) border-box;
```

---

### Animation Principles

```
Enter animations: fade-up with 0.4s ease-out (staggered 80ms per element)
Hover transitions: 0.2s ease for color, 0.3s for transform
Button hover: translateY(-2px) + box-shadow grow
Card hover: translateY(-4px) + border-color shift to --border-blue
Glow pulses: 3s ease-in-out infinite on hero elements
No jarring animations — everything feels like it breathes
```

---

## 3. COMPONENT LIBRARY

### Buttons

```
PRIMARY BUTTON
  Background: #3B82F6
  Hover: #2563EB + translateY(-2px) + box-shadow: 0 8px 24px rgba(59,130,246,0.35)
  Text: White, 15px, weight 500
  Padding: 12px 24px
  Border-radius: 10px
  Icon: optional arrow → on the right

SECONDARY BUTTON (Ghost)
  Background: transparent
  Border: 1px solid rgba(255,255,255,0.15)
  Hover: background rgba(255,255,255,0.05), border rgba(255,255,255,0.25)
  Text: --text-secondary
  Same sizing as primary

AMBER/ACCENT BUTTON (for service CTAs)
  Background: #F59E0B
  Text: #000000
  Hover: #D97706

HERO BUTTON (large)
  Padding: 14px 32px
  Font-size: 16px
  Border-radius: 12px
```

### Badges / Pills

```
LIVE STATUS
  Background: rgba(16,185,129,0.1)
  Border: 1px solid rgba(16,185,129,0.2)
  Text: #10B981
  Font: 11px mono, uppercase, letter-spacing 0.8px
  Prefix: ● (animated pulse)

COMING SOON
  Background: rgba(245,158,11,0.1)
  Border: 1px solid rgba(245,158,11,0.2)
  Text: #F59E0B

CATEGORY TAG (section tags above headlines)
  No background
  Text: #3B82F6, 12px, weight 500, uppercase, letter-spacing 1px
  Before element: 24px line in blue

FEATURE PILLS
  Background: rgba(255,255,255,0.04)
  Border: 1px solid rgba(255,255,255,0.08)
  Text: --text-muted, 12px mono
  Border-radius: 6px
  Padding: 4px 10px
```

### Cards

```
STANDARD CARD
  Background: #0C1018
  Border: 1px solid rgba(255,255,255,0.08)
  Border-radius: 20px
  Padding: 32px
  Hover: border shifts to rgba(59,130,246,0.25), translateY(-4px)

FEATURE BENTO CARD
  Same as standard but layout is flexible (bento grid)
  Can be 1×1, 2×1, or 1×2 in grid
  Some cards have visual mockups/illustrations filling bottom half

METRIC CARD
  Compact: 16px padding
  Shows: label (12px mono muted) + number (32px display weight 700) + delta (12px)

TESTIMONIAL CARD
  Quote mark in blue
  Body: 16px, --text-secondary
  Attribution: Avatar (initials circle) + Name + Role
```

### Section Headers

```
PATTERN FOR EVERY SECTION:
  1. Category tag (blue, all-caps, 12px mono)
  2. Main headline (H2, large, tight letter-spacing)
  3. Description (max 2 sentences, 17-18px, --text-dim)
  4. Optional: CTA below description

TAG FORMAT:
  <span style="color: #3B82F6; font: 12px mono; letter-spacing: 1px; text-transform: uppercase">
    ── SECTION NAME
  </span>
```

---

## 4. HOMEPAGE

**URL:** `leadsnipper.com`
**Meta Title:** `LeadSnipper — We Build & Operate AI-Powered Outbound Systems`
**Meta Description:** `Email deliverability platform + done-for-you outbound services. Own your sending infrastructure on AWS SES or let our team run the entire GTM engine for you.`

---

### SECTION 1: NAVIGATION

```
LEFT:   LeadSnipper [logo] — wordmark, brand blue accent on "Snipper"

CENTER: Products  |  Services  |  Blog  |  Pricing
        (Products and Services are dropdown triggers)

RIGHT:  [Log in]  [Start free →]  ← primary CTA button in blue

STYLE:
  - Sticky, height 64px
  - Background: rgba(6,8,16,0.8) + backdrop-filter blur(20px)
  - Border-bottom: 1px solid rgba(255,255,255,0.06)
  - Nav links: 14px, --text-dim, hover → --text-primary
```

**Products Dropdown:**
```
┌─────────────────────────────────────────────────────┐
│  PRODUCTS                                           │
│  ─────────────────────────────────────────────────  │
│  📧 LeadSnipper          💼 SocialSnipper           │
│  Email Deliverability    LinkedIn Scheduler +        │
│  Platform                Content Researcher          │
│  [LIVE]                  [COMING SOON]              │
└─────────────────────────────────────────────────────┘
```

**Services Dropdown:**
```
┌────────────────────────────────────────────────────────────────┐
│  DONE-FOR-YOU SERVICES                                         │
│  ────────────────────────────────────────────────────────────  │
│  🤖 AI Automation         📊 AI Dashboards & Analytics        │
│  🔍 AI Search (AI SEO)    🎯 Lead Gen & Sales Automation      │
│  ⚙️ Custom Software Dev   🧠 Startup Tech Consulting          │
│  🔗 AI + CRM Automation   💻 Conversion Web Apps              │
│  🚀 SaaS & MVP Dev                                            │
│                            [Book free audit →]                 │
└────────────────────────────────────────────────────────────────┘
```

---

### SECTION 2: HERO

**Layout:** Centered, full-width, min-height 100vh

**Background:**
```
- Deep radial glow in blue behind headline
- Subtle dot-grid pattern at 3% opacity
- Optional: slow-moving gradient orbs (CSS animation, 8s ease-in-out infinite alternate)
```

**Above headline tag:**
```
● AI-POWERED OUTBOUND INFRASTRUCTURE
```
(pill badge, blue border, animated dot pulse)

**Headline (H1):**
```
We build and operate
AI-powered outbound systems.
```
(Second line in italic Instrument Serif for contrast — mix weights)

**Sub-headline:**
```
Email infrastructure you own. LinkedIn presence that compounds.
Services that run your entire pipeline. One partner for B2B growth.
```

**CTA Row:**
```
[Start free — ₹0]    [Book a free audit →]
                       ↑ ghost button
```

**Trust Row (below CTAs):**
```
✓ No card required  ·  ✓ Setup in 15 minutes  ·  ✓ AWS SES infrastructure  ·  ✓ Cancel anytime
(12px, --text-muted, centered)
```

**Social Proof Bar (below trust row):**
```
[Avatar] [Avatar] [Avatar] [Avatar] [Avatar]
"Trusted by 200+ B2B teams across India"
(overlapping avatars + count label)
```

---

### SECTION 3: THE PROBLEM (Pain Agitation)

**Layout:** 2-column grid — left: copy, right: 4 pain cards

**Section Tag:** `── THE REALITY`

**Headline:**
```
Your morning shouldn't start
with three tabs and a prayer.
```

**Left copy (body):**
```
Most B2B teams wake up and check MXToolbox, Google Postmaster, 
and their email tool — three separate tabs — just to answer 
one question: "Is our domain okay today?"

Then there's the list they forgot to verify. The warmup tool 
that doesn't talk to the sender. The client whose campaign 
bounced 400 domains overnight.

We built LeadSnipper because this is exactly what happens 
when you don't own your infrastructure.
```

**Right: 4 Pain Cards (2×2 grid)**
```
┌──────────────────────┐  ┌──────────────────────┐
│ 🔴                   │  │ 🔴                   │
│ "I keep getting      │  │ "I don't own my      │
│ blacklisted and I    │  │ sending reputation   │
│ don't know why."     │  │ — the platform does."│
└──────────────────────┘  └──────────────────────┘
┌──────────────────────┐  ┌──────────────────────┐
│ 🔴                   │  │ 🔴                   │
│ "I uploaded 10k      │  │ "I need warmup,      │
│ leads and half       │  │ verification, and    │
│ bounced. Domain's    │  │ sending in one place │
│ toast."              │  │ — not 4 tools."      │
└──────────────────────┘  └──────────────────────┘
```
(Cards in dark red-tinted border, quote font italic)

---

### SECTION 4: TWO WAYS TO WORK WITH US

**Layout:** 2-column split — left: Product path, right: Service path

**Section Tag:** `── HOW WE WORK`

**Headline:**
```
Own the tools.
Or own the results.
```

**Left Card — Product Path:**
```
TOP LABEL: → USE THE PRODUCT
Blue left border accent

TITLE: "You run the platform."

BODY:
LeadSnipper puts your outbound on infrastructure you own —
AWS SES, verified domains, warmup, analytics. 
One dashboard. Full control.

INCLUDES:
→ Email outreach on your own AWS SES
→ Domain health & warmup dashboard  
→ Reoon email verification built-in
→ LinkedIn scheduling via SocialSnipper
→ PDF campaign reports for clients
→ AI-assisted email writing

PRICING:
From ₹499/month
[Start free →]
```

**Right Card — Service Path:**
```
TOP LABEL: → WE DO IT FOR YOU
Amber left border accent

TITLE: "We run the pipeline."

BODY:
Give us your ICP, your offer, and your calendar.
We build the outbound system, run it, and hand
you qualified meetings. You close deals.

INCLUDES:
→ Full outbound system setup & operation
→ AI automation & CRM integration
→ LinkedIn + email combined sequences
→ Lead generation & meeting booking
→ Weekly pipeline reports
→ Strategy reviews and optimisation

PRICING:
From ₹30,000/month
[Book free audit →]
```

---

### SECTION 5: PRODUCTS SHOWCASE

**Layout:** Stacked, full-width product feature blocks (alternating left/right — Gojiberry style)

**Section Tag:** `── PRODUCTS`

**Headline:**
```
Two tools. One outbound stack.
```

---

**Product Block 1 — LeadSnipper**

```
LEFT: Copy                           RIGHT: Dashboard Mockup/Screenshot
                                            (dark UI card with metrics)

BADGE: [● LIVE]
LABEL: Email Deliverability Platform
TITLE: Cold email built on
       infrastructure you own.

BODY:
Most cold email platforms run you on shared 
infrastructure. When their pool gets flagged, 
your domain pays the price — overnight.

LeadSnipper runs on your AWS SES. Your domain. 
Your reputation. Your control.

FEATURE LIST (checkmarks):
✓ Bring your own AWS SES or use Managed mode
✓ Domain health dashboard — SPF, DKIM, DMARC in one view
✓ Warmup with daily pacing — tied to your actual domain
✓ Reoon verification built into the upload flow
✓ AI email writer for campaign drafts
✓ PDF analytics reports (agency-ready)
✓ Multi-domain management for agency teams

CTA: [Explore LeadSnipper →]
```

---

**Product Block 2 — SocialSnipper**

```
LEFT: Dashboard Mockup              RIGHT: Copy

BADGE: [COMING SOON]
LABEL: LinkedIn Scheduler + Content Researcher  
TITLE: Stay visible on LinkedIn
       without the daily grind.

BODY:
Most founders disappear from LinkedIn between 
campaigns. SocialSnipper keeps you posting 
consistently — scheduled content that builds 
authority while your emails are landing.

IMPORTANT NOTE FOR DEVELOPERS:
SocialSnipper uses the LinkedIn Marketing API.
The product requires LinkedIn API verification.
Application to LinkedIn's partner program must 
be submitted before launch. Features are 
scoped to comply with LinkedIn's official 
API terms — no scraping, no automation 
of connection requests or messages.

FEATURE LIST (checkmarks):
✓ Content calendar with scheduling queue
✓ AI-assisted post writing & repurposing
✓ Content performance analytics
✓ Research mode: trending topics in your niche
✓ Best-time posting recommendations
✓ Multi-account support (agency teams)

CTA: [Join the waitlist →]
```

---

### SECTION 6: SERVICES OVERVIEW (Bento Grid)

**Layout:** Bento grid — 3×3 with varied card sizes

**Section Tag:** `── DONE-FOR-YOU SERVICES`

**Headline:**
```
Nine systems.
One outcome: pipeline.
```

**Sub:**
```
Don't want to run the tools yourself? We build and operate 
your entire outbound growth stack — from infrastructure to 
qualified meetings in your calendar.
```

**Bento Cards (9 services):**

```
CARD 01 — LARGE (spans 2 cols)
🤖 AI Automation Systems
Custom AI agents that handle operations, lead qualification,
and repetitive workflows 24/7.
Result badge: [↓ 15–20 hrs saved/week]

CARD 02
🔍 AI Search Optimisation
Get found on ChatGPT, Perplexity, and Google AI Overviews.
Result: [↑ 300% AI search visibility]

CARD 03
⚙️ Custom Business Software
Internal tools that replace your 10+ disconnected SaaS tabs.
Result: [↑ 80% team productivity]

CARD 04 — LARGE (spans 2 rows)
🎯 Lead Generation & Sales Automation
Full outbound pipeline management — prospecting, personalised
email + LinkedIn sequences, reply handling, meeting booking.
Result: [↑ 20–40 meetings/month]

CARD 05
🔗 AI + CRM Automation
Lead scoring, follow-ups, pipeline syncing on autopilot.
Result: [↑ 2.5x lead-to-meeting rate]

CARD 06
🚀 SaaS & MVP Development
Validate your idea in 6–8 weeks with a production-ready MVP.
Result: [↓ 60% time to market]

CARD 07
💻 Conversion Web Applications
Revenue-engineered web experiences, not just aesthetic ones.
Result: [↑ 40–70% conversion rate]

CARD 08
📊 AI Dashboards & Analytics
Real-time intelligence — unified metrics with predictive alerts.
Result: [↓ Reporting from hrs → zero]

CARD 09
🧠 Startup Tech Consulting
Fractional CTO perspective. Stack, hiring, architecture decisions.
Result: [↓ $50K+ tech debt prevented]
```

**CTA Row below bento:**
```
[See all services →]    [Book free audit →]
```

---

### SECTION 7: EMAIL DELIVERABILITY DEEP-DIVE

**Layout:** Left copy, right animated deliverability stack diagram

**Section Tag:** `── EMAIL DELIVERABILITY`

**Headline:**
```
Deliverability isn't a feature.
It's the architecture.
```

**Left copy:**
```
Every layer of LeadSnipper exists to keep your emails out of spam.
Not bolted on as an afterthought — designed in from the start.

Your AWS SES. Your domain IPs. Your reputation — isolated from
every other sender on the platform.
```

**Right: Deliverability Stack Visual**
```
Layered card stack (bottom → top = most important):

Layer 1: [●] Your AWS SES — Infrastructure owned by you
Layer 2: [●] DNS + DKIM + SPF — Domain health dashboard
Layer 3: [●] Reoon Verification — Built into upload flow  
Layer 4: [●] Warmup with Pacing — Daily send limits, real history
Layer 5: [●] Bounce + Complaint Suppression — Hard bounces auto-suppressed
Layer 6: [●] Domain Health Score — One number, one screen, before you send

Each layer has a colored dot and status "Active" badge
Hover on each layer reveals tooltip explanation
```

**Below visual — stats row:**
```
[94%]           [0.8%]          [47%]           [Domain Health]
Inbox rate      Bounce rate     Avg open rate   Dashboard
industry avg    industry avg    (our users)     Know before send
```

---

### SECTION 8: SOCIAL PROOF / TESTIMONIALS

**Layout:** 3-column testimonial cards + 1 large featured testimonial

**Section Tag:** `── WHAT TEAMS SAY`

**Headline:**
```
Real teams. Real numbers.
```

**Featured Testimonial (large card, blue border):**
```
"LeadSnipper is the only tool I've found where I could actually 
bring my own AWS SES and keep my client domains completely isolated. 
One client's list can't burn another's reputation. That's the 
feature every agency actually needs."

— Agency Founder, managing 6 client accounts
```

**3 Metric Cards:**
```
[28 meetings]          [4.2× ROI]           [0.8% bounce]
Generated in           From service          Maintained across
first month            retainer client       all campaigns
```

---

### SECTION 9: WHY BUILD WITH US (The Long-Term Vision)

**Layout:** Dark card with gradient border, centered

**Section Tag:** `── THE BIGGER PICTURE`

**Headline:**
```
We're not building another cold email tool.
```

**Body:**
```
LeadSnipper is evolving into a B2B Growth Infrastructure company.

Here's what that means for you:

→ SaaS products that you can run yourself — owned infrastructure, proper pricing
→ Services that run your pipeline when you want to hand it off
→ AI systems that make outbound compounding, not manual
→ Content and playbooks that make you better at GTM regardless of what you use
→ A partner that grows with your revenue, not just your seat count

This is what we're building. If you want to be part of it early, 
now is the time.
```

**CTA:**
```
[Start free today →]    or    [Talk to the team]
```

---

### SECTION 10: FINAL CTA BANNER

**Layout:** Full-width dark card with blue glow

```
HEADLINE:
Start sending. Own your pipeline.

SUBHEAD:
Free trial — no card needed. 1,000 emails and 500 contacts 
to see if LeadSnipper fits. Or book a free audit and we'll 
show you exactly where your current outbound is leaking.

BUTTONS:
[Start free trial →]    [Book free audit]

TRUST LINE:
✓ No credit card  ·  ✓ Setup in 15 min  ·  ✓ Cancel anytime
```

---

## 5. PRODUCTS LANDING PAGE

**URL:** `leadsnipper.com/products`
**Meta Title:** `LeadSnipper Products — Email Deliverability + LinkedIn Scheduling`
**Meta Description:** `Two tools for B2B outbound: LeadSnipper email platform on AWS SES and SocialSnipper LinkedIn scheduler. Own your outbound stack.`

---

### Layout

```
HERO (centered):
  Tag: ── OUR PRODUCTS
  H1: Two tools. One outbound stack.
  Sub: Email and LinkedIn — the two channels your buyers live on.
       Products built for teams who need control, not convenience.

PRODUCT GRID (2 large cards side by side):
  Card 1: LeadSnipper → [Explore →]
  Card 2: SocialSnipper → [Join waitlist →]

COMPARISON SECTION:
  "Why we built both instead of one"
  Email alone = missing 60% of LinkedIn touchpoints
  LinkedIn alone = no trackable deliverability layer
  Together = full-channel outbound with unified reporting

FEATURE COMPARISON TABLE:
  Both products side by side, feature by feature

BOTTOM CTA:
  Start with email. Add LinkedIn when SocialSnipper launches.
  [Start free →]
```

---

## 6. LEADSNIPPER — EMAIL DELIVERABILITY PLATFORM

**URL:** `leadsnipper.com/products/leadsnipper`
**Meta Title:** `LeadSnipper — Email Deliverability Platform Built on AWS SES`
**Meta Description:** `Cold email outreach on infrastructure you own. Domain warmup, Reoon verification, health dashboard, and analytics. From ₹499/month.`

---

### HERO

```
TAG: ── EMAIL DELIVERABILITY PLATFORM
H1: Cold email on infrastructure
    you actually own.
SUB: Built on AWS SES. Verified domains. Warmup that works.
     Analytics you can share with clients. Starting at ₹499/month.

BUTTONS: [Start free — 1,000 emails]    [See how it works]

HERO VISUAL: Animated dashboard mockup showing:
  - Domain health score: 94/100
  - Active warmup progress bar
  - Campaign stats: Sent 4,820 | Open 47% | Bounce 0.8%
  - Real-time domain status: SPF ✓ | DKIM ✓ | DMARC ✓
```

---

### SECTION: THE PROBLEM WITH SHARED INFRASTRUCTURE

```
TAG: ── WHY THIS EXISTS
H2: The day their shared IPs get flagged,
    your domain pays the price.

STORY CARDS (3 founder stories):

Story 1 — The AWS SES Burn:
"I was using a popular cold email tool. One day their shared 
infrastructure got flagged. Our domain reputation tanked overnight. 
Open rates went from 45% to 6%. We hadn't changed anything."

Story 2 — The 4-Tool Duct Tape:
"I was paying for a cold email sender, a separate warmup tool, 
a verification service, and a spreadsheet to track domain health. 
Four tools. Four subscriptions. They didn't talk to each other."

Story 3 — The 10k Bounce Disaster:
"An agency client uploaded 10,000 leads and hit send. No verification. 
Bounce rate hit 15% in the first hour. Domain blacklisted within 24 hours. 
Two weeks to recover."
```

---

### SECTION: FEATURES (Tabbed or Scrollable)

**Feature 1 — Infrastructure Ownership**
```
TITLE: Bring your own AWS SES. Or use ours.
BODY: BYO SES mode: connect your AWS account, send from your 
      own IPs, keep your sending history and reputation entirely 
      separate from every other LeadSnipper user.
      
      Managed mode: we handle the AWS setup. You get the same 
      infrastructure benefits without the configuration.

VISUAL: Diagram showing BYO SES flow vs Managed mode
```

**Feature 2 — Domain Health Dashboard**
```
TITLE: Know if your domain is healthy before you hit send.
BODY: One screen. SPF, DKIM, DMARC status. Blacklist check. 
      Reputation score. Warmup progress. No more MXToolbox 
      tab-switching every morning.

VISUAL: Dashboard screenshot/mockup with all health signals
```

**Feature 3 — Warmup with Pacing**
```
TITLE: Warmup tied to your domain — not a shared pool.
BODY: Daily send quotas that ramp up over time. Your domain 
      builds its own sending history. The warmup isn't shared 
      with other users — it's genuinely yours.

VISUAL: Warmup ramp chart (week 1–8 send volume increasing)
```

**Feature 4 — Reoon Verification**
```
TITLE: You cannot accidentally send to an unverified list.
BODY: Reoon email verification is built into the upload flow. 
      Not an option. Not a reminder. Built in. 
      You upload a list → it gets verified → clean contacts proceed.

VISUAL: Upload flow diagram with verification step highlighted
```

**Feature 5 — Analytics + PDF Reports**
```
TITLE: Reports you can hand straight to clients.
BODY: Full campaign analytics: opens, clicks, replies, bounces, 
      unsubscribes. Export to PDF with one click. 
      Agency-ready formatting — your branding on the cover.

VISUAL: PDF report preview mockup
```

**Feature 6 — AI Email Writer**
```
TITLE: Draft campaigns faster. Not better automatically.
BODY: The AI writer gives you a solid starting draft based on 
      your target persona and offer. It won't write perfect cold 
      email on its own — but it'll get you 70% there in 60 seconds.
      You still need to edit. That's honest.

VISUAL: AI writer UI showing persona inputs → draft output
```

**Feature 7 — Multi-Domain Management**
```
TITLE: Run multiple clients without one burning another.
BODY: Agency plan: manage unlimited sending domains from one 
      dashboard. Each client's domains are isolated. 
      One client's bounce rate doesn't touch another's reputation.

VISUAL: Multi-domain list view with per-domain health status
```

---

### SECTION: COMPARED TO COMPETITORS

```
TAG: ── HOW WE'RE DIFFERENT
H2: Built for control, not convenience.

COMPARISON TABLE:
┌────────────────────────────────┬────────────────┬──────────────┬──────────────────┐
│ Feature                        │ LeadSnipper    │ Instantly    │ Smartlead        │
├────────────────────────────────┼────────────────┼──────────────┼──────────────────┤
│ Bring your own AWS SES         │ ✓ Yes          │ ✗ No         │ ✗ No             │
│ Domain health dashboard        │ ✓ Built-in     │ ✗ No         │ Partial          │
│ Built-in email verification    │ ✓ Reoon        │ ✗ No         │ ✗ Separate tool  │
│ Warmup on your domain          │ ✓ Yes          │ Shared pool  │ ✓ Yes            │
│ PDF reports for clients        │ ✓ One-click    │ ✗ No         │ Paid add-on      │
│ Starting price (India)         │ ₹499/month     │ ~₹8,000/mo   │ ~₹7,000/mo       │
│ Multi-domain (agency)          │ ✓ Unlimited    │ Limited      │ Limited          │
└────────────────────────────────┴────────────────┴──────────────┴──────────────────┘
```

---

### SECTION: PRICING (Inline on product page)

```
PLAN: Trial      — Free     — 1,000 emails, 500 contacts, 1 month
PLAN: Starter    — ₹499/mo  — 5,000 emails, 3,000 contacts, 3 domains
PLAN: Business   — ₹999/mo  — 15,000 emails, 10,000 contacts, unlimited domains
PLAN: Custom     — Contact  — Unlimited, enterprise SLA

NOTE: AWS SES costs ₹0.08 per 1,000 emails.
      Most tools charge ₹7,000–₹25,000/month.
      We start at ₹499.
```

---

## 7. SOCIALSNIPPER — LINKEDIN SCHEDULER + CONTENT RESEARCHER

**URL:** `leadsnipper.com/products/socialsnipper`
**Meta Title:** `SocialSnipper — LinkedIn Post Scheduler & Content Researcher`
**Meta Description:** `Stay consistently visible on LinkedIn without the daily grind. Schedule posts, research content, and grow authority while your emails land. Coming soon.`

---

### ⚠️ DEVELOPER NOTE: LINKEDIN API COMPLIANCE

```
CRITICAL — READ BEFORE BUILDING:

SocialSnipper must comply fully with LinkedIn's API Terms of Service.
This means:

1. APPLY FOR LINKEDIN MARKETING API:
   URL: https://www.linkedin.com/developers/apps
   Required: Create a LinkedIn app, apply for relevant products:
   - "Share on LinkedIn" — for posting
   - "Marketing Developer Platform" — for analytics
   - Possibly "LinkedIn Pages API" — for page management

2. WHAT IS ALLOWED via official LinkedIn API:
   ✓ Scheduling and publishing posts to personal profiles (via Share API)
   ✓ Scheduling and publishing posts to LinkedIn Pages
   ✓ Reading post analytics (impressions, clicks, likes, comments)
   ✓ Managing company page content
   ✓ Content drafting and scheduling queue (within app)

3. WHAT IS NOT ALLOWED (no scraping, no automation):
   ✗ Automating connection requests
   ✗ Automating direct messages (InMail)
   ✗ Scraping LinkedIn profiles or search results
   ✗ Automated liking, commenting, or following
   ✗ Any action that mimics human interaction at scale

4. POSITION SOCIALSNIPPER AS:
   "A LinkedIn content scheduling and analytics tool"
   NOT as a "LinkedIn outreach automation" tool
   
   The value is: consistent posting → authority building → 
   warm inbound → easier outbound response rates

5. LANDING PAGE DISCLAIMER TO INCLUDE:
   "SocialSnipper uses LinkedIn's official Marketing API.
    Connection requests and direct messaging automation 
    are not features of this product and are not supported."
```

---

### HERO

```
TAG: ── LINKEDIN SCHEDULER + CONTENT RESEARCHER
H1: Stay visible on LinkedIn.
    Without the daily grind.

SUB: Schedule posts, research what's working in your niche, 
     and build authority consistently — so when your cold email 
     lands, prospects already know your name.

STATUS: [📋 Join waitlist — founding pricing locked in]

SOCIAL PROOF: "247 founders already on the waitlist"
```

---

### SECTION: THE PROBLEM

```
H2: Most founders post on LinkedIn 3 times, then disappear.

BODY:
The problem isn't discipline. It's systems.

You know LinkedIn builds trust. You know consistent posting 
warms up your cold outreach. But you also run a business.

SocialSnipper solves the time problem — not by posting for you 
(that feels fake), but by making it fast enough that you'll 
actually do it.

3 PAIN POINTS (cards):
1. "I have ideas but no time to write them out consistently."
2. "I don't know what to post that actually builds my authority."
3. "I go viral once then disappear for 3 weeks."
```

---

### SECTION: FEATURES

```
Feature 1 — Content Scheduler
TITLE: Write once. Post on a schedule.
BODY: Queue posts for optimal times. Drag and rearrange 
      your content calendar. Preview before publish.

Feature 2 — Content Researcher  
TITLE: Find what's actually working in your niche.
BODY: Research trending topics, formats, and hooks for your 
      specific industry. Don't start from a blank page.
      (Uses publicly available data, not LinkedIn scraping)

Feature 3 — Post Analytics
TITLE: Know which posts drive profile visits and follows.
BODY: Impressions, clicks, engagement rate, follower growth.
      See which topics land and do more of those.

Feature 4 — AI Writing Assist
TITLE: Draft faster. Publish as yourself.
BODY: Give AI your talking points. Get a first draft.
      You edit, humanise, and post. Still your voice.

Feature 5 — Best-Time Posting
TITLE: Post when your audience is actually online.
BODY: Algorithm-based timing suggestions for your 
      specific audience and industry vertical.

Feature 6 — Multi-Account (Agency)
TITLE: Manage client LinkedIn pages in one dashboard.
BODY: Switch between accounts. Separate content calendars 
      per client. Unified analytics view.
      (Requires clients to authorise via official LinkedIn OAuth)
```

---

### WAITLIST SECTION

```
H2: Be first. Lock in founding pricing.

BODY:
SocialSnipper is in final development. Waitlist members get:
→ 3 months free at launch
→ Founding member pricing locked for life
→ Direct input into the feature roadmap

[Email input field]  [Join waitlist →]

"No spam. One email when we launch. That's it."
```

---

## 8. SERVICES PAGE

**URL:** `leadsnipper.com/services`
**Meta Title:** `LeadSnipper Services — AI-Powered B2B Outbound Systems`
**Meta Description:** `Done-for-you outbound systems, AI automation, CRM integration, lead generation, SaaS development, and more. We build and operate your B2B growth infrastructure.`

---

### HERO

```
TAG: ── DONE-FOR-YOU SERVICES
H1: We build and operate your
    outbound growth infrastructure.

SUB: Don't want to run the tools yourself? Hand us the brief.
     We set up the systems, run the campaigns, and hand you
     qualified meetings. You close deals.

BUTTONS: [Book free audit →]    [See how it works]

PROOF BAR:
"Most clients see payback in 60 days"
"Average: 4.2× ROI in first quarter"
```

---

### SECTION: THE AUDIT FIRST PRINCIPLE

```
H2: We start with a free ops audit.
    Not a sales call.

BODY:
Before recommending anything, we map your current workflow,
identify exactly where pipeline is leaking, and show you 
the 2–3 systems that will move the needle fastest.

If we're not the right fit, we'll tell you that too.

[Book free 30-min audit →]

THE 5-STEP PROCESS:
01. Free Ops Audit — We map your workflow and find the leaks
02. Blueprint & Quote — Clear plan with timelines and ROI math
03. Build in Sprints — Production systems in 2-week cycles
04. Train & Handoff — SOPs, dashboards, and full ownership
05. Scale & Optimise — Monthly reviews, new automations as you grow
```

---

### SECTION: ALL 9 SERVICES (individual deep-dives)

**Service 1 — AI Automation Systems**
```
URL: /services/ai-automation
TITLE: AI Automation Systems
BADGE: Most requested
DESC: Custom AI agents that handle operations, customer support,
      lead qualification, and repetitive workflows 24/7.
      We map your manual processes and deploy intelligent agents
      to execute them — without adding headcount.
RESULTS: Average 15–20 hours saved per week per employee
IDEAL FOR: Founders and ops managers drowning in repetitive daily tasks
CASE: "Helped an Indore D2C brand automate order processing, 
       cutting daily ops from 8 hours to 30 minutes."
CTA: [Book consultation]
```

**Service 2 — AI Search Optimisation (AI SEO)**
```
URL: /services/ai-seo
TITLE: AI Search Optimisation
DESC: Get your business recommended on ChatGPT, Perplexity, 
      Gemini, and Google AI Overviews — where buyers increasingly
      go instead of traditional search.
RESULTS: 300% increase in AI channel discovery
IDEAL FOR: Local businesses and service providers capturing early AI traffic
CTA: [Book consultation]
```

**Service 3 — Custom Business Software**
```
URL: /services/custom-software
TITLE: Custom Business Software Development
DESC: Internal tools built precisely around your workflow —
      not the other way around. We replace scattered spreadsheets
      with cohesive, purpose-built web applications.
RESULTS: Up to 80% productivity improvement
IDEAL FOR: Scaling teams on 10+ disconnected SaaS tools and Google Sheets
CTA: [Book consultation]
```

**Service 4 — AI + CRM Automation**
```
URL: /services/crm-automation
TITLE: AI + CRM Automation
DESC: Smart CRM setup where lead scoring, follow-ups, and pipeline
      updates happen automatically. Never lose a qualified lead
      to a slow response time.
RESULTS: 2.5× lead-to-meeting conversion rate improvement
IDEAL FOR: Sales teams losing leads to slow follow-up
CTA: [Book consultation]
```

**Service 5 — SaaS & MVP Development**
```
URL: /services/mvp-development
TITLE: SaaS & MVP Development
DESC: Validate your business idea in 6–8 weeks with a 
      scalable, production-ready MVP. Enterprise-grade architecture
      from day one — built to onboard users, not just impress investors.
RESULTS: 60% faster time-to-market vs traditional development
IDEAL FOR: Non-technical founders needing rapid, high-quality execution
CTA: [Book consultation]
```

**Service 6 — Conversion-Focused Web Applications**
```
URL: /services/web-applications
TITLE: Conversion-Focused Web Applications
DESC: Web experiences engineered for revenue, not aesthetics.
      We combine modern design with behavioural psychology
      to drive measurable action.
RESULTS: 40–70% landing page conversion improvement
IDEAL FOR: Brands with high traffic and low conversions
CTA: [Book consultation]
```

**Service 7 — AI Dashboards & Analytics**
```
URL: /services/ai-analytics
TITLE: AI Dashboards & Analytics Systems
DESC: Real-time intelligence that tells you what to do —
      not just what happened. Unified business metrics with
      predictive trend alerts and automated daily summaries.
RESULTS: Weekly reporting time cut from hours to zero
IDEAL FOR: Executives making decisions on outdated fragmented data
CTA: [Book consultation]
```

**Service 8 — Lead Generation & Sales Automation**
```
URL: /services/lead-generation
TITLE: Lead Generation & Sales Automation
DESC: Full outbound pipeline management — prospecting,
      personalised email + LinkedIn sequences, reply handling,
      and meeting booking. We fill the calendar.
RESULTS: 20–40 qualified sales meetings per month
IDEAL FOR: B2B service businesses with inconsistent lead flow
CTA: [Book consultation]
```

**Service 9 — Startup Technology Consulting**
```
URL: /services/tech-consulting
TITLE: Startup Technology Consulting
DESC: Founder-aligned strategic guidance on technology stack,
      hiring plans, and scaling architecture decisions.
      Avoid the costly technical debt mistakes that compound later.
RESULTS: Average $50K+ in early technical debt prevented
IDEAL FOR: Non-technical founders needing fractional CTO perspective
CTA: [Book consultation]
```

---

### SECTION: PRICING (Retainers)

```
TIER 1: Starter Retainer — ₹30,000/month
→ 1 AI automation workflow
→ Email outreach setup and management
→ CRM integration (basic)
→ LeadSnipper Business plan included
→ Weekly check-ins
→ Email + chat support

TIER 2: Growth Retainer — ₹50,000/month [MOST POPULAR]
→ 3 AI workflows + dashboard
→ Full outbound system (email + LinkedIn)
→ Lead generation system setup
→ LeadSnipper Business plan included
→ Bi-weekly strategy calls
→ Priority support

TIER 3: Enterprise Retainer — ₹80,000+/month
→ Unlimited workflows
→ Custom software or MVP build
→ Dedicated AI engineer
→ LeadSnipper Custom plan included
→ Quarterly business reviews
→ SLA-backed support

BUILD YOUR STACK (interactive calculator):
Users select from service modules to get custom estimate:
- AI Automation Workflow: ₹20,000
- CRM Automation: ₹15,000
- Lead Generation System: ₹25,000
- AI SEO Optimisation: ₹10,000
- Executive Dashboard: ₹15,000
- Custom Software Sprint: ₹30,000+

NOTE: All service retainers include LeadSnipper Business plan
      at no extra cost.
```

---

## 9. BLOG PAGE

**URL:** `leadsnipper.com/blog`
**Meta Title:** `LeadSnipper Blog — Email Deliverability, Outbound & B2B Growth`
**Meta Description:** `Practical guides on cold email deliverability, domain warmup, AI outbound systems, and B2B growth strategy. Written by practitioners.`

---

### Layout

```
HERO (minimal):
  H1: Outbound intelligence.
      No fluff.
  SUB: Deliverability guides, outbound playbooks, and AI automation
       insights — written by people who actually run these systems.
  SEARCH BAR: "Search articles..."

CATEGORY FILTER TABS:
  [All]  [Email Deliverability]  [Outbound Strategy]  
  [AI Automation]  [Product Updates]  [Case Studies]

FEATURED ARTICLE (large card):
  Cover image + Category tag + Title + 2-line excerpt + Author + Date

ARTICLE GRID (3-column):
  Each card: Category tag + Title + 1-line excerpt + Read time + Date

SIDEBAR (optional on article pages):
  - Related articles
  - LeadSnipper CTA card
  - Newsletter signup
```

---

### First 12 Articles to Write (SEO-prioritised)

**Deliverability (priority tier 1):**
```
1. "Why Your Cold Emails Land in Spam (And How to Fix It)"
   Slug: /blog/cold-emails-going-to-spam
   Target keyword: cold emails going to spam

2. "Email Domain Warmup: The Complete Guide for 2026"
   Slug: /blog/email-domain-warmup-guide
   Target keyword: how to warm up email domain

3. "SPF, DKIM, DMARC Explained: The Non-Technical Guide"
   Slug: /blog/spf-dkim-dmarc-explained
   Target keyword: what is DKIM SPF DMARC

4. "AWS SES for Cold Email: Setup Guide + Pros and Cons"
   Slug: /blog/aws-ses-cold-email-setup
   Target keyword: AWS SES cold email
```

**Comparison (priority tier 1):**
```
5. "Instantly vs LeadSnipper: Which Is Better for Agencies in India?"
   Slug: /blog/instantly-vs-leadsnipper
   Target keyword: Instantly alternative India

6. "Smartlead vs LeadSnipper: A Practical Comparison"
   Slug: /blog/smartlead-vs-leadsnipper
   Target keyword: Smartlead alternative affordable
```

**Outbound Strategy (tier 2):**
```
7. "Cold Email Open Rates Are Dropping — Here's What's Actually Happening"
   Slug: /blog/cold-email-open-rates-dropping
   Target keyword: cold email open rates dropping

8. "How to Write a Cold Email That Doesn't Get Ignored in 2026"
   Slug: /blog/cold-email-writing-guide
   Target keyword: how to write cold emails

9. "The B2B Outbound Stack for Indian Startups (Without Burning ₹50K/month)"
   Slug: /blog/b2b-outbound-stack-india
   Target keyword: B2B outbound tools India
```

**AI / Services (tier 2):**
```
10. "How AI Is Changing B2B Lead Generation in 2026"
    Slug: /blog/ai-b2b-lead-generation
    Target keyword: AI lead generation B2B

11. "What Is AI SEO and Why Your Business Needs It Now"
    Slug: /blog/what-is-ai-seo
    Target keyword: AI SEO optimization

12. "LeadSnipper vs Managing 4 Separate Tools: A Real Cost Comparison"
    Slug: /blog/leadsnipper-vs-four-tools
    Target keyword: email outreach tools comparison India
```

---

### Newsletter CTA (appears in sidebar + blog footer)

```
TITLE: Get the outbound playbook.
BODY: One email, every other week. Deliverability insights,
      outbound frameworks, and what's actually working for our teams.
      No noise.
[Email field]  [Subscribe →]
"Join 800+ B2B founders and operators."
```

---

## 10. PRICING PAGE

**URL:** `leadsnipper.com/pricing`
**Meta Title:** `LeadSnipper Pricing — Self-Serve Tools from ₹499 + Done-for-You Services`
**Meta Description:** `Free trial to get started. Self-serve email platform from ₹499/month. Done-for-you services from ₹30,000/month. See what fits your team.`

---

### HERO

```
TAG: ── PRICING
H1: Simple pricing.
    No hidden infrastructure fees.

SUB: Start with the free trial. Upgrade when you need more.
     Or engage our service team to run it for you.

TOGGLE: [Self-Serve Tools ⟷ Done-for-You Services]
```

---

### SELF-SERVE TOOLS PRICING

```
ROW 1 — CONTEXT SETTER:
"AWS SES costs $0.10 per 1,000 emails. Most cold email 
tools charge ₹7,000–₹25,000/month and still don't give 
you infrastructure ownership. We start at ₹499."

PLANS:

TRIAL — Free
- 1,000 emails/month
- 500 contacts
- 1 domain
- 1 month duration
- Domain health check
- Basic analytics
CTA: [Start free]

STARTER — ₹499/month
- 5,000 emails/month
- 3,000 contacts
- Up to 3 domains
- Domain warmup
- Reoon verification
- Full analytics
CTA: [Get Starter]

BUSINESS — ₹999/month  [MOST POPULAR]
- 15,000 emails/month
- 10,000 contacts
- Unlimited domains
- Unlimited warmup
- Reoon verification
- PDF reports for clients
- BYO AWS SES
- AI email writer
- Priority support
CTA: [Get Business]

CUSTOM — Talk to us
- Unlimited emails
- Unlimited contacts
- Dedicated account manager
- Custom integrations
- Enterprise SLA
- White-label option
CTA: [Contact sales]

PLAN COMPARISON TABLE (full feature grid below pricing cards)
```

---

### DONE-FOR-YOU SERVICES PRICING

```
NOTE ABOVE PLANS:
"All service retainers include the LeadSnipper Business plan 
at no extra charge. Cancel anytime. Most clients see payback 
inside 60 days."

STARTER RETAINER — ₹30,000/month
- 1 AI automation workflow
- Email outreach setup + management
- Basic CRM integration
- LeadSnipper Business included
- Weekly check-ins

GROWTH RETAINER — ₹50,000/month  [MOST POPULAR]
- 3 AI workflows + dashboard
- Full outbound (email + LinkedIn)
- Lead generation system
- LeadSnipper Business included
- Bi-weekly strategy calls
- Priority support

ENTERPRISE — ₹80,000+/month
- Unlimited workflows
- Custom software/MVP
- Dedicated AI engineer
- LeadSnipper Custom included
- QBRs
- SLA-backed support

INTERACTIVE CALCULATOR:
"Build your own stack"
User selects service modules → sees estimated monthly cost
```

---

### FAQ SECTION

```
Q: Do I need to know AWS to use LeadSnipper?
A: No. Use Managed mode — we handle the SES setup. 
   BYO SES is available when you want full infrastructure control.

Q: What happens after my free trial?
A: After 1 month you can upgrade to Starter or Business, 
   or your account moves to read-only. No auto-charge.

Q: Can I bring my own AWS SES?
A: Yes — Business plan and above. Connect your SES account, 
   your emails send from your own IPs and domain reputation.

Q: Do service clients also get the SaaS product?
A: Yes. All service retainers include LeadSnipper Business.

Q: What is AI Search Optimisation?
A: Making your business appear in AI-generated answers on 
   ChatGPT, Perplexity, and Google AI Overviews — not just 
   traditional page-1 Google results.

Q: How is SocialSnipper different from other LinkedIn tools?
A: SocialSnipper is a content scheduling and analytics tool 
   built on LinkedIn's official Marketing API. It does not 
   automate connection requests or messages — those violate 
   LinkedIn's terms. We schedule and analyse posts.

Q: Is there a refund policy?
A: Yes — see our full Refund Policy at leadsnipper.com/refund-policy.
   Service retainers are reviewed on a case-by-case basis.
```

---

## 11. NAVIGATION & FOOTER

### Navigation (Sticky Header)

```
HEIGHT: 64px
BACKGROUND: rgba(6,8,16,0.85) + backdrop-filter: blur(20px)
BORDER-BOTTOM: 1px solid rgba(255,255,255,0.06)

LEFT SECTION:
  Logo mark + "LeadSnipper" wordmark
  "Snipper" portion in brand blue #3B82F6
  Font: Display font, weight 800, 20px

CENTER NAV:
  Products (dropdown)
  Services (dropdown)  
  Blog
  Pricing

RIGHT SECTION:
  [Log in] ← ghost button
  [Start free →] ← primary blue button

MOBILE:
  Hamburger icon → full-screen menu overlay
```

---

### FOOTER (Beeze.ai Inspired)

**Layout:** 5-column footer, dark background

```
BACKGROUND: #060810 (deepest bg)
BORDER-TOP: 1px solid rgba(255,255,255,0.06)
PADDING: 64px 48px 32px

──────────────────────────────────────────────────────────

TOP ROW (flex, space-between):

COL 1 — Brand (wider)
  [LeadSnipper Logo]
  "We build and operate AI-powered outbound systems."
  (14px, --text-muted, max-width 220px)
  
  Social links (icon only, 20px, muted → white on hover):
  [Twitter/X] [LinkedIn] [GitHub if applicable]

COL 2 — Products
  HEADING: Products (12px mono, blue, uppercase, letter-spacing)
  LeadSnipper
  SocialSnipper
  Pricing
  Changelog

COL 3 — Services
  HEADING: Services
  AI Automation
  AI Search (AI SEO)
  Lead Generation
  CRM Automation
  MVP Development
  All Services →

COL 4 — Resources
  HEADING: Resources
  Blog
  Documentation
  Case Studies
  Free Audit

COL 5 — Company
  HEADING: Company
  About
  Contact
  Careers
  Partner Program

──────────────────────────────────────────────────────────

BOTTOM ROW (border-top, flex, space-between):
  LEFT: © 2026 LeadSnipper. Built in India 🇮🇳
  RIGHT: [Privacy Policy] · [Terms of Service] · [Refund Policy] · [Data Use Policy]
  (13px, --text-muted)

──────────────────────────────────────────────────────────

NEWSLETTER STRIP (above footer columns, full-width):
  BACKGROUND: rgba(59,130,246,0.06)
  BORDER: 1px solid rgba(59,130,246,0.15)
  BORDER-RADIUS: 16px
  PADDING: 24px 32px
  LAYOUT: flex, space-between
  
  LEFT: 
    "Get the outbound playbook." (18px, weight 600)
    "Deliverability guides + AI outbound insights. Every other week."
  RIGHT:
    [email input] [Subscribe →]
```

---

## 12. LEGAL PAGES

All legal pages share the same minimal layout:

```
LAYOUT:
  - Max-width: 760px centered
  - Background: --bg-base
  - Typography: body text 16px, --text-secondary
  - Headings: H2 24px, H3 18px, all weight 600
  - Last updated date at top
  - Breadcrumb: Home > Legal > [Page Name]
  - Footer: same as site footer
```

### Privacy Policy — `/privacy-policy`

```
Meta Title: Privacy Policy | LeadSnipper
Meta Description: LeadSnipper's privacy policy — how we collect, use, and protect your data.

KEY SECTIONS TO COVER:
1. What data we collect (email, name, payment info, usage data)
2. How we use your data (service delivery, analytics, communication)
3. Data storage and security (AWS infrastructure, encryption)
4. Third-party services (AWS SES, Reoon, payment processor)
5. Your rights (access, deletion, portability)
6. Cookie policy
7. Contact for privacy requests: privacy@leadsnipper.com

IMPORTANT FOR SOCIALSNIPPER:
Include section on LinkedIn API data:
"When you connect SocialSnipper to LinkedIn, we access only the 
permissions you explicitly grant via LinkedIn's official OAuth. 
We do not store your LinkedIn credentials. You can revoke access 
at any time from your LinkedIn account settings."
```

### Terms of Service — `/terms-of-service`

```
Meta Title: Terms of Service | LeadSnipper
Meta Description: LeadSnipper's terms of service — rules for using our platform and services.

KEY SECTIONS:
1. Acceptance of terms
2. Permitted use (commercial cold email on owned/verified domains)
3. Prohibited use — explicitly list:
   - Spam (unsolicited bulk email without permission)
   - Phishing or deceptive email
   - Importing harvested/scraped lists
   - Reselling platform access
4. Email sending requirements (CAN-SPAM, GDPR compliance is user's responsibility)
5. Platform availability and uptime
6. Intellectual property
7. Termination
8. Limitation of liability
9. Governing law: India (Indore, Madhya Pradesh jurisdiction)

SOCIALSNIPPER TERMS ADDENDUM:
"SocialSnipper users must comply with LinkedIn's User Agreement. 
Automated connection requests, spam DMs, or any use that violates 
LinkedIn's policies is strictly prohibited and grounds for immediate 
account termination."
```

### Refund Policy — `/refund-policy`

```
Meta Title: Refund Policy | LeadSnipper
Meta Description: LeadSnipper's refund policy for SaaS subscriptions and service retainers.

SAAS PRODUCT REFUNDS:
- Trial plan: No charge, no refund needed
- Paid plans: Refund requests within 7 days of first charge considered
- After 7 days: No refunds, but you keep access until period ends
- Annual plans (if offered): 14-day refund window from purchase

SERVICE RETAINER REFUNDS:
- Retainers are reviewed on a case-by-case basis
- First month: Refund available if no work has been delivered
- After first deliverable: No refund, but can cancel with 30 days notice
- Contact: billing@leadsnipper.com

HOW TO REQUEST:
Email billing@leadsnipper.com with:
- Account email
- Reason for refund
- Order/invoice number
Response within 2 business days.
```

### Data Use Policy — `/legal/data-use`

```
Meta Title: Data Use Policy | LeadSnipper
Meta Description: How LeadSnipper uses and processes your data and your contacts' data.

KEY SECTIONS:
1. Contact data you import (how we process, store, delete)
2. AWS SES data handling
3. LinkedIn data (SocialSnipper — only official API data)
4. Analytics data (what we track in-platform)
5. Data retention periods
6. Data deletion: submit to privacy@leadsnipper.com
7. GDPR / PDPB (India's Personal Data Protection Bill) compliance notes
8. Processor agreements available on request

LINKEDIN SPECIFIC SECTION:
"SocialSnipper is built on LinkedIn's official Marketing API.
We access only data explicitly permitted by LinkedIn's partner program.
We do not scrape LinkedIn. We do not store connection data.
LinkedIn data accessed through SocialSnipper is used only to:
(a) schedule and publish your content
(b) display analytics about your content performance
We are not a LinkedIn partner for outreach automation."
```

---

## 13. SEO STRATEGY

### Site Architecture for SEO

```
leadsnipper.com/                    → Homepage (brand + overview)
leadsnipper.com/products/           → Products landing
leadsnipper.com/products/leadsnipper → Email platform product page
leadsnipper.com/products/socialsnipper → LinkedIn tool product page
leadsnipper.com/services/           → Services overview
leadsnipper.com/services/[slug]/    → Individual service pages (9 pages)
leadsnipper.com/blog/               → Blog index
leadsnipper.com/blog/[slug]/        → Individual articles
leadsnipper.com/pricing/            → Pricing page
leadsnipper.com/about/              → About / founding story
leadsnipper.com/case-studies/       → Case studies (as they build up)
leadsnipper.com/compare/instantly-vs-leadsnipper/ → Comparison pages
leadsnipper.com/compare/smartlead-vs-leadsnipper/ → Comparison pages
```

---

### Keyword Strategy by Page

```
HOMEPAGE
Primary: "AI-powered outbound systems India"
Secondary: "B2B growth infrastructure", "email deliverability platform India"

LEADSNIPPER PRODUCT PAGE
Primary: "email deliverability platform India"
Secondary: "cold email tool AWS SES", "email outreach tool India", 
           "domain warmup tool", "email verification tool India"

SOCIALSNIPPER PRODUCT PAGE
Primary: "LinkedIn post scheduler India"
Secondary: "LinkedIn content scheduler", "LinkedIn content researcher tool"

SERVICES PAGE
Primary: "AI outbound services India", "done-for-you lead generation"
Secondary: "cold email agency India", "email outreach agency"

INDIVIDUAL SERVICE PAGES:
/services/ai-automation → "AI automation for business India"
/services/lead-generation → "lead generation agency India B2B"
/services/crm-automation → "CRM automation service India"
/services/ai-seo → "AI SEO optimization service"
/services/mvp-development → "SaaS MVP development India"

BLOG (content cluster approach):
- Pillar page: "Complete Guide to Email Deliverability 2026"
  Supporting: warmup, DKIM, SPF, DMARC, bounce rates, AWS SES
- Pillar page: "B2B Outbound Playbook for Indian Startups"
  Supporting: cold email sequences, LinkedIn, ICP definition, CRM setup
```

---

### Local SEO (India-specific)

```
Target locations: Indore, Madhya Pradesh, India (base)
Also target: Pan-India B2B audience

Local pages/mentions:
- "B2B outreach agency Indore"
- "AI automation company Madhya Pradesh"
- "Email marketing service India"
- "Lead generation company India"

Google Business Profile:
- Register: LeadSnipper / [Parent company name]
- Category: Software Company / Marketing Agency
- Service areas: India-wide
```

---

### Backlink & Content Authority Plan

```
MONTH 1–2: Foundation
- Write 6 core blog posts (see article list above)
- Submit to IndieHackers, Product Hunt (for ProductsSnipper launch)
- Guest post on one India-focused SaaS/startup blog

MONTH 3–4: Comparison Content
- Publish Instantly vs LeadSnipper, Smartlead vs LeadSnipper
- Submit to G2, Capterra, SoftwareSuggest (India) for reviews
- Reach out to 10 cold email newsletters for mentions

MONTH 5–6: Authority Building
- Case study: document one service client's results
- Webinar or video: "Cold Email Deliverability Masterclass"
- LinkedIn content from founder account (using SocialSnipper)

ONGOING:
- 2 blog posts per month minimum
- Monthly email newsletter
- LinkedIn founder posts 3×/week
```

---

## 14. COPY GUIDELINES

### Voice & Tone

```
WHO WE SOUND LIKE:
  A senior practitioner explaining to a peer.
  Not a marketer. Not a salesperson. Someone who has actually 
  sent cold email, burned a domain, and built systems.

TONE SPECTRUM:
  Technical ←──────────────────→ Human
                   ↑ We live here

ADJECTIVES THAT DESCRIBE OUR VOICE:
  Direct. Honest. Technical. Practitioner. Unpretentious. Specific.
```

### Words We Use

```
✓ deliverability, inbox placement, sender reputation
✓ domain health, warmup, pacing, quota
✓ BYO SES, managed sending, owned infrastructure
✓ verification, list hygiene, bounce suppression
✓ campaign, sequence, pipeline, outbound
✓ DNS, DKIM, SPF, DMARC, AWS SES, Reoon
✓ "cold email" (never "spam" — they're different things)
✓ "outreach" (not "blast")
✓ "land in the inbox" (not "avoid spam")
✓ owned vs rented infrastructure
```

### Words We Never Use

```
✗ revolutionary, game-changing, disruptive
✗ empower, leverage, utilize, synergize
✗ seamless, frictionless (overused)
✗ best-in-class, cutting-edge, next-gen
✗ "one-stop shop", "all-in-one solution" (show, don't label)
✗ "AI-powered" as a standalone claim (explain what the AI does)
✗ "99.9% deliverability" (not a guarantee we make)
✗ "unlimited" on Trial or Starter plans
✗ any direct insults to competitors
```

### Formatting Rules for Copy

```
HEADLINES: Sentence case. Never all-caps. Max 10 words.
BODY: Short paragraphs (2–3 sentences max).
FEATURE LISTS: Start with a verb. "Verify your list before sending."
STATS: Use real numbers. "15–20 hours" not "dozens of hours".
QUOTES: From real users when possible. Specific > generic.
CTA BUTTONS: Verb + benefit or verb + arrow. "Start free →" not "Click here"
```

### Messaging by ICP

```
FOR AGENCY OWNERS:
  Lead with: multi-domain isolation, client PDF reports, BYO SES
  Pain: "one client's list burns another domain"
  Hook: "Manage 10 client domains without one contaminating another."

FOR SOLO FOUNDERS:
  Lead with: price, simplicity, all-in-one
  Pain: "I'm paying for 4 separate tools"
  Hook: "₹499/month. Warmup, verification, sending, analytics. One place."

FOR SDR TEAMS:
  Lead with: domain health visibility, managed SES, analytics
  Pain: "no visibility into what's actually happening"
  Hook: "Know your domain health score before your SDR hits send."

FOR SERVICE CLIENTS:
  Lead with: outcomes (meetings, ROI), not process
  Pain: "we don't have the team or time to run outbound properly"
  Hook: "Tell us your ICP and offer. We'll fill your calendar."
```

---

## APPENDIX: SITE TECH RECOMMENDATIONS

```
FRAMEWORK: Next.js (App Router) or Astro for static performance
STYLING: Tailwind CSS (brand color: extend with blue-500 = #3B82F6)
FONTS: Load via next/font or self-hosted Fontsource
ANIMATIONS: Framer Motion (for React) or CSS-only where possible
CMS (Blog): Sanity.io or Contentlayer (MDX) — headless
ANALYTICS: Plausible or PostHog (privacy-first)
FORMS: React Hook Form + Resend for email delivery
PAYMENTS: Razorpay (India-first) for SaaS plans
HOSTING: Vercel (recommended for Next.js)

PERFORMANCE TARGETS:
  LCP < 2.5s
  CLS < 0.1
  FID < 100ms
  Core Web Vitals: all green
  Mobile-first responsive

ACCESSIBILITY:
  WCAG 2.1 AA minimum
  All CTAs have aria-labels
  Color contrast ratio > 4.5:1 for body text on dark background
```

---

*Document version 1.0 — May 2026*
*Last updated: May 17, 2026*
*Brand: LeadSnipper | leadsnipper.com*
*Brand color: #3B82F6 (Tailwind Blue 500)*