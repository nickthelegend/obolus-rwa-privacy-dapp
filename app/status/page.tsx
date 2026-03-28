"use client";

import React from "react";
import { motion } from "framer-motion";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Status() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-32">
        <motion.div {...fadeInUp} className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            Vault Stats<span className="text-[#ccff00]">.</span>
          </h1>
          <p className="text-xl text-white/60 font-medium leading-relaxed">
            Real-time, confidential metrics for the Obolus Vault ecosystem on BNB Chain.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer group flex flex-col justify-center text-center items-center">
               <div className="text-[#ccff00] text-[10px] uppercase tracking-widest font-bold mb-4">Total TVL (Encrypted)</div>
               <h3 className="text-4xl lg:text-5xl font-black uppercase mb-4 tracking-tighter">$14.2M</h3>
               <div className="text-[#ccff00] text-xs font-bold font-mono tracking-widest">+42.1% (7d)</div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer group flex flex-col justify-center text-center items-center">
               <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Active Vaults</div>
               <h3 className="text-4xl lg:text-5xl font-black uppercase mb-4 tracking-tighter tracking-tighter tracking-tighter">1,240</h3>
               <div className="text-white/40 text-xs font-bold font-mono tracking-widest">+12.1% (7d)</div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer group flex flex-col justify-center text-center items-center">
               <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-4">Integrations</div>
               <h3 className="text-4xl lg:text-5xl font-black uppercase mb-4 tracking-tighter">14</h3>
               <div className="text-white/40 text-xs font-bold font-mono tracking-widest">+100% (7d)</div>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-[#ccff00]/40 transition-all cursor-pointer group flex flex-col justify-center text-center items-center shadow-[0_0_20px_rgba(204,255,0,0.1)]">
               <div className="text-[#ccff00] text-[10px] uppercase tracking-widest font-bold mb-4">Current APY</div>
               <h3 className="text-4xl lg:text-5xl font-black uppercase mb-4 tracking-tighter">8.4%</h3>
               <div className="text-[#ccff00] text-xs font-bold font-mono tracking-widest">+4.1% (7d)</div>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
