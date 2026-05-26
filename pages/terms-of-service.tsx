import TermsOfServiceContent from "@/components/legal/TermsOfServiceContent";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function TermsOfService() {
  return (
    <LegalPageLayout pageKey="terms" breadcrumbLabel="Terms of Service">
      <TermsOfServiceContent />
    </LegalPageLayout>
  );
}
