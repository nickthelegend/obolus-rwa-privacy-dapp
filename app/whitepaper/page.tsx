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

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-32">
        <motion.div {...fadeInUp} className="max-w-3xl">
          <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            Whitepaper<span className="text-[#ccff00]">.</span>
          </h1>
          <p className="text-xl text-white/60 font-medium mb-12 leading-relaxed">
            The technical foundation for decentralized dark pools and confidential RWA vaulting on BNB Chain.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold uppercase mb-4">Core Thesis</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Why privacy is the key to institutional RWA adoption. Addressing the liquidity fragmentation in public equity tokens.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-bold uppercase mb-4">fhEVM Protocol</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Implementation of encrypted state transitions. Mathematical proofs for private solvency and zero-trace liquidations.
              </p>
            </div>
          </div>

          <a href="#" className="inline-block bg-[#ccff00] text-black font-black text-xs uppercase tracking-widest px-10 py-5 rounded-full hover:scale-105 transition-transform">
            Download PDF (v1.0.2)
          </a>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
