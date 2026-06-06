/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Landmark, Mail, Phone, Calendar, MessageSquare, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("institutional");
  const [body, setBody] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#060c1d] to-[#040915] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-xs font-mono mb-6 text-slate-500">
          <span>Home</span>
          <span>/</span>
          <span className="text-amber-400 font-bold">Contact Advisory Board</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-11 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[11px] font-mono tracking-[0.25em] text-amber-400 uppercase font-bold block">
              Advisors Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
              Request Sovereign Allocation
            </h2>
            <p className="text-slate-350 font-sans text-xs sm:text-sm leading-relaxed font-light">
              Our legal and risk appraisal boards coordinate massive liquidity structures globally. For allocations exceeding $3,000,000 USD or specialized corporate agreements (ISDA/repo structures), schedule a session directly with our corporate lending desk.
            </p>

            {/* Structured Points */}
            <div className="space-y-4 pt-4 border-t border-slate-900">
              <div className="flex items-center space-x-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">Liquidity Desk Helpline</span>
                  <span className="text-sm font-sans font-bold text-white">+1 (800) 900-CRYPTO-CAP</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">Direct Desk Lending Office</span>
                  <span className="text-sm font-sans font-bold text-white">risk@cryptocapital.com</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] font-mono text-slate-500 uppercase block">Average Credit Clearance Turnaround</span>
                  <span className="text-sm font-sans font-bold text-white">&le; 12 Minutes (Automated Logic check)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-900 bg-slate-950 p-6 sm:p-8 shadow-2xl relative">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-full w-14 h-14 flex items-center justify-center border border-emerald-500/20 mx-auto">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-display font-extrabold text-base uppercase tracking-wider">
                    Inquiry Handed Off
                  </h3>
                  <p className="text-slate-400 text-xs font-light max-w-sm mx-auto leading-relaxed">
                    Our underwriter officers will clear this allocation petition. An encrypted advisory dossier has been compiled and dispatched to your email address.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-mono text-slate-400 uppercase font-semibold">Legal Full Name</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Jonathan Vance"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl bg-slate-900 border border-slate-850 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-mono text-slate-400 uppercase font-semibold">Advisory Email</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="vance@vanceholdings.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full h-11 px-4 rounded-xl bg-slate-900 border border-slate-850 text-white text-xs focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-type" className="text-xs font-mono text-slate-400 uppercase font-semibold">Primary Target Allocation Tier</label>
                    <select
                      id="contact-type"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full h-11 px-3 rounded-xl bg-slate-900 border border-slate-850 text-white text-xs font-semibold focus:outline-none focus:border-amber-400"
                    >
                      <option value="institutional" className="bg-slate-950">Institutional Treasury Allocation (&gt;$1M USD)</option>
                      <option value="startup" className="bg-slate-950">Web3 Runway / Scale Funding ($250K – $1M)</option>
                      <option value="sovereign" className="bg-slate-950">Sovereign Wealth Joint Master Contract (&gt;$3M)</option>
                      <option value="security" className="bg-slate-950">Compliance, Legal & Custody Inquiries</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-body" className="text-xs font-mono text-slate-400 uppercase font-semibold">Describe Capital Demands</label>
                    <textarea
                      id="contact-body"
                      rows={4}
                      required
                      placeholder="Outline target collateral assets, expected borrowing timelines, or legal concerns"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                      className="w-full p-4 rounded-xl bg-slate-900 border border-slate-850 text-white text-xs focus:outline-none focus:border-amber-400 font-sans resize-none"
                    />
                  </div>

                  {/* Warning label */}
                  <div className="flex items-start space-x-2 p-3 bg-slate-900 border border-slate-855 rounded-lg text-[10px] text-slate-500 leading-normal font-mono">
                    <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Inquiries logged through standard forms undergo immediate biometric and address compliance checks before routing to the underwriter desks.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#cca352] to-[#bf9d3a] text-slate-950 font-sans font-bold text-xs uppercase tracking-wider transition cursor-pointer hover:from-[#d4af37]"
                  >
                    Dispatch Advisory Request
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
