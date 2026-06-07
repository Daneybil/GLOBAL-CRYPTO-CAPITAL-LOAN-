/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ActiveTab, WalletState } from "../types";
import { ShieldCheck, Wallet, Menu, X, Landmark, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  wallet: WalletState;
  connectWallet: () => void;
  disconnectWallet: () => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (login: boolean) => void;
  userEmail: string;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  wallet,
  connectWallet,
  disconnectWallet,
  isLoggedIn,
  setIsLoggedIn,
  userEmail,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [sidebarSide, setSidebarSide] = useState<"left" | "right">("left");

  const renderToggleIcon = (side: "left" | "right") => {
    const isOpen = leftSidebarOpen && sidebarSide === side;
    return (
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Line 1 (Top) */}
        <span 
          className={`absolute h-[2px] bg-current rounded-full transition-all duration-300 ${
            isOpen 
              ? "w-[2px] h-5 rotate-0" 
              : "w-5 translate-y-[-5px]"
          }`}
        />
        {/* Line 2 (Middle) */}
        <span 
          className={`absolute h-[2px] bg-current rounded-full transition-all duration-300 ${
            isOpen 
              ? "opacity-0 w-0 h-0" 
              : "w-5"
          }`}
        />
        {/* Line 3 (Bottom) */}
        <span 
          className={`absolute h-[2px] bg-current rounded-full transition-all duration-300 ${
            isOpen 
              ? "w-[2px] h-5 opacity-0" 
              : "w-5 translate-y-[5px]"
          }`}
        />
      </div>
    );
  };

  const menuItems: { id: ActiveTab; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "how-it-works", label: "How it works" },
    { id: "solutions", label: "Funding solutions" },
    { id: "calculator", label: "Loan calculator" },
    { id: "market-support", label: "Market data and support" },
    { id: "contact-info", label: "Contact info" },
    { id: "kyc", label: "KYC / Onboarding" },
    { id: "dashboard", label: "Dashboard" },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const truncateAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060c1d]/95 backdrop-blur-md border-b border-[#1e293b] shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Hamburger menu button & Logo Container */}
          <div className="flex items-center space-x-4">
            {/* Master Left Sidebar Trigger (Three horizontal lines / single vertical line on toggle) */}
            <button
              onClick={() => {
                setSidebarSide("left");
                setLeftSidebarOpen(!leftSidebarOpen);
              }}
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-[#0d1527] hover:border-amber-500/40 text-amber-500 hover:text-amber-400 transition cursor-pointer shadow-md flex items-center justify-center shrink-0"
              title="Open Navigation Drawer"
            >
              {renderToggleIcon("left")}
            </button>

            {/* Logo */}
            <div 
              onClick={() => handleNavClick("home")}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="p-1 bg-slate-950 rounded-xl border border-amber-500/35 shadow-lg shadow-amber-500/10 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-200">
                <svg className="w-9 h-9 text-amber-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" stroke="#d4af37" strokeWidth="5" fill="rgba(212, 175, 55, 0.1)"/>
                  <polygon points="50,25 72,38 72,62 50,75 28,62 28,38" stroke="#cca352" strokeWidth="4" fill="rgba(204, 163, 82, 0.15)"/>
                  <circle cx="50" cy="50" r="8" fill="#d4af37" />
                  <line x1="50" y1="10" x2="50" y2="25" stroke="#d4af37" strokeWidth="3" />
                  <line x1="85" y1="30" x2="72" y2="38" stroke="#d4af37" strokeWidth="3" />
                  <line x1="85" y1="70" x2="72" y2="62" stroke="#d4af37" strokeWidth="3" />
                  <line x1="50" y1="90" x2="50" y2="75" stroke="#d4af37" strokeWidth="3" />
                  <line x1="15" y1="70" x2="28" y2="62" stroke="#d4af37" strokeWidth="3" />
                  <line x1="15" y1="30" x2="28" y2="38" stroke="#d4af37" strokeWidth="3" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-base sm:text-lg md:text-xl font-extrabold tracking-tight text-white block leading-tight">
                  Global Crypto Capital Loan
                </span>
                <span className="text-[9px] font-mono tracking-[0.2em] text-amber-400 uppercase block -mt-0.5 font-extrabold">
                  SEC COMPLIANT CREDIT LIQUIDITY
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1.5 xl:space-x-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2.5 xl:px-4.5 xl:py-3 rounded-xl font-sans text-[13.5px] xl:text-[14.5px] font-extrabold tracking-wider uppercase transition-all duration-150 cursor-pointer ${
                  activeTab === item.id
                    ? "text-amber-400 bg-amber-500/10 border-b-2 border-amber-550"
                    : "text-slate-100 hover:text-white hover:bg-slate-800/40"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Action & Menu Section */}
          <div className="flex items-center space-x-2.5 sm:space-x-4">
            
            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Wallet-First Unified Identity connector */}
              {wallet.status === "connected" ? (
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                    className="flex items-center space-x-2.5 px-4.5 py-2.5 rounded-xl border-2 border-amber-500/40 bg-amber-500/15 text-amber-400 font-mono text-xs xl:text-sm font-black uppercase tracking-wider hover:bg-amber-500/25 transition-all duration-200 cursor-pointer shadow-lg shadow-amber-500/10"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                    <span>{truncateAddress(wallet.address || "")}</span>
                    <ChevronDown className="w-4 h-4 text-amber-200" />
                  </button>

                  <AnimatePresence>
                    {userDropdownOpen && (
                      <>
                        <div 
                          className="fixed inset-0 z-10" 
                          onClick={() => setUserDropdownOpen(false)}
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          className="absolute right-0 mt-2 w-64 rounded-xl bg-slate-950 border border-slate-850 shadow-2xl z-20 py-1"
                        >
                          <div className="px-4 py-2.5 border-b border-slate-900">
                            <p className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-semibold">
                              Connected Web3 Account
                            </p>
                            <p className="text-[11px] text-white truncate max-w-full font-mono mt-0.5">
                              {wallet.address}
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setUserDropdownOpen(false);
                              handleNavClick("dashboard");
                            }}
                            className="w-full text-left px-4 py-2 text-xs text-slate-300 hover:text-white hover:bg-slate-900 transition font-sans font-semibold uppercase"
                          >
                            Control Dashboard
                          </button>
                          <button
                            onClick={() => {
                              setUserDropdownOpen(false);
                              disconnectWallet();
                              handleNavClick("home");
                            }}
                            className="w-full text-left px-4 py-2 text-xs text-rose-450 hover:text-rose-400 hover:bg-slate-900 transition font-sans font-semibold uppercase"
                          >
                            Disconnect Wallet
                          </button>
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <button
                  onClick={() => {
                    handleNavClick("dashboard");
                    connectWallet();
                  }}
                  className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border-2 border-amber-500/50 bg-amber-500/10 hover:border-amber-400 hover:bg-amber-500/25 text-white text-xs xl:text-sm font-sans font-black uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-lg shadow-amber-500/10 active:scale-95"
                >
                  <Wallet className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Connect Wallet</span>
                </button>
              )}
            </div>

            {/* Mobile Wallet address indicator if Connected */}
            {wallet.status === "connected" && (
              <div 
                onClick={() => handleNavClick("dashboard")}
                className="flex lg:hidden items-center px-3 py-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-400 cursor-pointer text-[10.5px] font-mono font-extrabold shadow-sm active:scale-95"
                title="Go to Dashboard"
              >
                {truncateAddress(wallet.address || "")}
              </div>
            )}

            {/* Master Right Sidebar Trigger (Three horizontal lines / single vertical line on toggle) - Symmetrical design on absolute right side */}
            <button
              onClick={() => {
                setSidebarSide("right");
                setLeftSidebarOpen(!leftSidebarOpen);
              }}
              className="p-2.5 rounded-xl border border-slate-800 bg-slate-950/60 hover:bg-[#0d1527] hover:border-amber-500/40 text-amber-500 hover:text-amber-400 transition cursor-pointer shadow-md flex items-center justify-center shrink-0"
              title="Open Navigation Drawer"
            >
              {renderToggleIcon("right")}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#1e293b] bg-[#091124] overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-md font-sans text-xs font-semibold uppercase tracking-wider block ${
                    activeTab === item.id
                      ? "text-[#38bdf8] bg-[#0284c7]/10"
                      : "text-slate-300 hover:text-white hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="border-t border-slate-800 pt-3 mt-3 pb-2 flex flex-col space-y-2">
                {/* Wallet-First mobile handler */}
                {wallet.status === "connected" ? (
                  <>
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-900 rounded-lg text-sky-400 font-mono text-xs border border-slate-800">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        <span>{truncateAddress(wallet.address || "")}</span>
                      </div>
                      <span className="text-[9px] font-mono font-bold uppercase bg-sky-500/10 text-[#38bdf8] px-1.5 py-0.5 rounded">Linked</span>
                    </div>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleNavClick("dashboard");
                      }}
                      className="w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 font-sans text-xs font-bold text-white uppercase tracking-wider text-center"
                    >
                      Control Dashboard
                    </button>
                    <button
                      onClick={() => {
                        disconnectWallet();
                        setMobileMenuOpen(false);
                        handleNavClick("home");
                      }}
                      className="w-full py-2.5 rounded-lg bg-rose-950/40 text-rose-450 hover:bg-rose-900/10 border border-rose-900/30 font-sans text-xs font-bold uppercase tracking-wider text-center"
                    >
                      Disconnect Wallet
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      connectWallet();
                      setMobileMenuOpen(false);
                      handleNavClick("dashboard");
                    }}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2.5 rounded-lg border border-sky-500/20 bg-sky-500/10 hover:bg-sky-500/20 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    <Wallet className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>Connect Wallet</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🧭 Master Left Navigation Sidebar Drawer ("linked to the three horizontal line at the left hand side") */}
      <AnimatePresence>
        {leftSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setLeftSidebarOpen(false)}
              className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm pointer-events-auto"
            />
            
            {/* Drawer Body - Slides in from left or right based on which three-line button was triggered */}
            <motion.div
              initial={{ x: sidebarSide === "left" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: sidebarSide === "left" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 bottom-0 w-[300px] max-w-[85vw] bg-[#050c1e] ${sidebarSide === "left" ? "left-0 border-r" : "right-0 border-l"} border-[#1e293b]/70 shadow-[5px_0_30px_rgba(0,0,0,0.65)] z-50 p-6 flex flex-col justify-between overflow-y-auto pointer-events-auto text-left`}
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between border-b border-[#1e293b]/50 pb-5 mb-6">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-slate-950 rounded-xl border border-amber-500/35">
                      <Landmark className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <span className="font-display font-extrabold text-[14px] text-white block uppercase">
                        Master Navigation
                      </span>
                      <span className="text-[8px] font-mono tracking-widest text-amber-400 block font-bold">
                        SECURE ROUTING PORTAL
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setLeftSidebarOpen(false)}
                    className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 text-slate-400 hover:text-white hover:border-slate-700 transition cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Section header label */}
                <div className="mb-4">
                  <p className="text-[9px] font-mono uppercase tracking-[0.25em] text-amber-400 font-bold block">
                    Institutional Index
                  </p>
                </div>

                {/* Menu items */}
                <nav className="space-y-1.5">
                  {menuItems.map((item) => {
                    const isKyc = item.id === "kyc";
                    const isSelected = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          handleNavClick(item.id);
                          setLeftSidebarOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-sans text-xs font-bold uppercase transition-all duration-150 border cursor-pointer ${
                          isKyc
                            ? "bg-gradient-to-r from-amber-600/15 to-amber-600/5 text-amber-400 border-amber-500/35 hover:border-amber-400 hover:bg-amber-500/25 shadow-md shadow-amber-500/5"
                            : isSelected
                            ? "bg-sky-500/10 text-[#38bdf8] border-[#38bdf8]/30"
                            : "bg-slate-950/40 text-slate-300 hover:text-white hover:bg-[#091124] border-transparent hover:border-slate-850"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {isKyc ? (
                            <ShieldCheck className="w-4 h-4 text-amber-400 animate-pulse shrink-0" />
                          ) : item.id === "dashboard" ? (
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                          ) : (
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 opacity-60 shrink-0" />
                          )}
                          <span>{item.label}</span>
                        </div>
                        {isKyc && (
                          <span className="text-[7.5px] font-mono font-black uppercase bg-amber-500/20 text-amber-400 px-1.5 py-0.5 rounded tracking-normal">
                            SECURE
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Bottom Drawer Identity Status Indicator */}
              <div className="pt-5 border-t border-[#1e293b]/50 mt-6">
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-900/60 flex items-center space-x-3">
                  <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${wallet.status === 'connected' ? 'bg-emerald-400 animate-pulse' : 'bg-red-500 animate-pulse'}`} />
                  <div className="min-w-0 flex-1">
                    <span className="text-[9px] font-mono text-slate-400 uppercase font-black block">
                      Ledger Handshake
                    </span>
                    <span className="text-[10px] text-white font-mono truncate font-bold block leading-tight">
                      {wallet.status === 'connected' ? wallet.address : 'DISCONNECTED'}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
