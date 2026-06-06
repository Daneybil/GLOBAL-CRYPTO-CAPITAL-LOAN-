import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function PolygonalBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse coordinate values from current window width/height
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // max 20px drift
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#03081a] via-[#08122c] to-[#010308] pointer-events-none select-none">
      {/* 1. Underlying premium amber/gold radial glow lights matching screenshot */}
      <div className="absolute inset-0">
        {/* Soft Gold Glow Top Right - noticeably brighter */}
        <div className="absolute top-[-10%] right-[-10%] w-[75vw] h-[75vw] rounded-full bg-amber-500/22 blur-[140px] mix-blend-screen animate-pulse" style={{ animationDuration: "14s" }} />
        
        {/* Soft Bronze/Yellow Glow Left Center */}
        <div className="absolute top-[25%] left-[-15%] w-[65vw] h-[65vw] rounded-full bg-yellow-500/15 blur-[160px] mix-blend-screen" />
        
        {/* Soft Ambient Gold Pulse Bottom Right */}
        <div className="absolute bottom-[-10%] right-[10%] w-[55vw] h-[55vw] rounded-full bg-amber-500/18 blur-[130px] mix-blend-screen animate-pulse" style={{ animationDuration: "10s" }} />
      </div>

      {/* 2. Interactive Infinite Diagonal Golden Diamond Grid resembling screenshot */}
      <div 
        className="absolute inset-0 opacity-75"
        style={{
          transform: `perspective(1000px) rotateX(12deg) rotate(45deg) scale(1.6) translateY(${mousePosition.y * 0.25}px) translateX(${mousePosition.x * 0.25}px)`,
          willChange: "transform",
          backgroundImage: `
            linear-gradient(rgba(214, 182, 110, 0.24) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(214, 182, 110, 0.24) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "80px 80px",
          transformOrigin: "center center",
        }}
      />

      {/* 3. Deep moving background structural blocks / isometric golden polygons */}
      <motion.div 
        className="absolute inset-0"
        style={{
          x: mousePosition.x * 0.4,
          y: mousePosition.y * 0.4,
        }}
      >
        {/* Decorative SVG Geometric Gold Diagonal Overlapping Lines from screenshot - brighter projection */}
        <svg className="absolute w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
          {/* Main Diagonal Intersections */}
          <path d="M -100,50 L 1500,1200" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
          <path d="M 1600,-100 L 0,1300" fill="none" stroke="url(#goldGrad)" strokeWidth="1.5" />
          
          <path d="M -200,800 L 1800,200" fill="none" stroke="url(#goldGrad)" strokeWidth="2" strokeDasharray="4,12" />
          <path d="M 300,-200 L 1200,1400" fill="none" stroke="url(#goldGrad)" strokeWidth="1.2" />
          
          {/* Subtle Diamond Lattice highlights */}
          <polygon points="400,200 800,400 400,600 0,400" fill="none" stroke="url(#goldGrad)" strokeWidth="0.8" className="opacity-50 animate-pulse" style={{ animationDuration: "8s" }} />
          <polygon points="1200,400 1600,600 1200,800 800,600" fill="none" stroke="url(#goldGrad)" strokeWidth="0.8" className="opacity-40" />
          
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8d6b27" />
              <stop offset="35%" stopColor="#fbbf24" />
              <stop offset="65%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
          </defs>
        </svg>

        {/* 4. Realistic 3D floating structural gold assets (Polygon aesthetic) */}
        {/* Hexagon 1: Large Gold-rimmed Glassmorphic block in top right */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [25, 35, 25],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[18%] right-[8%] w-48 h-56 bg-amber-500/12 border border-amber-400/40 rounded-3xl backdrop-blur-md shadow-xl flex items-center justify-center overflow-hidden"
          style={{
            transform: "rotate(25deg)",
          }}
        >
          {/* Internal gradient */}
          <div className="absolute inset-px bg-gradient-to-tr from-amber-900/30 via-slate-900/60 to-yellow-900/30 rounded-3xl" />
          <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-amber-400/60" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-yellow-400/60" />
          {/* Spinning gold core */}
          <div className="w-16 h-16 rounded-full border-2 border-amber-400/50 animate-spin animate-pulse" style={{ animationDuration: "12s" }} />
        </motion.div>

        {/* Hexagon 2: Warm gold prism on left center */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [-15, -8, -15],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[45%] left-[5%] w-36 h-40 bg-gradient-to-b from-amber-900/20 to-[#0d1428]/90 border-2 border-amber-400/35 rounded-2xl shadow-lg flex items-center justify-center"
        >
          <div className="absolute inset-1 bg-gradient-to-tr from-amber-900/25 to-slate-950/90 rounded-2xl" />
          <div className="relative w-8 h-8 border-2 border-amber-400/45 rounded-lg rotate-12" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-amber-500/12 to-transparent rounded-r-2xl pointer-events-none" />
        </motion.div>

        {/* Hexagon 3: Subtle small gold block in top left background */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            x: [0, -10, 0],
            rotate: [45, 135, 45],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[20%] w-14 h-14 border border-amber-400/35 bg-amber-900/20 rounded-xl"
        />

        {/* Hexagon 4: Bottom center gold-accented grid card structure */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [12, 16, 12],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[25%] w-80 h-48 bg-slate-950/80 border border-amber-405/35 rounded-[2.5rem] backdrop-blur-[2px] overflow-hidden shadow-2xl"
          style={{ transform: "rotate(12deg)" }}
        >
          <div className="absolute inset-0 bg-radial from-transparent to-slate-950/65" />
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.3) 2px, transparent 2px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.3) 2px, transparent 2px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
          {/* Ambient moving golden beam */}
          <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-amber-300/10 to-transparent skew-x-12 animate-pulse" style={{ animationDuration: "6s" }} />
        </motion.div>

        {/* Hexagon 5: Medium deep gold polygon in bottom right */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -15, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[8%] right-[15%] w-44 h-48 bg-amber-950/10 border border-amber-500/20 rounded-3xl"
        >
          <div className="absolute inset-px bg-slate-950/90 rounded-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b] animate-ping" />
        </motion.div>
      </motion.div>

      {/* 5. Subtle ambient gold dust points instead of blue */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(#d4af37 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
