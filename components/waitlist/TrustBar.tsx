export default function TrustBar({ count }: { count?: number }) {
  return (
    <div className="flex flex-wrap items-center justify-start lg:justify-start gap-3 text-gray-400 text-sm">
      <span className="text-gray-300 font-medium">
        Join {count ?? 500}+ GTM teams already using LeadSnipper
      </span>
    </div>
  );
}
