/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { DollarSign, Percent, Calendar, ShieldCheck, RefreshCw, ArrowRight, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

interface Asset {
  name: string;
  symbol: string;
  priceUsd: number;
}

interface CalculatorSectionProps {
  assets: Asset[];
  initialLoanAmount?: number;
  selectedAssetSymbol?: string;
  repaymentDuration?: number;
  onApplyForLoan?: (amount: number, assetSymbol: string, duration: number) => void;
  isApiLoading?: boolean;
}

export default function CalculatorSection({
  assets,
  initialLoanAmount = 25000,
  selectedAssetSymbol = "BTC",
  repaymentDuration = 12,
  onApplyForLoan,
  isApiLoading = false,
}: CalculatorSectionProps) {
  const [loanAmount, setLoanAmount] = useState<number>(initialLoanAmount);
  const [selectedSymbol, setSelectedSymbol] = useState<string>(selectedAssetSymbol);
  const [duration, setDuration] = useState<number>(repaymentDuration);

  // Sync state with prefill changes
  useEffect(() => {
    if (initialLoanAmount) setLoanAmount(initialLoanAmount);
    if (selectedAssetSymbol) setSelectedSymbol(selectedAssetSymbol);
    if (repaymentDuration) setDuration(repaymentDuration);
  }, [initialLoanAmount, selectedAssetSymbol, repaymentDuration]);

  // Find active asset price from list
  const activeAsset = assets.find((a) => a.symbol === selectedSymbol);
  const activePrice = activeAsset ? activeAsset.priceUsd : 1.0;

  // Output calculations matching precise USER requirements:
  // - Collateral Required is EXACTLY 50% of the borrowed amount (Refundable)
  const collateralValueUsd = loanAmount * 0.50;
  const collateralAssetQty = !!activePrice ? (collateralValueUsd / activePrice) : 0;

  // - Dynamic Interest Pricing tiers:
  //   - Repay the loan before one year or one year maximum (12 months or less): 25% interest (Flat)
  //   - Holding for more than one year (over 12 months): 35% interest (Flat)
  let interestApr = 25.00;
  let durationCategory = "1 Year Maximum (Short-Term)";
  let formulaExplanation = "Interest rate is flat 25% for loans of 1 year maximum or less";

  if (duration > 12) {
    interestApr = 35.00;
    durationCategory = "More than 1 Year (Long-Term)";
    formulaExplanation = "Interest rate is flat 35% for long-term loans holding more than 1 year";
  }

  // Compute calculated simple interest, fees, and overall totals
  const totalInterest = loanAmount * (interestApr / 100);
  const organizationalFee = loanAmount * 0.02; // Organizational fee is exactly 2% (Non-refundable)
  const totalRequiredPayment = loanAmount + totalInterest; // Repayment of principal and interest
  const estimatedMonthly = totalRequiredPayment / duration;

  // Calculate estimated due date based on target offset
  const getEstimatedDueDate = (monthsCount: number) => {
    const baseDate = new Date("2026-05-29");
    baseDate.setMonth(baseDate.getMonth() + monthsCount);
    return baseDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formattedDueDate = getEstimatedDueDate(duration);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onApplyForLoan) {
      onApplyForLoan(loanAmount, selectedSymbol, duration);
    }
  };

  return (
    <section className="py-16 bg-transparent border-t border-b border-[#1e293b]/40 relative z-10" id="calculator-section">
      
      {/* Decorative light radial glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#0284c7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card left: Input parameters */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-900 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl backdrop-blur-md hover:border-amber-500/10 transition-all duration-300">
            <div>
              <h3 className="text-white font-display font-bold text-lg mb-6 border-b border-slate-900 pb-3 uppercase tracking-wider">
                Model Your Loan Parameters
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Asset Selection */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 font-bold">
                    <label htmlFor="asset-select" className="uppercase">Choose Collateral Asset</label>
                    {isApiLoading ? (
                      <span className="flex items-center space-x-1 text-amber-400">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        <span>Syncing Oracles...</span>
                      </span>
                    ) : (
                      <span className="text-emerald-400">● Live Oracle Rates Connected</span>
                    )}
                  </div>
                  <div className="relative">
                    <select
                      id="asset-select"
                      value={selectedSymbol}
                      onChange={(e) => setSelectedSymbol(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-slate-900 border border-slate-850 text-white font-sans text-sm focus:outline-none focus:border-amber-400 focus:bg-slate-950 transition appearance-none cursor-pointer font-bold"
                    >
                      {assets.map((asset) => (
                        <option key={asset.symbol} value={asset.symbol} className="bg-slate-950 text-white">
                          {asset.name} ({asset.symbol}) — Oracle reference: ${asset.priceUsd ? asset.priceUsd.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "1.00"}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Borrowed Sum requested */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 font-bold">
                    <label htmlFor="amount-input" className="uppercase">Loan Amount Requested (USD)</label>
                    <span className="text-white font-black text-sm bg-slate-900 px-3 py-1 rounded-lg border border-slate-850">
                      ${loanAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <DollarSign className="w-4 h-4 text-amber-400" />
                    </div>
                    <input
                      id="amount-input"
                      type="number"
                      min="200"
                      max="1000000000"
                      placeholder="Enter USD value"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value) || 0)}
                      className="w-full h-12 pl-10 pr-4 rounded-xl bg-slate-900 border border-slate-850 text-white font-sans text-sm font-bold focus:outline-none focus:border-amber-400 focus:bg-slate-950 transition"
                    />
                  </div>
                  {/* Sliders for rapid pricing checks */}
                  <div className="pt-2">
                    <input
                      id="amount-range"
                      type="range"
                      min="1000"
                      max="2000000"
                      step="5000"
                      value={loanAmount > 2000000 ? 2000000 : loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1 uppercase font-bold">
                      <span>Retail ($1K)</span>
                      <span>Mid-Tier ($1M)</span>
                      <span>Institutional ($2M)</span>
                    </div>
                  </div>
                </div>

                {/* Duration select */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400 font-bold">
                    <label htmlFor="duration-slider" className="uppercase">Repayment Duration</label>
                    <span className="text-amber-400 font-black text-xs bg-amber-550/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                      {duration} Months ({Math.round(duration/12 * 10) / 10} Years)
                    </span>
                  </div>
                  <div className="relative">
                    <input
                      id="duration-slider"
                      type="range"
                      min="3"
                      max="48"
                      step="1"
                      value={duration}
                      onChange={(e) => setDuration(Number(e.target.value))}
                      className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1 uppercase font-bold">
                      <span>Min (3m)</span>
                      <span>1 Yr (12m)</span>
                      <span>2 Yr (24m)</span>
                      <span>3 Yr (36m)</span>
                      <span>Max (48m)</span>
                    </div>
                  </div>
                </div>

                {/* High value alerts */}
                {loanAmount >= 100000 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 rounded-xl bg-amber-950/25 border border-amber-550/20 space-y-1 text-left"
                  >
                    <h4 className="text-white font-extrabold text-xs uppercase flex items-center space-x-1.5">
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                      <span>Dedicated Advisor Clearance Required</span>
                    </h4>
                    <p className="text-slate-300 text-xs font-light leading-relaxed">
                      Note: High-value allocations exceeding <strong>$100,000 USD</strong> require standard Tier-3 KYC credentials and formal digital validation. After submission, our dedicated credit team will process clearance.
                    </p>
                  </motion.div>
                )}

                {/* Apply Button */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-[#cca352] via-[#e5c15e] to-[#bf9d3a] text-slate-950 font-sans font-extrabold text-xs uppercase tracking-wider transition-all duration-150 flex items-center justify-center space-x-2 shadow-md shadow-amber-500/15 cursor-pointer mt-6"
                >
                  <span>Initiate Onboarding Pipeline</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>
              </form>
            </div>
          </div>

          {/* Card right: Mathematical estimations */}
          <div className="lg:col-span-6 rounded-3xl border border-slate-900 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-md hover:border-amber-500/10 transition-all duration-300 relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-black">Lending Analytics Matrix</span>
                  <h3 className="text-white font-display font-extrabold text-base mt-0.5 uppercase tracking-wide">Amortization Details</h3>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono text-slate-500 uppercase block font-bold">ORACLE REFERENCE</span>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    1 {selectedSymbol} ≈ ${activePrice ? activePrice.toLocaleString(undefined, { minimumFractionDigits: 2 }) : "1.00"}
                  </span>
                </div>
              </div>

              {/* Data Rows */}
              <div className="space-y-4">
                
                {/* Principal */}
                <div className="flex justify-between items-center text-sm border-b border-slate-900 pb-2">
                  <span className="text-slate-350 font-medium font-sans">Principal Loan Requested</span>
                  <span className="text-white font-mono font-black text-sm">
                    ${loanAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>

                {/* Collateral required - THE ABSOLUTE HIGHLIGHT */}
                <div className="p-4 rounded-2xl bg-amber-550/5 border border-amber-500/20 text-left">
                  <div className="flex justify-between items-center text-sm mb-1">
                    <span className="text-white font-black flex items-center space-x-1.5 uppercase text-xs">
                      <span className="p-1.5 bg-amber-500/10 rounded text-amber-400 font-mono font-bold">🔒 Refundable Collateral (50%)</span>
                    </span>
                    <span className="text-amber-300 font-mono font-black text-sm">
                      {collateralAssetQty.toLocaleString(undefined, { minimumFractionDigits: 5 })} {selectedSymbol}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase font-bold">
                    <span>100% Fully Refundable Deposit Value</span>
                    <span className="text-slate-200 font-black">${collateralValueUsd.toLocaleString(undefined, { minimumFractionDigits: 2 })} USD</span>
                  </div>
                  <p className="text-[10px] text-slate-400 font-sans mt-2 leading-relaxed">
                    ℹ️ This collateral deposit is held securely by smart contracts and is <strong>fully refunded</strong> to your address automatically upon repayment of the loan principal.
                  </p>
                </div>

                {/* APR Tier */}
                <div className="flex justify-between items-center text-sm border-b border-slate-900 pb-2">
                  <div className="flex flex-col text-left">
                    <span className="text-slate-350 font-medium font-sans">Pricing Scheme Rate (APR)</span>
                    <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-wide">{durationCategory}</span>
                  </div>
                  <span className="text-emerald-400 font-mono font-black text-sm">
                    {interestApr.toFixed(2)}% Flat Interest
                  </span>
                </div>

                {/* Formula note */}
                <p className="text-[10px] font-mono text-slate-500 italic text-left -mt-2">
                  * {formulaExplanation}
                </p>

                {/* Accumulated interest */}
                <div className="flex justify-between items-center text-sm border-b border-slate-900 pb-2">
                  <span className="text-slate-350 font-medium font-sans pt-1">Accumulated Interest Over {duration} Months</span>
                  <span className="text-emerald-400 font-mono font-bold">
                    +${totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>

                {/* Organizational Fee */}
                <div className="flex justify-between items-center text-sm border-b border-slate-900 pb-2">
                  <div className="flex flex-col text-left">
                    <span className="text-slate-350 font-medium font-sans">Organizational Fee (2.00%)</span>
                    <span className="text-[9px] text-amber-400 font-mono font-bold uppercase">Non-refundable administrative fee</span>
                  </div>
                  <span className="text-white font-mono font-bold">
                    ${organizationalFee.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </span>
                </div>

                {/* Total Upfront Funding Requirement */}
                <div className="p-3 bg-slate-900 rounded-xl border border-slate-850 text-left text-xs text-slate-300 font-medium space-y-1">
                  <div className="flex justify-between">
                    <span>Total Upfront Smart Contract Payment:</span>
                    <strong className="text-white font-mono">${(collateralValueUsd + organizationalFee).toLocaleString(undefined, { minimumFractionDigits: 2 })} USD</strong>
                  </div>
                  <p className="text-[9px] text-slate-400 font-sans leading-normal">
                    (Includes <strong>${collateralValueUsd.toLocaleString()} (50% Refundable)</strong> and <strong>${organizationalFee.toLocaleString()} (2% Non-Refundable fee for company)</strong>).
                  </p>
                </div>

                {/* Monthly estimate */}
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex justify-between items-center">
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-emerald-400 block uppercase font-bold">Estimated Monthly Repayment</span>
                    <span className="text-lg font-black text-white font-mono mt-0.5 block">
                      ${estimatedMonthly.toLocaleString(undefined, { minimumFractionDigits: 2 })} <span className="text-xs text-slate-400 font-bold">/ mo</span>
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-slate-450 block uppercase font-bold">Pricing Model</span>
                    <span className="text-xs font-black text-emerald-400 block font-mono">Bilateral Pool</span>
                  </div>
                </div>

                {/* Estimated Maturity date */}
                <div className="flex items-center space-x-2 text-xs text-slate-450 pt-1 font-bold text-left">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <span>Estimated Full Maturity Date:</span>
                  <span className="text-amber-400 font-mono font-black">{formattedDueDate}</span>
                </div>

              </div>
            </div>

            {/* Disclaimer disclaimer */}
            <div className="mt-6 pt-4 border-t border-slate-900 text-[10px] text-slate-400 flex items-start space-x-2 leading-relaxed text-left font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                Agreement projections are based on real-time decentralized oracle arrays. The security collateral represents exactly 50% of your total loan principal and is 100% refundable upon full principal repayment. The organizational fee is exactly 2% and is non-refundable, which supports administrative clearance on the protocol ledger.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
