/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CheckCircle2, UserCheck, ShieldAlert, Award, Compass, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";

export default function MissionSection() {
  const targetAudiences = [
    { title: "Crypto Traders", desc: "Maximize leverage and capture market alpha without selling underlying long positions." },
    { title: "Forex Traders", desc: "Access high-frequency global currency capital with zero slippage rules." },
    { title: "Investors & VCs", desc: "Instantly unlock asset liquidity to invest in concurrent emerging opportunities." },
    { title: "Entrepreneurs", desc: "Bridge liquidity gaps and power operational growth cycles without giving up equity." },
    { title: "Business Owners", desc: "Boost working capital flow using secure global crypto credit facilities." },
    { title: "Startups & Scaleups", desc: "Secure fast operational runway funding through non-dilutive solutions." },
    { title: "Web3 Founders", desc: "Fund development teams and ecosystem rewards without treasury liquidation." },
    { title: "Blockchain Developers", desc: "Access essential micro-bounties and testnet sandbox hosting capital." },
    { title: "Cryptocurrency Projects", desc: "Gain short-term operating capital backed by secure treasury assets." },
    { title: "DeFi Protocols", desc: "Support smart-contract upgrades and native token liquidity pools." },
    { title: "Liquidity Providers", desc: "Manage yield farm arbitrage and cross-chain balances using backup margins." },
    { title: "Institutional Clients", desc: "Deploy massive leverage pools ($3M to $1B) utilizing bespoke master agreements." },
  ];

  const businessGoals = [
    { label: "Grow their businesses", color: "text-sky-400" },
    { label: "Expand investments", color: "text-sky-450" },
    { label: "Increase trading capital", color: "text-sky-400" },
    { label: "Launch blockchain projects", color: "text-[#38bdf8]" },
    { label: "Provide market liquidity", color: "text-sky-400" },
    { label: "Scale global operations", color: "text-sky-450" },
    { label: "Access new financial opportunities", color: "text-white" },
  ];

  return (
    <section className="py-24 bg-transparent border-y border-[#1e293b]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.2em] text-amber-400 uppercase font-bold">
            Corporate Statement
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white mb-4">
            Why Global Crypto Capital Loan Exists
          </h2>
          <p className="text-slate-300 font-sans text-base leading-relaxed font-light">
            Global Crypto Capital Loan was created to help individuals and organizations access funding opportunities faster and more efficiently. We engineered a secure pipeline where digital assets are locked in pristine vault custody to unlock non-dilutive global capital immediately.
          </p>
        </div>

        {/* Layout: Audiences vs Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Target Audiences Grid */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="text-white font-display font-bold text-lg border-l-4 border-amber-500 pl-3">
              A Platform Engineered For Global Builders & Traders
            </h3>
            <p className="text-slate-400 font-sans text-xs -mt-3 mb-6 font-light">
              No matter what corner of the global financial economy you occupy, we provide a structured tier for your active needs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {targetAudiences.map((audience, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, borderColor: "rgba(214, 182, 110, 0.4)" }}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-900 hover:bg-[#0d1527] transition-all duration-200"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <h4 className="text-amber-300 font-sans font-bold text-sm">
                      {audience.title}
                    </h4>
                  </div>
                  <p className="text-slate-400 font-sans text-xs leading-relaxed font-light">
                    {audience.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Strategic Goals - Aesthetic Institutional Checklist Card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-3xl border border-amber-500/15 bg-slate-950 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl" />

              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#cca352]">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">Objective Set</span>
                  <h4 className="text-white font-display font-extrabold text-base">
                    Our Operational Goals
                  </h4>
                </div>
              </div>

              <p className="text-slate-300 font-sans text-xs leading-relaxed mb-6 font-light">
                Every policy we draft and contract we verify is designed to help our worldwide partners achieve crucial economic milestones:
              </p>

              {/* Goals list */}
              <div className="space-y-4">
                {businessGoals.map((goal, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="p-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-slate-200 font-sans text-xs font-medium group-hover:text-amber-400 transition-colors">
                      {goal.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust parameters banner inside Card */}
              <div className="mt-8 pt-6 border-t border-slate-900 flex items-center space-x-3 text-[10px] text-slate-500 font-mono">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>Our platform operates under strict zero-equity constraints.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
