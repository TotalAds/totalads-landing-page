import LegalPageLayout from "@/components/legal/LegalPageLayout";
import ReadreuseCalculatorPrivacyContent from "@/components/legal/ReadreuseCalculatorPrivacyContent";
import { READREUSE_CALCULATOR } from "@/lib/legal";

export default function ReadreuseCalculatorPrivacyPolicy() {
  return (
    <LegalPageLayout
      pageKey="readreuseCalculatorPrivacy"
      breadcrumbLabel={`Privacy Policy — ${READREUSE_CALCULATOR.appName}`}
      lastUpdated={READREUSE_CALCULATOR.lastUpdated}
    >
      <ReadreuseCalculatorPrivacyContent />
    </LegalPageLayout>
  );
}
