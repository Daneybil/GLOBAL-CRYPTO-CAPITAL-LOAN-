/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { User, Wallet, ShieldCheck, Signature, Send, CheckSquare, Coins, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface HowItWorksProps {
  onGetStartedClick?: () => void;
  onModelLiquidityClick?: () => void;
}

export default function HowItWorksSection({
  onGetStartedClick,
  onModelLiquidityClick,
}: HowItWorksProps) {
  const steps = [
    {
      step: 1,
      title: "Connect Your Wallet",
      desc: "Establish a non-custodial multi-sig link with your cold ledger or wallet to start compliance.",
      icon: <Wallet className="w-5 h-5 text-amber-400" />,
    },
    {
      step: 2,
      title: "Identity Verification",
      desc: "Upload clean regulatory document sets (govt pass, utility) to satisfy AML directives.",
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    },
    {
      step: 3,
      title: "Agreement Signing",
      desc: "Digitally sign the Master Bilateral Lending Policy governing the collateral terms.",
      icon: <Signature className="w-5 h-5 text-amber-400" />,
    },
    {
      step: 4,
      title: "Application Submission",
      desc: "Specify exact desired USD amount and choose target token models.",
      icon: <Send className="w-5 h-5 text-amber-400" />,
    },
    {
      step: 5,
      title: "Institutional Approval",
      desc: "Risk boards analyze submitted metadata and automatically lock credit lines (<=12 minutes).",
      icon: <CheckSquare className="w-5 h-5 text-amber-400" />,
    },
    {
      step: 6,
      title: "Collateral Payment",
      desc: "Transfer required 50% LTV crypto assets directly to audited multi-sig vaults.",
      icon: <Coins className="w-5 h-5 text-amber-400" />,
    },
    {
      step: 7,
      title: "Loan Disbursement",
      desc: "Smart contract logic instantly disburses corresponding cash directly to bank or wallet.",
      icon: <ArrowUpRight className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <section className="py-24 bg-transparent border-b border-[#1e293b]/40 text-left relative overflow-hidden">
      
      {/* Decorative vertical thread */}
      <div className="absolute top-1/4 bottom-1/4 left-1/2 -translate-x-1/2 w-0.5 bg-amber-500/10 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-mono mb-6 text-slate-450">
          <span>Home</span>
          <span>/</span>
          <span className="text-amber-400 font-bold">Funding Roadmap</span>
        </div>

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase font-bold block">
            Algorithmic Credit Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white animate-pulse" style={{ animationDuration: "6s" }}>
            How The Funding Process Works
          </h2>
          <p className="text-slate-400 font-sans text-xs sm:text-sm font-light leading-relaxed">
            Our multi-layer automated lending system operates with absolute mechanical precision, guiding traders and corporations through eight clear, fully audited transition steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <motion.div
              key={item.step}
              whileHover={{ y: -4, borderColor: "rgba(214, 182, 110, 0.4)" }}
              className="p-6 rounded-2xl border border-slate-900 bg-slate-950 flex flex-col justify-between hover:bg-[#0d1527] transition duration-200 shadow-xl"
            >
              <div>
                <div className="flex justify-between items-center mb-5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    {item.icon}
                  </div>
                  <span className="text-xl font-mono font-bold text-slate-700">
                    #{String(item.step).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="text-white font-sans font-extrabold text-sm mb-2 uppercase tracking-wider">
                  {item.title}
                </h4>
                <p className="text-slate-400 font-sans text-xs leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              {/* Status footer inside mini card */}
              <div className="pt-4 mt-6 border-t border-slate-900 text-[9px] font-mono text-slate-500 uppercase tracking-wider">
                Pipeline Protocol Verified
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Navigation CTAs linking straight to Active Onboarding Gates */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-950 border border-slate-900 text-center space-y-6 relative max-w-3xl mx-auto overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2">
            <h4 className="text-white font-display font-black text-sm uppercase tracking-wide">
              Roadmap Completed. Ready to Secure Capital?
            </h4>
            <p className="text-slate-400 text-xs font-light max-w-lg mx-auto leading-relaxed">
              Initiate your protected client profile instantly. Your metadata is fully encrypted under certified AES-256 standards.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <button
              onClick={onGetStartedClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#cca352] via-[#e5c15e] to-[#bf9d3a] text-slate-950 font-sans font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/10 cursor-pointer transition"
            >
              Connect Your Wallet Node
            </button>
            <button
              onClick={onModelLiquidityClick}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-slate-900 hover:border-amber-500/40 bg-slate-950/40 text-slate-400 hover:text-amber-400 font-sans font-bold text-xs uppercase tracking-wider cursor-pointer transition"
            >
              Model Loan Parameters
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
