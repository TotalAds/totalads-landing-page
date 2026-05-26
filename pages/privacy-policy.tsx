import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout pageKey="privacy" breadcrumbLabel="Privacy Policy">
      <PrivacyPolicyContent />
    </LegalPageLayout>
  );
}
