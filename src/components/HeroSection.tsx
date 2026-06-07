/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ActiveTab } from "../types";
import { motion } from "motion/react";
import { Shield, ChevronRight, Lock, TrendingUp, Cpu } from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: () => void; // Request Funding
  onSecondaryClick: () => void; // Learn How It Works
}

export default function HeroSection({
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 lg:pt-48 lg:pb-36 bg-transparent">
      {/* Decorative Premium Overlay Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#0284c7]/20 to-transparent blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-radial from-[#38bdf8]/10 to-transparent blur-2xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Elements */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wide uppercase"
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Global Liquidity & Lending Institution</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Global Capital For <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-white">
                Traders, Investors, <br />
                Businesses & Web3 Innovators
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-300 font-sans text-base sm:text-lg leading-relaxed max-w-2xl font-light"
            >
              Global Crypto Capital Loan provides access to capital for cryptocurrency traders, forex traders, investors, entrepreneurs, startups, Web3 founders, blockchain developers, liquidity providers, and institutional clients worldwide.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed max-w-xl border-l-2 border-amber-500/50 pl-4 py-1.5"
            >
              Our mission is to remove unnecessary financial barriers and provide access to funding through a streamlined digital lending experience designed for the modern global economy.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <button
                onClick={onPrimaryClick}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#cca352] via-[#e5c15e] to-[#bf9d3a] text-slate-950 font-sans font-extrabold text-sm tracking-wide uppercase hover:scale-[1.02] shadow-xl shadow-amber-550/10 hover:shadow-amber-500/25 transition-all duration-200 text-center"
              >
                Request Funding
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-amber-500/50 bg-slate-800/10 hover:bg-slate-800/30 text-slate-200 hover:text-white font-sans font-bold text-sm tracking-wide uppercase transition-all duration-200 text-center flex items-center justify-center space-x-2"
              >
                <span>Learn How It Works</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>
            </motion.div>
          </div>

          {/* Right Aesthetic Block containing Fintech Data Visualization Mockup */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[420px] rounded-3xl border border-amber-500/20 bg-slate-950/90 p-6 shadow-2xl backdrop-blur-lg"
            >
              <div className="absolute -top-3 -right-3 p-2 rounded-lg bg-[rgba(212,175,55,0.15)] border border-amber-400/20 text-amber-400">
                <Lock className="w-4 h-4" />
              </div>

              {/* Graphic Title */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-mono tracking-wider text-amber-400 uppercase block font-semibold">
                    UNDERWRITING OFFICE
                  </span>
                  <h3 className="text-white font-display font-medium text-lg mt-0.5">
                    Global Order Locator
                  </h3>
                </div>
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>

              {/* Numbers */}
              <div className="space-y-5">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-500/10">
                  <span className="text-[10px] font-mono text-amber-500 uppercase block tracking-wider font-semibold">
                    INSTITUTIONAL LIQUIDITY POOL
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display block mt-1 tracking-tight">
                    $1,482,900,250.00
                  </span>
                  <div className="flex items-center space-x-1.5 text-[10px] text-emerald-400 font-mono mt-1.5 font-semibold">
                    <span>▪ Live Pool State: Operational</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#050b18] p-3 rounded-lg border border-slate-900">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">
                      Collateral Ratio
                    </span>
                    <span className="text-base font-bold text-amber-400 font-mono block mt-0.5">
                      50% Collateral
                    </span>
                  </div>
                  <div className="bg-[#050b18] p-3 rounded-lg border border-slate-900">
                    <span className="text-[9px] font-mono text-slate-500 uppercase">
                      Audited Contracts
                    </span>
                    <span className="text-base font-bold text-amber-400 font-mono block mt-0.5">
                      100% Secure
                    </span>
                  </div>
                </div>

                {/* Real-time progress metric indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-slate-400">
                    <span>Aggregate Loan Release Speed</span>
                    <span className="text-amber-450 text-[#38bdf8] text-amber-400">≤ 3.5 Minutes</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Bottom security assurance */}
              <div className="text-center pt-4 border-t border-slate-850 mt-5 flex items-center justify-center space-x-2 text-[10px] text-slate-500 font-mono">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                <span>Fully Non-Custodial Smart Escalation</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
