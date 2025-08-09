import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-gradient-to-br from-slate-900/80 via-purple-900/60 to-slate-900/80 text-gray-300">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-white font-bold text-lg">LeadSnipper</div>
            <div className="text-xs text-gray-400">Revenue-Focused Sales Intelligence</div>
          </div>
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms</Link>
            <Link href="/refund-policy" className="hover:text-white">Refunds</Link>
          </nav>
        </div>
        <div className="mt-6 text-xs text-gray-500">© {new Date().getFullYear()} LeadSnipper Technologies. All rights reserved.</div>
      </div>
    </footer>
  );
}

