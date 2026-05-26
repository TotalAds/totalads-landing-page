import DataUsePolicyContent from "@/components/legal/DataUsePolicyContent";
import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function DataUse() {
  return (
    <LegalPageLayout pageKey="dataUse" breadcrumbLabel="Data Use Policy">
      <DataUsePolicyContent />
    </LegalPageLayout>
  );
}
