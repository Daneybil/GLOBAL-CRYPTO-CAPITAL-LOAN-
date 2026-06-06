/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ActiveTab } from "../types";
import { Landmark, Shield, FileText, HelpCircle, Mail, MapPin, Globe } from "lucide-react";

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040815]/90 backdrop-blur-md border-t border-[#1e293b]/70 text-slate-400 font-sans text-sm mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Block */}
          <div className="space-y-4">
            <div 
              onClick={() => setActiveTab("home")}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="p-1.5 bg-gradient-to-r from-[#cca352] to-[#bf9d3a] rounded-lg text-slate-950">
                <Landmark className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <span className="font-sans text-lg font-black tracking-tight text-white block uppercase">
                  Global Crypto Capital Loan
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] text-amber-400 uppercase block -mt-1 font-extrabold">
                  SEC COMPLIANT CREDIT LIQUIDITY
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Global Crypto Capital Loan is a tier-1 institutional digital lending platform offering asset-backed financing for liquidity providers, market makers, startups, and high-net-worth investors worldwide.
            </p>
            <div className="flex space-x-3 text-xs font-mono pt-2">
              <span className="flex items-center space-x-1 text-slate-500">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>SEC & FINRA Registered Partners</span>
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white hover:text-amber-400 font-semibold text-xs uppercase tracking-wider mb-4">
              Explore Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => setActiveTab("solutions")} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  Structured Funding Tiers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("calculator")} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  Interactive Loan Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("market-support")} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  Real-Time Assets & Market Data
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("how-it-works")} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  Our 8-Step Verification Protocol
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Support */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">
              Trust & Support
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => setActiveTab("about")} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  About Our Institution
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("market-support")} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  Global Resolution Center
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab("contact-info")} 
                  className="hover:text-white hover:underline transition-all text-left"
                >
                  Inquire & Contact Advisors
                </button>
              </li>
              <li>
                <a 
                  href="#privacy" 
                  className="hover:text-white hover:underline transition-all text-left block"
                >
                  Regulatory Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Global Presence */}
          <div className="space-y-3.5 text-xs">
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider">
              Global Presence
            </h4>
            <p className="flex items-start space-x-2 text-slate-400 leading-tight">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>
                One Financial Center, Suite 4400, Boston, MA 02111, United States
              </span>
            </p>
            <p className="flex items-center space-x-2 text-slate-400">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>contact@cryptocapital.com</span>
            </p>
            <p className="flex items-center space-x-2 text-slate-400">
              <Globe className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Global Client Inquiries: 24/7/365</span>
            </p>
          </div>
        </div>

        {/* Regulatory Disclaimer section typical for multi-billion dollar fintechs */}
        <div className="border-t border-slate-800 pt-8 mt-8 text-[11px] leading-relaxed text-slate-500 space-y-4">
          <p>
            <strong>Regulatory & Risk Disclosure:</strong> Digital lending is subject to market risks, volatility, and currency fluctuations. Loan-to-value (LTV) limits are enforced strictly by smart contracts and algorithmic or manual liquidity checks. Collateral submitted constitutes guarantee under bilateral master agreements. Services under Global Crypto Capital Loan are not FDIC insured. They are subject to strict KYC/AML verification protocols under Article 9 guidelines. High LTV loans are subject to automatic liquidation triggers in case of extreme volatility.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center text-slate-600 text-[10px] space-y-2 sm:space-y-0">
            <span>© {currentYear} Global Crypto Capital Loan. All Rights Reserved.</span>
            <div className="flex space-x-4">
              <span>SEC Registered Partner Entity</span>
              <span>•</span>
              <span>FTC Consumer Protection Compliant</span>
              <span>•</span>
              <span>GDPR Certified Secure Data System</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
