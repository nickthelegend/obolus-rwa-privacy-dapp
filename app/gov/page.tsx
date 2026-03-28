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

export default function Governance() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-32">
        <motion.div {...fadeInUp} className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            Governance<span className="text-[#ccff00]">.</span>
          </h1>
          <p className="text-xl text-white/60 font-medium leading-relaxed">
            Democratic, confidential, and decentralized. Obolus is governed by OBO token holders.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer group">
               <div className="text-[#ccff00] text-sm font-bold uppercase tracking-widest mb-6 px-4 py-2 bg-white/5 inline-block rounded-full">Active Proposals</div>
               <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">OIP-001: Vault Fee Structure Adjustment</h3>
               <p className="text-sm text-white/40 leading-relaxed mb-8">
                 Proposal to reduce the withdrawal fee from 0.5% to 0.2% for high-utilization pools to increase liquidity velocity.
               </p>
               <div className="flex gap-4">
                  <div className="bg-[#ccff00] text-black px-6 py-3 rounded-full font-bold text-xs">VOTE YES</div>
                  <div className="bg-white/10 text-white px-6 py-3 rounded-full font-bold text-xs hover:bg-white/20">VOTE NO</div>
               </div>
            </div>

            <div className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer group flex flex-col justify-center text-center items-center">
               <div className="text-6xl mb-6">🗳️</div>
               <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Snapshot Voting</h3>
               <p className="text-sm text-white/40 mb-8 max-w-sm">Connect your wallet to see your voting power and historical participation.</p>
               <div className="w-full h-px bg-white/10 mb-8 max-w-[200px]"></div>
               <a href="#" className="font-bold text-[#ccff00] text-xs uppercase tracking-widest hover:underline">View All Proposals</a>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
