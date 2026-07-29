/* ── Types ────────────────────────────────────────────────────────── */

export type DomainAge = "new" | "1-3mo" | "3-6mo" | "6mo+";
export type WarmupStatus = "not_started" | "week_1_2" | "week_3_4" | "fully_warmed";
export type ColdOutreachAllowed = "none" | "limited" | "yes";

export interface SendingLimitInputs {
  domainAge: DomainAge;
  warmupStatus: WarmupStatus;
  domainCount?: number;
}

export interface HealthThresholds {
  bouncePause: number;
  complaintStop: number;
  openMin: number;
}

export interface RampWeek {
  week: number;
  dailyMin: number;
  dailyMax: number;
  type: "warmup" | "limited-cold" | "full-cold";
  notes: string;
}

export interface SendingLimitResult {
  todayLimit: number;
  targetLimit: number;
  coldOutreachAllowed: ColdOutreachAllowed;
  healthThresholds: HealthThresholds;
  rampSchedule: RampWeek[];
  totalDailyCapacity: number;
  domainCount: number;
}

/* ── Constants & Labels ───────────────────────────────────────────── */

export const DOMAIN_AGE_OPTIONS = [
  { id: "new" as DomainAge, label: "New domain (0–30 days)", value: "new" as DomainAge },
  { id: "1-3mo" as DomainAge, label: "1–3 months old", value: "1-3mo" as DomainAge },
  { id: "3-6mo" as DomainAge, label: "3–6 months old", value: "3-6mo" as DomainAge },
  { id: "6mo+" as DomainAge, label: "6+ months old", value: "6mo+" as DomainAge },
];

export const WARMUP_STATUS_OPTIONS = [
  { id: "not_started" as WarmupStatus, label: "Not started", value: "not_started" as WarmupStatus },
  { id: "week_1_2" as WarmupStatus, label: "Week 1–2 (warming up)", value: "week_1_2" as WarmupStatus },
  { id: "week_3_4" as WarmupStatus, label: "Week 3–4 (nearly warmed)", value: "week_3_4" as WarmupStatus },
  { id: "fully_warmed" as WarmupStatus, label: "Fully warmed", value: "fully_warmed" as WarmupStatus },
];

const HEALTH_THRESHOLDS: HealthThresholds = {
  bouncePause: 0.03, // 3%
  complaintStop: 0.001, // 0.1%
  openMin: 0.10, // 10%
};

/* ── Age-based ceiling (max sustainable per domain once warmed) ───── */

const AGE_CEILING: Record<DomainAge, number> = {
  new: 50,
  "1-3mo": 80,
  "3-6mo": 120,
  "6mo+": 150,
};

/* ── Warmup stage limits ──────────────────────────────────────────── */

interface WarmupStageConfig {
  min: number;
  max: number;
  coldAllowed: ColdOutreachAllowed;
}

const WARMUP_STAGES: Record<WarmupStatus, WarmupStageConfig> = {
  not_started: { min: 10, max: 30, coldAllowed: "none" },
  week_1_2: { min: 10, max: 30, coldAllowed: "none" },
  week_3_4: { min: 30, max: 80, coldAllowed: "limited" },
  fully_warmed: { min: 0, max: Infinity, coldAllowed: "yes" }, // use age ceiling
};

/* ── Rule Engine ──────────────────────────────────────────────────── */

export function calculateSendingLimit(inputs: SendingLimitInputs): SendingLimitResult {
  const { domainAge, warmupStatus, domainCount = 1 } = inputs;

  const ageCeiling = AGE_CEILING[domainAge];
  const warmupStage = WARMUP_STAGES[warmupStatus];

  // Today's safe limit is the minimum of warmup-stage cap and age ceiling
  let todayLimit: number;
  if (warmupStatus === "fully_warmed") {
    todayLimit = ageCeiling;
  } else {
    todayLimit = Math.min(warmupStage.max, ageCeiling);
  }

  // Target limit after full ramp is the age ceiling
  const targetLimit = ageCeiling;

  const coldOutreachAllowed = warmupStage.coldAllowed;

  // Build ramp schedule
  const rampSchedule = buildRampSchedule(warmupStatus, todayLimit, targetLimit, ageCeiling);

  const totalDailyCapacity = todayLimit * domainCount;

  return {
    todayLimit,
    targetLimit,
    coldOutreachAllowed,
    healthThresholds: HEALTH_THRESHOLDS,
    rampSchedule,
    totalDailyCapacity,
    domainCount,
  };
}

/* ── Ramp Schedule Builder ────────────────────────────────────────── */

function buildRampSchedule(
  warmupStatus: WarmupStatus,
  todayLimit: number,
  targetLimit: number,
  ageCeiling: number
): RampWeek[] {
  const schedule: RampWeek[] = [];

  if (warmupStatus === "not_started" || warmupStatus === "week_1_2") {
    // Start at 10/day, increase ~15%/week, cap at stage target (30)
    let current = 10;
    for (let week = 1; week <= 2; week++) {
      const min = Math.floor(current);
      const max = Math.floor(Math.min(current * 1.5, 30));
      schedule.push({
        week,
        dailyMin: min,
        dailyMax: max,
        type: "warmup",
        notes: "Warmup only – no cold outreach. Send to colleagues, existing customers, warmup partners.",
      });
      current = max;
    }

    // Week 3–4: transition to limited cold
    let weekNum = 3;
    current = 30;
    while (current < ageCeiling && weekNum <= 6) {
      const min = Math.floor(current);
      const max = Math.floor(Math.min(current * 1.15, ageCeiling));
      schedule.push({
        week: weekNum,
        dailyMin: min,
        dailyMax: max,
        type: weekNum <= 4 ? "limited-cold" : "full-cold",
        notes:
          weekNum <= 4
            ? "Mix in limited cold outreach – verified contacts only."
            : "Full cold outreach allowed – monitor bounce/complaint rates closely.",
      });
      current = max;
      weekNum++;
      if (current >= ageCeiling) break;
    }
  } else if (warmupStatus === "week_3_4") {
    // Start at 30/day, ramp to age ceiling over 3–4 weeks
    let current = 30;
    let weekNum = 1;
    while (current < ageCeiling && weekNum <= 4) {
      const min = Math.floor(current);
      const max = Math.floor(Math.min(current * 1.15, ageCeiling));
      schedule.push({
        week: weekNum,
        dailyMin: min,
        dailyMax: max,
        type: weekNum <= 2 ? "limited-cold" : "full-cold",
        notes:
          weekNum <= 2
            ? "Mix in limited cold outreach – verified contacts only."
            : "Full cold outreach allowed – monitor bounce/complaint rates closely.",
      });
      current = max;
      weekNum++;
      if (current >= ageCeiling) break;
    }
  } else if (warmupStatus === "fully_warmed") {
    // Already at full volume – show maintenance schedule
    schedule.push({
      week: 1,
      dailyMin: ageCeiling,
      dailyMax: ageCeiling,
      type: "full-cold",
      notes: "Maintain current volume. Monitor health metrics daily to protect sender reputation.",
    });

    // Add scaling guidance if there's room to grow
    if (ageCeiling < 150) {
      schedule.push({
        week: 2,
        dailyMin: ageCeiling,
        dailyMax: ageCeiling,
        type: "full-cold",
        notes: "To scale beyond this limit, add more sending domains or wait for domain to age further.",
      });
    } else {
      schedule.push({
        week: 2,
        dailyMin: ageCeiling,
        dailyMax: ageCeiling,
        type: "full-cold",
        notes: "To scale beyond 150/day per domain, add more sending domains and distribute volume.",
      });
    }
  }

  return schedule;
}

/* ── Helper: Get domain age label ──────────────────────────────────── */

export function getDomainAgeLabel(age: DomainAge): string {
  return DOMAIN_AGE_OPTIONS.find((o) => o.id === age)?.label || age;
}

export function getWarmupStatusLabel(status: WarmupStatus): string {
  return WARMUP_STATUS_OPTIONS.find((o) => o.id === status)?.label || status;
}
