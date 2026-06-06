/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from "react";
import { ActiveTab, CryptoAsset, WalletState } from "./types";
import { fetchLivePrices } from "./data/assets";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import FundingSolutionsSection from "./components/FundingSolutionsSection";
import CalculatorSection from "./components/CalculatorSection";
import MarketDataSection from "./components/MarketDataSection";
import DashboardView from "./components/DashboardView";
import AboutSection from "./components/AboutSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ContactSection from "./components/ContactSection";
import PolygonalBackground from "./components/PolygonalBackground";
import HomepageNavigationMenu from "./components/HomepageNavigationMenu";
import HomepageRegisterSection from "./components/HomepageRegisterSection";

import { Landmark, ArrowLeft, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("home");
  const [homeActiveSection, setHomeActiveSection] = useState<string | null>(null);
  const [assets, setAssets] = useState<CryptoAsset[]>([]);
  const [isApiLoading, setIsApiLoading] = useState<boolean>(false);
  const [lastUpdated, setLastUpdated] = useState<string>("Initializing...");
  const [dashboardInitialStep, setDashboardInitialStep] = useState<number>(1);

  // Unified global routing coordinator
  const handleSetActiveTab = (tab: ActiveTab) => {
    if (tab === "home") {
      setActiveTab("home");
      setHomeActiveSection(null);
    } else if (tab === "kyc") {
      // Begin KYC: trigger wallet connection if disconnected
      if (wallet.status !== "connected") {
        // We call helper to simulate wallet connect automatically
        connectWallet("MetaMask");
      }
      // If signed up, jump directly to Compliance QA form page (Step 2 of dashboard)
      setDashboardInitialStep(isLoggedIn ? 2 : 1);
      setActiveTab("dashboard");
    } else if (tab === "about") {
      setActiveTab("home");
      setHomeActiveSection("about");
      setTimeout(() => {
        document.getElementById("homepage-menu-anchor")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (tab === "how-it-works") {
      setActiveTab("home");
      setHomeActiveSection("how-it-works");
      setTimeout(() => {
        document.getElementById("homepage-menu-anchor")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (tab === "solutions" || tab === "solutions" as any) {
      setActiveTab("home");
      setHomeActiveSection("solutions");
      setTimeout(() => {
        document.getElementById("homepage-menu-anchor")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (tab === "calculator") {
      setActiveTab("home");
      setHomeActiveSection("calculator");
      setTimeout(() => {
        document.getElementById("calculator-section-anchor")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (tab === "market-support" || tab === "market-support" as any) {
      setActiveTab("home");
      setHomeActiveSection("market-support");
      setTimeout(() => {
        document.getElementById("homepage-menu-anchor")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (tab === "contact-info" || tab === "contact-info" as any) {
      setActiveTab("home");
      setHomeActiveSection("contact");
      setTimeout(() => {
        document.getElementById("homepage-menu-anchor")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setActiveTab(tab);
    }
  };

  // Global Wallet Simulator state
  const [wallet, setWallet] = useState<WalletState>({
    status: "disconnected",
    address: null,
    balanceEth: 0,
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userEmail, setUserEmail] = useState<string>("investor@cryptocapital.com");

  // Deep pre-fills for quick simulation transfers
  const [prefillAmount, setPrefillAmount] = useState<number>(10000);
  const [prefillAssetSymbol, setPrefillAssetSymbol] = useState<string>("BTC");
  const [prefillDuration, setPrefillDuration] = useState<number>(12);

  // Load prices initially and set a dynamic refresher feed
  const loadPricesField = async () => {
    setIsApiLoading(true);
    const result = await fetchLivePrices();
    setAssets(result);
    setIsApiLoading(false);
    const now = new Date();
    setLastUpdated(now.toLocaleTimeString("en-US", { hour12: false }) + " UTC");
  };

  useEffect(() => {
    loadPricesField();
    
    // Auto-update price feeds every 30 seconds
    const interval = setInterval(() => {
      loadPricesField();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Connect Wallet Action Simulator
  const connectWallet = (selectedWalletName: string = "MetaMask") => {
    setWallet({
      status: "connecting",
      address: null,
      balanceEth: 0,
    });

    setTimeout(() => {
      // Simulate connection address based on selected wallet
      let simulatedAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
      if (selectedWalletName === "Trust Wallet") {
        simulatedAddress = "0x9828Db3bcE6634C24b455b844BC454f4438f4a1b";
      } else if (selectedWalletName === "Coinbase Wallet") {
        simulatedAddress = "0x3bcE6634C24d35BC6634C05329241b844BC454ea";
      } else if (selectedWalletName === "WalletConnect") {
        simulatedAddress = "0x2C6634C24B55b844BC454F4438f44EF29828dbAC";
      } else if (selectedWalletName === "Phantom Vault") {
        simulatedAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
      }
      setWallet({
        status: "connected",
        address: simulatedAddress,
        balanceEth: 35.24,
      });
      setIsLoggedIn(true);
    }, 1200);
  };

  // Disconnect Wallet Simulator
  const disconnectWallet = () => {
    setWallet({
      status: "disconnected",
      address: null,
      balanceEth: 0,
    });
    setIsLoggedIn(false);
  };

  // Deep-linking helper clicked from Home, Hero, or Solutions
  const handleRequestFundingTrigger = (amount: number, assetSymbol?: string, dur?: number) => {
    setPrefillAmount(amount);
    if (assetSymbol) setPrefillAssetSymbol(assetSymbol);
    if (dur) setPrefillDuration(dur);
    
    // Jump straight to Loan Calculator view
    setActiveTab("calculator");
  };

  // Click on "Simulate in Calculator"
  const handleSimulateAssetInCalculator = (symbol: string) => {
    setPrefillAssetSymbol(symbol);
    setActiveTab("calculator");
  };

  // Handler for "Verify & Apply" coming outwards from generic loan calculator
  const handleProceedToPricing = (amount: number, assetSymbol: string, duration: number) => {
    setPrefillAmount(amount);
    setPrefillAssetSymbol(assetSymbol);
    setPrefillDuration(duration);
    
    // Switch to Dashboard (Porting parameters with it)
    setActiveTab("dashboard");
  };

  const clearPrefill = () => {
    // Only zero after dashboard submission handles it
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-100 flex flex-col font-sans relative w-full max-w-full overflow-x-hidden selection:text-white selection:bg-[#0284c7]">
      {/* Interactive Polygonal Background */}
      <PolygonalBackground />
      
      {/* Dynamic Global Header Bar */}
      <div className="relative z-10">
        <Navbar
          activeTab={activeTab}
          setActiveTab={handleSetActiveTab}
          wallet={wallet}
          connectWallet={connectWallet}
          disconnectWallet={disconnectWallet}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userEmail={userEmail}
        />
      </div>

      {/* Main Screen Layout Container */}
      <main className="flex-1 relative z-10">
        
        {/* HOMEPAGE VIEW: Enforces exact "First Mission & Trust, then application" criteria */}
        {activeTab === "home" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-0"
          >
            {/* 1. HERO SECTION */}
            <HeroSection
              onPrimaryClick={() => handleSetActiveTab("calculator")}
              onSecondaryClick={() => handleSetActiveTab("how-it-works")}
            />

            {/* 2. GLOBAL AUDIT & INSTANT PARTNER SUITE (GLOBAL ORDER LOCATOR) */}
            <div id="global-audit-anchor" className="scroll-mt-24 py-16 bg-transparent border-t border-[#1e293b]/40">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Visual trust block describing Global Audit parameters */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-[11px] font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-bold block">
                    Global Order Locator
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white mt-1">
                    On-Chain Clearing Node & Audit Ledger
                  </h3>
                  <div className="w-12 h-1 bg-[#38bdf8] mx-auto rounded-full mt-3" />
                  <p className="text-slate-400 text-xs sm:text-sm font-light mt-3">
                    Our underwriter portals, collateral vaults, and disbursement ledgers are audited by global leading security firms to enforce absolute zero-rehypothecation compliance.
                  </p>
                </div>

                {/* The signup form shifted instantly after the description and header under it */}
                <div className="mb-16">
                  <HomepageRegisterSection
                    isLoggedIn={isLoggedIn}
                    wallet={wallet}
                    connectWallet={connectWallet}
                    onAuthSuccess={(email, name) => {
                      setUserEmail(email);
                      setIsLoggedIn(true);
                      setActiveTab("dashboard");
                    }}
                  />
                </div>
                
                {/* High trust audit metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                  <div className="p-4 rounded-2xl bg-[#091124]/80 border border-slate-800 text-center">
                    <span className="text-2xl font-mono font-black text-sky-400">100%</span>
                    <p className="text-[10px] text-slate-400 font-mono uppercase mt-1">Contract Audit Pass</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#091124]/80 border border-slate-800 text-center">
                    <span className="text-2xl font-mono font-black text-sky-450">AES-256</span>
                    <p className="text-[10px] text-slate-400 font-mono uppercase mt-1">Data Custody Seal</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#091124]/80 border border-slate-800 text-center">
                    <span className="text-2xl font-mono font-black text-sky-400">Zero</span>
                    <p className="text-[10px] text-slate-400 font-mono uppercase mt-1">Re-hypothecation Risk</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#091124]/80 border border-slate-800 text-center">
                    <span className="text-2xl font-mono font-black text-sky-450">Real-Time</span>
                    <p className="text-[10px] text-slate-400 font-mono uppercase mt-1">Proof of Reserves</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. EXQUISITE HOMEPAGE MENU SECTION (Primary Menu) */}
            <div id="homepage-menu-anchor" className="scroll-mt-24">
              <HomepageNavigationMenu
                onSelectBlock={(sectionId) => {
                  if (sectionId === "calculator") {
                    setHomeActiveSection("calculator");
                    document.getElementById("calculator-section-anchor")?.scrollIntoView({ behavior: "smooth" });
                  } else if (sectionId === "dashboard") {
                    setActiveTab("dashboard");
                  } else if (sectionId === "how-it-works") {
                    document.getElementById("homepage-signup-anchor")?.scrollIntoView({ behavior: "smooth" });
                  } else if (sectionId === "kyc") {
                    handleSetActiveTab("kyc");
                  } else {
                    setHomeActiveSection(sectionId);
                    setTimeout(() => {
                      document.getElementById("inline-content-anchor")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
                activeSection={homeActiveSection}
              />
            </div>

            {/* 4. MISSION SECTION ("Why Crypto Capital Loans Exists" - Why Crypto Capital Loan) */}
            <MissionSection />

            {/* 5. LOAN CALCULATOR SECTION */}
            <div id="calculator-section-anchor" className="scroll-mt-24 bg-[#050b18]/40 border-t border-[#1e293b]/40 py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <span className="text-[11px] font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-bold block">
                    Institutional Estimator
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-white mt-1">
                    Direct Credit Pricing & LTV Calculator
                  </h3>
                  <p className="text-slate-400 text-xs font-light mt-2">
                    Locked vault margins power your dynamic micro-rates with absolute liquidity security. Model your parameters immediately.
                  </p>
                </div>
                
                <CalculatorSection
                  assets={assets}
                  initialLoanAmount={prefillAmount}
                  selectedAssetSymbol={prefillAssetSymbol}
                  repaymentDuration={prefillDuration}
                  onApplyForLoan={handleProceedToPricing}
                  isApiLoading={isApiLoading}
                />
              </div>
            </div>

            {/* 6. PERMANENT INDEPENDENT HOW IT WORKS ROADMAP */}
            <HowItWorksSection
              onGetStartedClick={() => {
                document.getElementById("homepage-signup-anchor")?.scrollIntoView({ behavior: "smooth" });
              }}
              onModelLiquidityClick={() => {
                document.getElementById("calculator-section-anchor")?.scrollIntoView({ behavior: "smooth" });
              }}
            />

            {/* 5. INLINE EXPANDED SUBSECTION LOADER (Renders everything beautifully when clicked) */}
            <div id="inline-content-anchor" className="scroll-mt-24" />
            <AnimatePresence mode="wait">
              {homeActiveSection && homeActiveSection !== "calculator" && (
                <motion.div
                  key={homeActiveSection}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden border-b border-[#1e293b]/50"
                >
                  <div className="bg-[#050c1f]/80 py-12 backdrop-blur-md">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      
                      <div className="flex items-center justify-between border-b border-sky-500/10 pb-4 mb-8">
                        <div className="flex items-center space-x-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                          <h4 className="text-[#38bdf8] font-mono text-xs uppercase tracking-widest font-bold">
                            Active Section: {homeActiveSection.replace("-", " ")}
                          </h4>
                        </div>
                        <button
                          onClick={() => setHomeActiveSection(null)}
                          className="px-4 py-2 bg-sky-500/10 hover:bg-sky-500/25 border border-sky-500/30 text-sky-400 hover:text-white rounded-xl text-xs font-mono transition duration-150 uppercase font-bold"
                        >
                          Close [X]
                        </button>
                      </div>

                      <div className="text-left">
                        {homeActiveSection === "about" && <AboutSection />}
                        {homeActiveSection === "how-it-works" && (
                          <HowItWorksSection
                            onGetStartedClick={() => {
                              setActiveTab("dashboard");
                            }}
                            onModelLiquidityClick={() => {
                              setHomeActiveSection("calculator");
                              setTimeout(() => {
                                document.getElementById("calculator-section-anchor")?.scrollIntoView({ behavior: "smooth" });
                              }, 100);
                            }}
                          />
                        )}
                        {homeActiveSection === "solutions" && (
                          <FundingSolutionsSection
                            onRequestFunding={(amount) => handleRequestFundingTrigger(amount)}
                          />
                        )}
                        {homeActiveSection === "market-support" && (
                          <div className="space-y-12">
                            <MarketDataSection
                              assets={assets}
                              onSelectAsset={handleSimulateAssetInCalculator}
                              onRefresh={loadPricesField}
                              isRefreshing={isApiLoading}
                              lastUpdated={lastUpdated}
                            />
                            
                            <div className="p-8 bg-[#091124] rounded-3xl border border-slate-800 space-y-6">
                              <span className="text-[11px] font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-bold block">
                                Technical SUPPORT Desk
                              </span>
                              <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-white">
                                How Can We Support You?
                              </h3>
                              <p className="text-slate-350 text-xs sm:text-sm font-light max-w-2xl leading-relaxed">
                                We provide round-the-clock advisory, credit assistance, and custody guidance. Log in to the secure investor portal to register formal clearance tickets.
                              </p>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                <div className="p-5 rounded-2xl border border-slate-800 bg-[#050b18]/60 text-left">
                                  <h4 className="text-white font-semibold text-xs uppercase mb-1">Access Personal Service</h4>
                                  <p className="text-slate-400 text-xs font-light mb-4 text-left">Complete your digital clearances and register encrypted custody questions on-chain.</p>
                                  <button onClick={() => setActiveTab("dashboard")} className="px-4 py-2 bg-[#0284c7] hover:bg-sky-500 text-white rounded-lg text-xs font-bold uppercase transition">Open Portal Securely</button>
                                </div>
                                <div className="p-5 rounded-2xl border border-slate-800 bg-[#050b18]/60 text-left">
                                  <h4 className="text-white font-semibold text-xs uppercase mb-1">Corporate Hotline Desk</h4>
                                  <p className="text-slate-400 text-xs font-light mb-4">We provide high-touch telephone clearing guidelines for partners moving transactions of $100K+ USD.</p>
                                  <span className="font-mono text-xs font-bold text-sky-400 block pb-1">Hotline Desk: +1 (800) 900-CRYPTO-CAP</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {homeActiveSection === "contact" && <ContactSection />}
                      </div>

                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Dedicated Pages for Navigation Items, all featuring breadcrumbs, Back buttons and Journeys */}
        {activeTab === "about" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <AboutSection />
            <div className="py-6 border-t border-slate-900 flex justify-start">
              <button
                onClick={() => setActiveTab("home")}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#38bdf8] uppercase tracking-wider hover:text-white bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Homepage</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "how-it-works" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <HowItWorksSection />
            <div className="py-6 border-t border-slate-900 flex justify-start">
              <button
                onClick={() => setActiveTab("home")}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#38bdf8] uppercase tracking-wider hover:text-white bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Homepage</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "solutions" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            {/* Breadcrumb solution */}
            <div className="pt-24 px-4 flex items-center space-x-2 text-xs font-mono mb-2 text-slate-500">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#38bdf8] font-bold">Funding Solutions</span>
            </div>
            
            <FundingSolutionsSection
              onRequestFunding={(amount) => handleRequestFundingTrigger(amount)}
            />
            
            <div className="py-6 border-t border-slate-900 flex justify-start">
              <button
                onClick={() => setActiveTab("home")}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#38bdf8] uppercase tracking-wider hover:text-white bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Homepage</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "calculator" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            {/* Breadcrumb solution */}
            <div className="pt-24 px-4 flex items-center space-x-2 text-xs font-mono mb-2 text-slate-500">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#38bdf8] font-bold">Interactive Estimator</span>
            </div>
            
            <CalculatorSection
              assets={assets}
              initialLoanAmount={prefillAmount}
              selectedAssetSymbol={prefillAssetSymbol}
              repaymentDuration={prefillDuration}
              onApplyForLoan={handleProceedToPricing}
              isApiLoading={isApiLoading}
            />
            
            <div className="py-6 border-t border-slate-900 flex justify-start">
              <button
                onClick={() => setActiveTab("home")}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#38bdf8] uppercase tracking-wider hover:text-white bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Homepage</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "dashboard" && (
          <DashboardView
            assets={assets}
            wallet={wallet}
            connectWallet={connectWallet}
            disconnectWallet={disconnectWallet}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            prefillAmount={prefillAmount}
            prefillAssetSymbol={prefillAssetSymbol}
            prefillDuration={prefillDuration}
            clearPrefill={clearPrefill}
            onBackToHome={() => setActiveTab("home")}
            initialStep={dashboardInitialStep}
          />
        )}

        {activeTab === "market-support" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            {/* Breadcrumb solution */}
            <div className="pt-24 px-4 flex items-center space-x-2 text-xs font-mono mb-2 text-slate-500">
              <span>Home</span>
              <span>/</span>
              <span className="text-[#38bdf8] font-bold font-black uppercase">Market data and support</span>
            </div>

            <MarketDataSection
              assets={assets}
              onSelectAsset={handleSimulateAssetInCalculator}
              onRefresh={loadPricesField}
              isRefreshing={isApiLoading}
              lastUpdated={lastUpdated}
            />

            <div className="my-12 border-t border-slate-900" />

            <div className="py-12 bg-slate-950/40 rounded-3xl border border-slate-850 p-8 text-left space-y-6">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-bold block">
                Technical Help desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-white">
                How Can We Support You?
              </h2>
              <p className="text-slate-350 text-xs sm:text-sm font-light max-w-2xl leading-relaxed">
                We provide round-the-clock advisory, credit assistance, and custody guidance. Choose options below or enter the secure investor portal dashboard to log formal advice tickets.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl border border-slate-800 bg-[#091124]">
                  <h4 className="text-white font-semibold text-xs uppercase mb-1">Access Personal Service</h4>
                  <p className="text-slate-400 text-xs font-light mb-4">Complete our standard four-step digital clearance and log an encrypted request ticket with our support board.</p>
                  <button onClick={() => setActiveTab("dashboard")} className="px-4 py-2 bg-[#0284c7] hover:bg-sky-500 text-white rounded-lg text-xs font-bold uppercase transition">Open Portal Securely</button>
                </div>
                <div className="p-5 rounded-2xl border border-slate-800 bg-[#091124]">
                  <h4 className="text-white font-semibold text-xs uppercase mb-1">Corporate Hotline Desk</h4>
                  <p className="text-slate-400 text-xs font-light mb-4 text-left">We provide direct telephone assistance for partners clearing transactions of $100K+ USD.</p>
                  <span className="font-mono text-xs font-bold text-[#38bdf8]">Lending hotline: +1 (800) 900-CRYPTO-CAP</span>
                </div>
              </div>
            </div>

            <div className="py-6 border-t border-slate-900/60 flex justify-start mt-6">
              <button
                onClick={() => setActiveTab("home")}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#38bdf8] uppercase tracking-wider hover:text-white bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Homepage</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === "contact-info" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <ContactSection />
            <div className="py-6 border-t border-slate-900 flex justify-start">
              <button
                onClick={() => setActiveTab("home")}
                className="inline-flex items-center space-x-2 text-xs font-semibold text-[#38bdf8] uppercase tracking-wider hover:text-white bg-slate-900 border border-slate-800 px-4 py-2.5 rounded-xl transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Homepage</span>
              </button>
            </div>
          </div>
        )}

      </main>

      {/* Global Regulatory Footer */}
      <Footer setActiveTab={setActiveTab} />

    </div>
  );
}
