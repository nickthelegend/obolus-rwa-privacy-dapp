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

export default function Community() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
      <Header />
      
      <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-32">
        <motion.div {...fadeInUp} className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
            COMMUNITY<span className="text-[#ccff00]">.</span>
          </h1>
          <p className="text-xl text-white/60 font-medium leading-relaxed">
            Join the decentralized dark pool revolution. Governance, alpha, and technical support.
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer group flex flex-col justify-center text-center items-center">
               <div className="text-4xl mb-6">💬</div>
               <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">DISCORD</h3>
               <p className="text-sm text-white/40 mb-8 max-w-[180px]">Join 42k+ developers and vault managers in our official Discord server.</p>
               <a href="#" className="font-bold text-[#ccff00] text-xs uppercase tracking-widest hover:underline">JOIN DISCORD</a>
            </div>

            <div className="p-12 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer group flex flex-col justify-center text-center items-center">
               <div className="text-4xl mb-6">𝕏</div>
               <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">TWITTER</h3>
               <p className="text-sm text-white/40 mb-8 max-w-[180px]">Follow @ObolusVault for real-time updates and partnership announcements.</p>
               <a href="#" className="font-bold text-[#ccff00] text-xs uppercase tracking-widest hover:underline">FOLLOW US</a>
            </div>

            <div className="p-12 rounded-3xl bg-[#ccff00] text-black border border-white/10 hover:scale-[1.02] transition-all cursor-pointer group flex flex-col justify-center text-center items-center">
               <div className="text-4xl mb-6">🗞️</div>
               <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter leading-none">WEEKLY<br/>DAO REPORT</h3>
               <p className="text-sm text-black/60 mb-8 max-w-[180px]">The latest on governance, RWA listings, and vault health. No noise.</p>
               <a href="#" className="font-black text-black text-xs uppercase tracking-widest bg-black/10 px-6 py-2 rounded-full">SUBSCRIBE</a>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
