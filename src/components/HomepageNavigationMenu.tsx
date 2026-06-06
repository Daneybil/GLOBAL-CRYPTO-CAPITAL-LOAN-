import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Info, 
  Workflow, 
  Coins, 
  Calculator, 
  LineChart, 
  Mail, 
  LayoutDashboard,
  ChevronDown,
  ShieldCheck
} from "lucide-react";

// Section imports will be handled directly in App.tsx or inline
interface HomepageNavigationMenuProps {
  onSelectBlock: (sectionId: string) => void;
  activeSection: string | null;
}

export default function HomepageNavigationMenu({ 
  onSelectBlock, 
  activeSection 
}: HomepageNavigationMenuProps) {

  const menuBlocks = [
    {
      id: "about",
      title: "About",
      subtitle: "Learn about our structure & mission",
      icon: Info,
      color: "from-sky-500/10 to-blue-600/10",
      borderColor: "border-sky-500/20 hover:border-sky-400/80",
      accentGlow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    },
    {
      id: "how-it-works",
      title: "How it works",
      subtitle: "Four-step custody-lending framework",
      icon: Workflow,
      color: "from-sky-500/10 to-blue-600/10",
      borderColor: "border-sky-500/20 hover:border-sky-400/80",
      accentGlow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    },
    {
      id: "solutions",
      title: "Funding solutions",
      subtitle: "Discover bespoke borrowing programs",
      icon: Coins,
      color: "from-sky-500/10 to-blue-600/10",
      borderColor: "border-sky-500/20 hover:border-sky-400/80",
      accentGlow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    },
    {
      id: "calculator",
      title: "Loan calculator",
      subtitle: "Estimate terms & dynamic pricing parameters",
      icon: Calculator,
      color: "from-sky-500/10 to-blue-600/10",
      borderColor: "border-sky-500/20 hover:border-sky-400/80",
      accentGlow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    },
    {
      id: "market-support",
      title: "Market data and support",
      subtitle: "Live pricing widgets & compliance assistance",
      icon: LineChart,
      color: "from-sky-500/10 to-blue-600/10",
      borderColor: "border-sky-500/20 hover:border-sky-400/80",
      accentGlow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    },
    {
      id: "contact",
      title: "Contact info",
      subtitle: "Global Lending Hotline & office headquarters",
      icon: Mail,
      color: "from-sky-500/10 to-blue-600/10",
      borderColor: "border-sky-500/20 hover:border-sky-400/80",
      accentGlow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    },
    {
      id: "kyc",
      title: "KYC / Onboarding",
      subtitle: "Secure identification, AML clearance & wallet mapping",
      icon: ShieldCheck,
      color: "from-amber-500/10 to-orange-600/10",
      borderColor: "border-amber-500/20 hover:border-amber-400/80",
      accentGlow: "shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    },
    {
      id: "dashboard",
      title: "Dashboard",
      subtitle: "Access encrypted institutional clearing portal",
      icon: LayoutDashboard,
      color: "from-sky-500/10 to-blue-600/10",
      borderColor: "border-sky-500/20 hover:border-sky-400/80",
      accentGlow: "shadow-[0_0_15px_rgba(56,189,248,0.15)]",
    },
  ];

  return (
    <section className="py-20 relative bg-[#040915]/65 border-b border-[#1e293b]/40 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subheading as requested ("the menu itself will have a subheading of menu.") */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-black block">
            Navigation Index
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-white">
            Primary Menu
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 mx-auto rounded-full" />
          <p className="text-slate-400 text-xs font-light max-w-md mx-auto pt-2">
            Select any structural block below to load full parameters and launch core workflows directly.
          </p>
        </div>

        {/* The 7 Beautiful block items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuBlocks.map((block) => {
            const IconComponent = block.icon;
            const isSelected = activeSection === block.id;

            return (
              <motion.button
                key={block.id}
                onClick={() => onSelectBlock(block.id)}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-6 rounded-2xl border-2 bg-gradient-to-br ${block.color} transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer ${
                  isSelected 
                    ? "border-sky-450 bg-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.25)]" 
                    : `${block.borderColor} hover:bg-slate-900/60`
                }`}
                style={{ minHeight: "150px" }}
              >
                {/* Visual Accent Glow Background for Polygon Vibe */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl pointer-events-none transition-all duration-500 group-hover:bg-sky-400/20 ${isSelected ? "bg-sky-400/20 scale-125" : ""}`} />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full border border-sky-500/10 flex items-center justify-center text-sky-400/20 group-hover:text-[#38bdf8] transition-colors">
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSelected ? "rotate-180 text-sky-400" : ""}`} />
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3.5 rounded-xl border transition-all duration-300 ${
                    isSelected 
                      ? "bg-sky-500 text-white border-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.4)]" 
                      : "bg-[#091124] text-sky-400 border-sky-500/25 group-hover:border-sky-400 group-hover:text-white"
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-sans font-black text-sm uppercase tracking-wide">
                      {block.title}
                    </h3>
                    <p className="text-slate-400 text-[10px] font-mono uppercase tracking-[0.1em] text-sky-400/60 font-semibold group-hover:text-sky-300">
                      View section &rarr;
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-xs font-light tracking-wide pt-4 leading-relaxed group-hover:text-white transition-colors">
                  {block.subtitle}
                </p>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
