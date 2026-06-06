/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Wallet, CheckCircle, Shield, ArrowRight, ShieldCheck, Activity, Key } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function WalletLogo({ name, className = "w-6 h-6 shrink-0" }: { name: string; className?: string }) {
  const normalizedName = name.toLowerCase();
  if (normalizedName === "metamask") {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,15 15,40 22,72 50,85 78,72 85,40" fill="#E2761B" stroke="#E2761B" strokeWidth="2" strokeLinejoin="round" />
        <polygon points="50,15 45,45 50,85 55,45" fill="#E4761B" />
        <polygon points="15,40 45,45 50,15" fill="#F6851B" />
        <polygon points="85,40 55,45 50,15" fill="#F6851B" />
        <polygon points="15,40 22,72 45,45" fill="#CD6116" />
        <polygon points="85,40 78,72 55,45" fill="#CD6116" />
        <polygon points="45,45 22,72 50,85" fill="#D7C1B1" />
        <polygon points="55,45 78,72 50,85" fill="#D7C1B1" />
        <polygon points="28,52 38,52 35,58" fill="#233447" />
        <polygon points="72,52 62,52 65,58" fill="#233447" />
      </svg>
    );
  }
  if (normalizedName === "trust wallet") {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,15 C25,18 20,25 20,50 C20,72 35,82 50,88 C65,82 80,72 80,50 C80,25 75,18 50,15 Z" fill="#3375BB" />
        <path d="M50,22 C32,25 28,30 28,50 C28,66 39,74 50,79 C61,74 72,66 72,50 C72,30 68,25 50,22 Z" fill="#ffffff" />
        <path d="M50,28 L35,42 L50,56 L65,42 Z" fill="#3375BB" />
      </svg>
    );
  }
  if (normalizedName === "walletconnect") {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22,38 C37,23 63,23 78,38 L85,45 C86,46 86,48 85,49 L75,59 C74,60 72,60 71,59 L64,52 C56,44 44,44 36,52 L29,59 C28,60 26,60 25,59 L15,49 C14,48 14,46 15,45 Z" fill="#3B99FC" />
        <path d="M50,58 L60,68 C61,69 61,71 60,72 L52,80 C51,81 49,81 48,80 L40,72 C39,71 39,69 40,68 Z" fill="#3B99FC" />
      </svg>
    );
  }
  if (normalizedName === "coinbase wallet") {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="70" height="70" rx="18" fill="#0052FF" />
        <circle cx="50" cy="50" r="22" fill="#FFFFFF" />
        <path d="M50,38 L50,62 M38,50 L62,50" stroke="#0052FF" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }
  if (normalizedName.includes("phantom")) {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="70" height="70" rx="35" fill="#AB92F6" />
        <path d="M50,28 C34,28 30,42 30,55 C30,70 36,75 42,75 C45,75 48,72 50,69 C52,72 55,75 58,75 C64,75 70,70 70,55 C70,42 66,28 50,28 Z" fill="#FFFFFF" />
        <circle cx="42" cy="50" r="5" fill="#000000" />
        <circle cx="58" cy="50" r="5" fill="#000000" />
        <circle cx="43.5" cy="48.5" r="1.5" fill="#FFFFFF" />
        <circle cx="59.5" cy="48.5" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12V7H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
      <path d="M3 10V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10" />
    </svg>
  );
}

interface HomepageRegisterSectionProps {
  onAuthSuccess?: (email: string, name: string) => void;
  isLoggedIn?: boolean;
  wallet?: {
    address: string | null;
    status: "disconnected" | "connecting" | "connected";
    balanceEth: number;
  };
  connectWallet?: (walletName?: string) => void;
}

export default function HomepageRegisterSection({
  onAuthSuccess,
  isLoggedIn,
  wallet,
  connectWallet,
}: HomepageRegisterSectionProps) {
  const [connectingWalletName, setConnectingWalletName] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState("");

  const supportedWallets = [
    {
      name: "MetaMask",
      desc: "Connect using MetaMask web extension or mobile app secure vault",
      iconColor: "#F6851B",
      borderColor: "hover:border-[#F6851B]/40",
      bgColor: "hover:bg-[#F6851B]/5",
      badge: "Most Popular",
    },
    {
      name: "Trust Wallet",
      desc: "Connect with Trust secure decentralized multi-asset wallet",
      iconColor: "#3375BB",
      borderColor: "hover:border-[#3375BB]/40",
      bgColor: "hover:bg-[#3375BB]/5",
      badge: "Binance Native",
    },
    {
      name: "WalletConnect",
      desc: "Scan QR code with any wallet supporting WalletConnect on-chain",
      iconColor: "#3B99FC",
      borderColor: "hover:border-[#3B99FC]/40",
      bgColor: "hover:bg-[#3B99FC]/5",
      badge: "Universal Web3",
    },
    {
      name: "Coinbase Wallet",
      desc: "Link Coinbase self-custody wallet for institutional assets",
      iconColor: "#0052FF",
      borderColor: "hover:border-[#0052FF]/40",
      bgColor: "hover:bg-[#0052FF]/5",
      badge: "Institutional Custody",
    },
    {
      name: "Phantom Vault",
      desc: "Connect Solana, Bitcoin and Ethereum cross-chain Phantom secure node",
      iconColor: "#AB92F6",
      borderColor: "hover:border-[#AB92F6]/40",
      bgColor: "hover:bg-[#AB92F6]/5",
      badge: "Multi-Chain",
    },
  ];

  const handleWalletSelect = (name: string) => {
    if (connectingWalletName) return;
    setConnectingWalletName(name);
    setSuccessMsg(`Establishing secure handshake with ${name}...`);

    setTimeout(() => {
      if (connectWallet) {
        connectWallet(name);
      } else {
        // Fallback for simulation
        if (onAuthSuccess) {
          onAuthSuccess(`${name.toLowerCase()}@web3.identity`, `Wallet Connected: ${name}`);
        }
      }
      setConnectingWalletName(null);
      setSuccessMsg("");
    }, 1200);
  };

  const getSimulatedAddressShort = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <section id="homepage-signup-anchor" className="py-20 bg-transparent border-t border-b border-sky-950/40 text-left relative overflow-hidden z-20">
      {/* Dynamic ambient background gradients */}
      <div 
        className="absolute inset-x-0 top-0 h-40 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.12), transparent 70%)"
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Onboarding Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-bold block">
            Wallet-First Decentralized Identity (Web3)
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-white tracking-tight">
            Connect Secure Asset Wallet
          </h2>
          <div className="w-12 h-1 bg-[#38bdf8] mx-auto rounded-full" />
          <p className="text-slate-350 text-xs sm:text-sm font-light leading-relaxed">
            Eliminating passwords & traditional credentials. Your Web3 wallet address acts as your permanent, secure on-chain institutional identity.
          </p>
        </div>

        {/* Primary Interactive Card Container */}
        <div className="bg-[#091124]/90 rounded-3xl border border-slate-800 hover:border-slate-700 shadow-2xl overflow-hidden transition-all duration-300 max-w-2xl mx-auto backdrop-blur-md">
          
          <div className="p-6 sm:p-10 space-y-6">
            
            {/* QA Testing Assistance Panel */}
            <div className="p-4 bg-sky-500/5 border border-sky-500/20 rounded-2xl flex items-center justify-between text-xs space-x-2">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-sky-450 animate-pulse shrink-0" />
                <span className="text-[11px] font-mono text-sky-400 uppercase font-bold">🔒 Secure Identity Ledger Active</span>
              </div>
              <span className="text-[9.5px] font-mono text-slate-450 uppercase">Network: Mainnet-Simulator</span>
            </div>

            {wallet?.status === "connected" || isLoggedIn ? (
              /* Already Connected State */
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-950/45 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500/35">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h4 className="text-white font-sans font-black text-base uppercase">Web3 Identity Established Successfully</h4>
                  <p className="text-[#38bdf8] font-mono text-xs bg-[#38bdf8]/10 py-1.5 px-4 rounded-xl inline-block border border-[#38bdf8]/20 font-bold max-w-xs truncate">
                    Wallet Identifier: {wallet?.address || "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"}
                  </p>
                  <p className="text-slate-400 text-xs leading-relaxed mt-2">
                    Your permanent identity has been authenticated. The credit platform has checked your wallet state: KYC history, active loan limits, on-chain balances, and referrals are fully synchronized.
                  </p>
                </div>
                <div className="pt-4 max-w-sm mx-auto">
                  <button
                    onClick={() => {
                      if (onAuthSuccess && wallet?.address) {
                        onAuthSuccess(wallet.address, "Verified Holder");
                      } else {
                        // Directly trigger callback
                        window.location.hash = "dashboard";
                      }
                    }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-[#0284c7] hover:from-sky-500 hover:to-sky-400 text-white font-sans font-bold text-xs uppercase tracking-wider transition duration-150 cursor-pointer flex items-center justify-center space-x-2 shadow-lg shadow-sky-600/15"
                  >
                    <span>Enter Loans & Collateral Suite</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ) : (
              /* Disconnected: Supported Wallets Selection List */
              <div className="space-y-4">
                <p className="text-[10px] font-mono text-slate-400 uppercase font-black text-center mb-4 tracking-wider">
                  Supported Web3 Integrations
                </p>

                <AnimatePresence mode="wait">
                  {successMsg && (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs font-mono font-bold flex items-center space-x-2"
                    >
                      <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping mr-2" />
                      <span>{successMsg}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 gap-3">
                  {supportedWallets.map((w) => (
                    <button
                      key={w.name}
                      type="button"
                      disabled={!!connectingWalletName}
                      onClick={() => handleWalletSelect(w.name)}
                      className={`p-4 rounded-2xl bg-slate-905 border border-slate-800 flex items-center justify-between text-left transition-all duration-250 cursor-pointer group select-none ${w.borderColor} ${w.bgColor}`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-slate-950 rounded-xl border border-slate-850 group-hover:scale-105 transition duration-150 w-11 h-11 flex items-center justify-center">
                          <WalletLogo name={w.name} className="w-7 h-7 shrink-0" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-sans text-xs font-black text-white uppercase tracking-wider">
                              {w.name}
                            </span>
                            <span className="text-[8px] font-mono bg-slate-800 text-slate-300 px-2 py-0.5 rounded uppercase font-black tracking-normal">
                              {w.badge}
                            </span>
                          </div>
                          <p className="text-[10.5px] text-slate-400 leading-normal font-light mt-0.5">
                            {w.desc}
                          </p>
                        </div>
                      </div>
                      <span className="text-slate-500 group-hover:text-sky-400 transition-colors duration-155 pl-2">
                        <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-4 p-4 rounded-2xl border border-slate-850 bg-slate-950/40 space-y-2">
                  <div className="flex items-start space-x-2.5 text-slate-450 text-[10px] leading-relaxed font-bold">
                    <Shield className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>
                      Security Note: By connecting your digital assets wallet, you are validating wallet ownership signatures without exposing custody key credentials. Global Crypto Capital never demands private keys or seeds.
                    </span>
                  </div>
                </div>

                <p className="text-[9.5px] font-mono text-slate-500 text-center uppercase mt-3">
                  * Connecting on-chain wallet constitutes dynamic client confirmation of master disclosures.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
