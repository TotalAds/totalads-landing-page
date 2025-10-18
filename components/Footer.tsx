import Link from "next/link";

import LeadSnipperLogo from "./ui/LeadSnipperLogo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className=" p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                <LeadSnipperLogo className="h-6 w-6 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                LeadSnipper
              </span>
            </div>
            <p className="text-slate-400 mb-4 leading-relaxed text-sm">
              Sales Intelligence Engine that turns websites into complete
              company profiles with verified contacts, ICP fit, and next‑best
              actions — built for go‑to‑market teams and developers.
            </p>
            <div className="flex space-x-3">
              {/* <motion.div
                    className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300 cursor-pointer border border-purple-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Users className="w-4 h-4 text-purple-400" />
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/30 transition-all duration-300 cursor-pointer border border-pink-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageSquare className="w-4 h-4 text-pink-400" />
                  </motion.div>
                  <motion.div
                    className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-all duration-300 cursor-pointer border border-blue-500/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-blue-400 text-xs font-bold">𝕏</span>
                  </motion.div> */}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 text-purple-400">
              🚀 Product
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-purple-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-purple-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pricing
                </a>
              </li>
              {/* <li>
                    <a
                      href="#api"
                      className="hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Docs
                    </a>
                  </li> */}
              {/* <li>
                    <a
                      href="#integrations"
                      className="hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Integrations
                    </a>
                  </li> */}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 text-pink-400">
              🏢 Company
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {/* <li>
                    <a
                      href="#about"
                      className="hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      About Us
                    </a>
                  </li>/*}
                  {/* <li>
                    <a
                      href="#blog"
                      className="hover:text-pink-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Blog
                    </a>
                  </li> */}
              <li>
                <a
                  href="mailto:rehan@leadsnipper.com"
                  className="hover:text-pink-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Careers
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-pink-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-pink-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-base mb-4 text-blue-400">
              💬 Support
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {/* <li>
                    <a
                      href="#help"
                      className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#docs"
                      className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      Documentation
                    </a>
                  </li> */}
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-blue-400 transition-colors duration-300 flex items-center group"
                >
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-xs text-slate-400">
              <span>&copy; 2025 LeadSnipper. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <span>Built with</span>
                <span className="text-red-400">♥</span>
                <span>for developers</span>
              </div>

              <div className="flex items-center space-x-2 bg-slate-800/50 rounded-full px-3 py-1 border border-slate-700/50">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span className="text-xs text-slate-400">API v2.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
