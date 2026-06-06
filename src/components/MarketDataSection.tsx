/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { CryptoAsset } from "../types";
import { TrendingUp, TrendingDown, Layers, Award, Radio, RefreshCcw } from "lucide-react";
import { motion } from "motion/react";

interface MarketDataSectionProps {
  assets: CryptoAsset[];
  onSelectAsset?: (symbol: string) => void;
  onRefresh?: () => void;
  isRefreshing?: boolean;
  lastUpdated?: string;
}

export default function MarketDataSection({
  assets,
  onSelectAsset,
  onRefresh,
  isRefreshing = false,
  lastUpdated = "Just now",
}: MarketDataSectionProps) {
  
  // Custom custom visual identifier circles/logos for each coin to make it extremely premium
  const renderLogo = (symbol: string) => {
    switch (symbol) {
      case "BTC":
        return (
          <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center font-bold font-mono text-sm shadow-md shadow-amber-500/5">
            ₿
          </div>
        );
      case "ETH":
        return (
          <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold font-mono text-sm shadow-md shadow-indigo-500/5">
            Ξ
          </div>
        );
      case "USDT":
        return (
          <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold font-mono text-sm shadow-md shadow-emerald-500/5">
            ₮
          </div>
        );
      case "BNB":
        return (
          <div className="w-10 h-10 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 flex items-center justify-center font-bold font-mono text-sm shadow-md shadow-yellow-400/5">
            B
          </div>
        );
      case "SOL":
        return (
          <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold font-mono text-sm shadow-md shadow-purple-500/5">
            S
          </div>
        );
      case "MATIC":
        return (
          <div className="w-10 h-10 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-400 flex items-center justify-center font-bold font-mono text-sm shadow-md shadow-indigo-600/5">
            M
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-bold font-mono text-sm">
            C
          </div>
        );
    }
  };

  return (
    <section className="py-24 bg-[#050b18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="text-left space-y-3">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-bold flex items-center space-x-1.5">
              <Radio className="w-3.5 h-3.5 text-[#38bdf8] animate-pulse" />
              <span>LIVE ORACLE PRICING</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-white">
              Institutional Supported Collateral
            </h2>
            <p className="text-slate-400 font-sans text-xs sm:text-sm max-w-2xl font-light">
              We aggregate live prices of highly liquid blue-chip blockchain economies directly from CoinGecko, CoinMarketCap, and Chainlink nodes to govern loan-to-value limits securely.
            </p>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <div className="text-right hidden sm:block">
              <p className="text-[9px] font-mono text-slate-500 uppercase">Live Pipeline State</p>
              <p className="text-xs font-mono text-slate-300 font-medium">Refreshed: {lastUpdated}</p>
            </div>
            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              className="p-3 rounded-xl border border-slate-800 bg-[#091124] hover:bg-slate-850 text-slate-300 hover:text-white transition duration-200 cursor-pointer disabled:opacity-50"
            >
              <RefreshCcw className={`w-4 h-4 ${isRefreshing ? "animate-spin text-sky-400" : ""}`} />
            </button>
          </div>
        </div>

        {/* Large Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assets.map((asset) => {
            const isNegative = asset.change24h < 0;
            return (
              <motion.div
                key={asset.id}
                whileHover={{ y: -5, borderColor: "rgba(56, 189, 248, 0.25)" }}
                onClick={() => onSelectAsset && onSelectAsset(asset.symbol)}
                className="rounded-2xl border border-slate-800 bg-[#091124] p-6 hover:shadow-2xl hover:shadow-sky-500/5 transition-all duration-200 text-left flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  {/* Card head: Logo + Name Info */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3.5">
                      {renderLogo(asset.symbol)}
                      <div>
                        <h4 className="text-white font-sans font-extrabold text-sm tracking-wide">
                          {asset.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                          {asset.symbol}
                        </span>
                      </div>
                    </div>

                    <span className="text-[9px] font-mono bg-slate-950 px-2.5 py-1 rounded-full border border-slate-900 text-[#38bdf8]">
                      50% LTV Vault
                    </span>
                  </div>

                  {/* Pricing Output */}
                  <div className="space-y-1 py-4 border-y border-slate-900 my-4">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide">Price USD</span>
                    <div className="flex items-baseline justify-between">
                      <span className="text-2xl font-mono font-bold text-white tracking-tight">
                        ${asset.priceUsd ? asset.priceUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 }) : "1.00"}
                      </span>
                      <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                        isNegative ? "bg-rose-500/10 text-rose-400" : "bg-emerald-500/10 text-emerald-400"
                      }`}>
                        {isNegative ? <TrendingDown className="w-2.5 h-2.5" /> : <TrendingUp className="w-2.5 h-2.5" />}
                        <span>{isNegative ? "" : "+"}{asset.change24h.toFixed(2)}%</span>
                      </span>
                    </div>
                  </div>

                  {/* Extra statistics */}
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono py-2">
                    <div>
                      <span className="text-slate-500 text-[9px] uppercase tracking-wide block">Market Cap</span>
                      <span className="text-slate-200 font-semibold block mt-0.5">
                        ${(asset.marketCap / 1e9).toFixed(2)}B
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[9px] uppercase tracking-wide block">24h Vol (Est)</span>
                      <span className="text-slate-200 font-semibold block mt-0.5">
                        ${asset.volume24h ? (asset.volume24h / 1e9).toFixed(2) : (asset.marketCap * 0.12 / 1e9).toFixed(2)}B
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-900 flex justify-between items-center text-[10px] text-[#38bdf8] font-mono font-bold tracking-wider uppercase group-hover:text-white transition-colors">
                  <span>Simulate in calculator</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Oracle Architecture Notice */}
        <div className="mt-14 p-5 rounded-xl border border-slate-800 bg-[#091124]/30 flex flex-col sm:flex-row items-center justify-between text-left space-y-4 sm:space-y-0">
          <p className="font-sans text-xs text-slate-400 max-w-2xl font-light">
            <strong>System Safeguard:</strong> All price feeds operate with a 15-second heart-beat configuration. If any single data pipeline displays high variance (&gt; 2%), credit validation modules pause automatic collateral acceptance until multi-source consensus is re-established.
          </p>
          <div className="flex items-center space-x-1.5 text-xs font-mono font-semibold text-emerald-400 shrink-0">
            <Layers className="w-4 h-4 text-emerald-400" />
            <span>Chainlink Decimals: OK</span>
          </div>
        </div>

      </div>
    </section>
  );
}
