import RefundPolicyContent from "@/components/legal/RefundPolicyContent";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function RefundPolicy() {
  return (
    <LegalPageLayout pageKey="refund" breadcrumbLabel="Refund Policy">
      <RefundPolicyContent />
    </LegalPageLayout>
  );
}
