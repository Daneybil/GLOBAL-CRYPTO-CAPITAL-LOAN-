/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldAlert, Flame, Cpu, Award } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#060c1d] to-[#040915] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb indicator */}
        <div className="flex items-center space-x-2 text-xs font-mono mb-6 text-slate-500">
          <span>Home</span>
          <span>/</span>
          <span className="text-amber-400 font-bold">About Institution</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase font-bold block">
              Established 2021
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
              Who We Are & Why We Exist
            </h2>
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed font-light">
              Global Crypto Capital Loan was established with a singular focus: to build the world's most resilient and trustworthy non-dilutive digital asset credit facility. For years, crypto innovators, startup founders, and high-volume traders have faced a difficult choice: sell their core tokens to fund operations—triggering costly tax events—or work with predatory high-interest lenders.
            </p>
            <p className="text-slate-400 font-sans text-xs sm:text-sm leading-relaxed font-light">
              We eliminated this compromise. By integrating professional, audited custodial providers with algorithmic multi-sig smart vaults, we let individuals and corporations secure immediate credit lines at a flat 5.5% APR interest fee based strictly on their deposited collateral.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 text-xs font-sans">
              <div className="border border-slate-900 bg-slate-1000 p-4 rounded-xl">
                <span className="text-[10px] font-mono text-amber-400 block uppercase font-bold">SEC Compliant Escrow</span>
                <p className="text-slate-400 text-[11px] mt-1 font-light leading-relaxed">All digital collateral undergoes strict KYC / AML review matching SEC rules.</p>
              </div>
              <div className="border border-slate-900 bg-slate-1000 p-4 rounded-xl">
                <span className="text-[10px] font-mono text-amber-400 block uppercase font-bold">Auditable Reserves</span>
                <p className="text-slate-400 text-[11px] mt-1 font-light leading-relaxed">Proof of reserves is logged publicly via decentralized oracles.</p>
              </div>
            </div>
          </div>

          {/* Right Pillar Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-amber-500/20 bg-slate-950 p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <h4 className="text-white font-sans font-extrabold text-sm uppercase tracking-wider flex items-center space-x-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Our Trust Foundations</span>
              </h4>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <span className="w-2 h-2 rounded-full bg-amber-450 mt-1.5 shrink-0" />
                  <p className="text-slate-350 text-xs font-light leading-relaxed">
                    <strong>Comprehensive Liability Coverage:</strong> Our institutional partners insure client collateral against multi-sig contract errors up to $500,000,000 via tier-1 syndicates.
                  </p>
                </div>

                <div className="flex items-start space-x-3.5">
                  <span className="w-2 h-2 rounded-full bg-amber-450 mt-1.5 shrink-0" />
                  <p className="text-slate-350 text-xs font-light leading-relaxed">
                    <strong>Zero Re-hypothecation:</strong> Unlike retail yields programs, your deposited collateral sits dormant in audited vault addresses. Not a single token is lent out or used as leverage.
                  </p>
                </div>

                <div className="flex items-start space-x-3.5">
                  <span className="w-2 h-2 rounded-full bg-amber-450 mt-1.5 shrink-0" />
                  <p className="text-slate-350 text-xs font-light leading-relaxed">
                    <strong>Transparent Liquidation Guidelines:</strong> Our 50% LTV threshold has built-in margin warnings, giving users 24 hours to re-collateralize in periods of extreme volatility.
                  </p>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="pt-4 border-t border-slate-800 text-slate-500 font-mono text-[9px] uppercase tracking-widest text-center">
                Institutional Credibility Guaranteed
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
