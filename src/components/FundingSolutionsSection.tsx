/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Landmark, User, Zap, Building2, Globe, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface FundingSolutionsSectionProps {
  onRequestFunding: (tierAmount: number) => void;
}

export default function FundingSolutionsSection({
  onRequestFunding,
}: FundingSolutionsSectionProps) {
  const tiers = [
    {
      level: "$200 – $250,000",
      title: "Retail Trader & Builder Tier",
      category: "RETAIL SOLUTIONS",
      icon: <User className="w-5 h-5 text-amber-400" />,
      tag: "Self-Serve Instant",
      requirements: [
        "LTV ratio is fixed robustly at 50%",
        "Fully automated smart contract custody",
        "Instant approval upon KYC clearance",
        "Flexible repayment (3–36 months)",
      ],
      ctaText: "Request Retail Funding",
      amountValue: 125000, // median value for fast integration in input
      description: "Designed for day-traders, builders, and individual crypto enthusiasts looking to maximize their active positions with extreme ease.",
    },
    {
      level: "$250,000 – $1,000,000",
      title: "Commercial & Pro Startup Tier",
      category: "ENTERPRISE PROTOCOLS",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      tag: "Priority Fasttrack",
      requirements: [
        "Available for Web3 startups and SME's",
        "Enhanced security multi-sig escrow setup",
        "Fast-tracked compliance processing (≤1h)",
        "Direct client assistance from senior lending desk",
      ],
      ctaText: "Request Startup Capital",
      amountValue: 500000,
      description: "Optimized for operating liquidity, payroll, and infrastructure development without forcing treasury liquidations or structural dilution.",
    },
    {
      level: "$1,000,000 – $3,000,000",
      title: "Institutional Wealth & Treasury",
      category: "INSTITUTIONAL GRADE",
      icon: <Building2 className="w-5 h-5 text-amber-400" />,
      tag: "Bespoke Liquidity Desk",
      requirements: [
        "Premium low origination options (Custom)",
        "Dedicated corporate liquidity officer",
        "Cross-collateral and flexible yield options",
        "Custom master loan parameters (ISDA)",
      ],
      ctaText: "Establish Institutional Line",
      amountValue: 2000000,
      description: "Crafted specifically for DeFi protocols, VC funds, OTC desks, and high-frequency trading groups requiring customized risk structures.",
    },
    {
      level: "$3,000,000 – $1,000,000,000",
      title: "Sovereign Wealth & Mega Liquidity",
      category: "SOVEREIGN CAPITAL",
      icon: <Globe className="w-5 h-5 text-amber-400" />,
      tag: "Bilateral Credit",
      requirements: [
        "Bilateral custom collateral agreements",
        "Off-exchange custody partnerships (Fireblocks, Anchorage)",
        "White-glove legal and structure support",
        "Dynamic multi-asset leverage pools",
      ],
      ctaText: "Contact Credit Board",
      amountValue: 50000000,
      description: "Engineered specifically for sovereign funds, multi-billion dollar holdings, central treasuries, and public company balance sheet optimization.",
    },
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      
      {/* Visual background accents */}
      <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase font-bold">
            Structured Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Funding Designed For Growth
          </h2>
          <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light">
            Users can apply for crypto-backed funding through a structured digital lending process. From retail accounts looking for short-term operational leverage to multi-billion dollar sovereign funds optimizing liquidity, we serve the full spectrum of global markets.
          </p>
        </div>

        {/* Level Highlights with custom badges showing retail & institutional client separation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, borderColor: "rgba(214, 182, 110, 0.4)" }}
              className={`rounded-2xl border bg-slate-950 p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 ${
                index >= 2 
                  ? "border-amber-500/20 bg-radial from-slate-950 to-[#060c1d]" 
                  : "border-slate-900"
              }`}
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-mono tracking-wider font-semibold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full uppercase">
                    {tier.category}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 uppercase">
                    {tier.tag}
                  </span>
                </div>

                <div className="flex items-center space-x-2.5 mb-3">
                  <div className="p-1.5 rounded-lg bg-amber-500/15 border border-amber-500/20 text-amber-400">
                    {tier.icon}
                  </div>
                  <h4 className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
                    {tier.title}
                  </h4>
                </div>

                {/* Amount Tier */}
                <div className="py-4 border-y border-slate-900 my-4">
                  <div className="text-[10px] font-mono text-slate-500 uppercase">Authorized Funding Span</div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-amber-300 tracking-tight mt-0.5">
                    {tier.level}
                  </div>
                </div>

                <p className="text-slate-400 font-sans text-xs leading-relaxed mb-6 font-light">
                  {tier.description}
                </p>

                {/* Bullet parameters */}
                <ul className="space-y-2 mb-8">
                  {tier.requirements.map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2 text-slate-400 text-[11px] leading-tight font-light">
                      <span className="text-amber-400 mt-1 shrink-0">▪</span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activation Trigger */}
              <button
                onClick={() => onRequestFunding(tier.amountValue)}
                className={`w-full py-2.5 rounded-lg font-sans text-xs font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  index >= 2
                    ? "bg-gradient-to-r from-[#cca352] to-[#bf9d3a] hover:from-[#d4af37] text-slate-950 shadow-lg shadow-amber-500/10"
                    : "border border-slate-800 bg-slate-900/10 text-slate-300 hover:text-white hover:border-amber-500/40"
                }`}
              >
                {tier.ctaText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Global Assurance Banner */}
        <div className="mt-16 rounded-2xl border border-slate-900 bg-slate-950 p-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 text-left">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="font-display font-semibold text-xs text-white uppercase tracking-wider">
                Audited & Secured Lending Operations
              </p>
              <p className="text-slate-400 font-sans text-xs leading-relaxed mt-0.5 font-light">
                All retail, startup, and institutional client contracts operate with independent multi-sig vaults, secured with SOC2 Type II asset storage parameters.
              </p>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest bg-slate-950 px-4 py-2 border border-slate-900 rounded-lg">
            Compliance Secured
          </div>
        </div>

      </div>
    </section>
  );
}
