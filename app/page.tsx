"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const Logo = () => (
  <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
    <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-[#ccff00] text-xs">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" /></svg>
    </div>
    Obolus
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-primary selection:text-black">
      {/* HERO SECTION - Neon Lime Background */}
      <div className="bg-[#ccff00] text-black w-full rounded-b-[3rem] lg:rounded-b-[4rem] px-6 lg:px-20 pb-20 relative overflow-hidden">

        {/* Header */}
        <header className="flex items-center justify-between py-6 max-w-[1400px] mx-auto z-10 relative">
          <Logo />
          <nav className="hidden md:flex items-center gap-8 font-bold text-[10px] tracking-widest uppercase text-black/60">
            <Link href="#" className="hover:text-black transition-colors">Whitepaper</Link>
            <Link href="#" className="hover:text-black transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-black transition-colors">Governance</Link>
            <Link href="#" className="hover:text-black transition-colors">Vault Stats</Link>
            <Link href="#" className="hover:text-black transition-colors">Community</Link>
          </nav>
          <a
            href="https://app.obolus.network"
            className="bg-black text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
          >
            Launch Vault
          </a>
        </header>

        {/* Hero Content */}
        <div className="max-w-[1400px] mx-auto mt-20 lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tight uppercase">
              The First<br />Confidential<br />Equity Vault.
            </h1>
            <p className="text-sm lg:text-base font-medium max-w-md leading-relaxed">
              Secure your tokenized stocks in an encrypted RWA vault on BNB Chain. Hold TSLAon, NVDAon, and SPYon with complete privacy—hidden from competitors and bots using fhEVM.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://app.obolus.network"
                className="inline-block bg-black text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-neutral-800 hover:scale-105 transition-all"
              >
                Launch Vault
              </Link>
              <Link
                href="#"
                className="inline-block border-2 border-black text-black font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-full hover:bg-black hover:text-[#ccff00] transition-all"
              >
                View Documentation
              </Link>
            </div>

            <div className="flex items-center gap-12 mt-8 pt-8 border-t border-black/10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Vault Privacy</p>
                <div className="text-3xl font-black">fhEVM</div>
              </div>
              <div className="w-px h-12 bg-black/10"></div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-1">Ondo Assets</p>
                <div className="text-3xl font-black">GM/on</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Dashboard Graphic Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#111] rounded-3xl p-6 shadow-2xl overflow-hidden border border-[#222]"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-[#ccff00] flex items-center justify-center pt-1 text-black font-black text-xl leading-none">
                ♦
              </div>
              <span className="text-white font-bold text-sm tracking-wide">oblETH Collateral</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#1a1a1a] rounded-xl p-4 col-span-1 h-32 flex flex-col justify-between">
                <span className="text-[#ccff00] text-[8px] font-bold uppercase tracking-widest">Credit Utilization</span>
                <div className="flex items-end gap-1 h-16">
                  {/* Mock Bar Chart */}
                  {[4, 5, 6, 6, 7, 8, 8, 9, 9, 10, 11, 12, 13, 15, 18, 22].map((h, i) => (
                    <div key={i} className="bg-[#ccff00] w-full rounded-sm" style={{ height: `${h * 4}%` }} />
                  ))}
                </div>
              </div>

              <div className="grid grid-rows-2 gap-4 col-span-1">
                <div className="bg-[#1a1a1a] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[#ccff00] text-[8px] font-bold uppercase tracking-widest mb-1">Interest Rate</span>
                  <span className="text-white font-bold text-xl">4.2%</span>
                </div>
                <div className="bg-[#1a1a1a] rounded-xl p-4 flex flex-col justify-center">
                  <span className="text-[#ccff00] text-[8px] font-bold uppercase tracking-widest mb-1">Credit Manager</span>
                  <span className="text-white font-medium text-xs opacity-80 truncate">0x73e...eDd9</span>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-4 col-span-1 h-32 flex flex-col">
                <span className="text-[#ccff00] text-[8px] font-bold uppercase tracking-widest mb-auto">Total Debt</span>
                {/* Mock Line Chart SVG Curve */}
                <svg viewBox="0 0 100 50" className="w-full h-16 stroke-[#ccff00] fill-none" preserveAspectRatio="none">
                  <path d="M0,45 C20,40 40,40 60,30 C80,20 90,10 100,5" strokeWidth="1" />
                </svg>
              </div>

              <div className="bg-[#1a1a1a] rounded-xl p-4 col-span-1 flex flex-col justify-center">
                <span className="text-[#ccff00] text-[8px] font-bold uppercase tracking-widest mb-2">Credit Limit</span>
                <div className="h-2 w-full bg-[#333] rounded-full flex overflow-hidden">
                  <div className="h-full bg-[#ccff00] w-[60%]"></div>
                  {/* Dotted lines effect over it */}
                  <div className="absolute h-2 w-[calc(50%-2rem)] flex gap-[2px]">
                    {Array.from({ length: 30 }).map((_, i) => <div key={i} className="h-full w-[2px] bg-black/50"></div>)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <main className="max-w-[1400px] mx-auto px-6 lg:px-20 py-24 flex flex-col gap-24">

        {/* Partners */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-24 items-center opacity-60 grayscale pb-10 border-b border-white/5">
          <span className="font-bold text-2xl tracking-tighter">BNB Chain</span>
          <span className="font-bold text-2xl tracking-tighter">Ondo Finance</span>
          <span className="font-bold text-2xl tracking-tighter px-4 py-1 border border-white rounded-md uppercase text-xs tracking-widest bg-white text-black">fhEVM</span>
          <span className="font-bold text-2xl tracking-tighter">Zama</span>
          <span className="font-bold text-2xl tracking-tighter">Chainlink</span>
        </div>

        {/* The Pain Point Section */}
        <motion.section {...fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-6">Transparency is a Bug,<br /><span className="text-[#ccff00]">Not a Feature.</span></h2>
          <p className="text-white/60 font-medium">On public blockchains, every move is watched. Institutional RWA adoption requires institutional-grade privacy.</p>
        </motion.section>

        {/* Built By Banner (Blue) */}
        <motion.section 
          {...fadeInUp}
          className="bg-[#85A1FF] text-black rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl lg:text-5xl font-black mb-4 tracking-tighter uppercase">Powered By Ondo & Chainlink</h2>
            <p className="font-medium text-sm lg:text-base leading-relaxed opacity-80">
              Native support for the full suite of Ondo Global Markets tokenized stocks (TSLAon, NVDAon, SPYon) secured by Chainlink CCIP on BNB Chain.
            </p>
          </div>
          <div className="flex gap-6 items-center">
             <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center p-3 shadow-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-blue-600"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
             </div>
             <div className="font-black text-2xl uppercase italic opacity-90">Ondo</div>
          </div>
        </motion.section>

        {/* Feature Grid with Graphics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Green with Radar */}
          <motion.div 
            {...fadeInUp}
            className="bg-[#5EF1A0] text-black rounded-3xl p-8 lg:p-12 flex flex-col justify-between overflow-hidden relative min-h-[440px] md:min-h-[550px] md:row-span-2"
          >
            <div className="z-10 max-w-sm mb-12">
              <h3 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-[0.9] mb-6">Confidential<br />Vaults</h3>
              <p className="font-medium text-sm lg:text-base opacity-80 leading-relaxed">
                Utilizing fhEVM, your balances are stored as encrypted integers. Not even the vault contract "sees" your raw numbers during computation. Total privacy for your holdings.
              </p>
            </div>
            
            {/* Radar graphic */}
            <div className="absolute -bottom-20 -right-20 lg:-bottom-10 lg:-left-20 w-[600px] h-[600px] rounded-full border border-black/10 flex items-center justify-center z-0">
               <div className="w-[450px] h-[450px] rounded-full border border-black/10 flex items-center justify-center relative">
                 <div className="absolute top-[10%] left-[20%] w-6 h-6 bg-white rounded-full shadow-lg"></div>
                 <div className="w-[300px] h-[300px] rounded-full border border-black/10 flex items-center justify-center relative">
                    <div className="absolute -top-3 right-[15%] w-10 h-10 bg-[#33A96C] rounded-full shadow-xl"></div>
                    <div className="w-[150px] h-[150px] bg-[#33A96C]/60 backdrop-blur-md rounded-full"></div>
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Card 2: Cyan with Checkmark */}
          <motion.div 
            {...fadeInUp}
            className="bg-[#7FF6FF] text-black rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[300px]"
          >
            <div className="z-10 max-w-sm mb-8 relative">
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[0.9] mb-4">Identity &<br />Trust</h3>
              <p className="font-medium text-sm opacity-80 leading-relaxed">
                Integrated with Reclaim Protocol for Zero-Knowledge KYC. Prove your status without revealing your identity or portfolio size. Secure, private Sybil resistance.
              </p>
            </div>
            {/* Checkmark Graphic */}
            <div className="absolute right-[-10%] bottom-[-20%] w-full h-[60%] border-t border-black/20 flex flex-col justify-end gap-2 pb-6 px-4">
              <div className="w-48 h-16 rounded-full border border-black/20 self-end mr-10 bg-[#00A1A1] flex items-center justify-center relative shadow-inner">
                 <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                 </svg>
              </div>
               <div className="w-56 h-12 rounded-full border border-black/20 self-center bg-[#00A1A1]/20"></div>
            </div>
          </motion.div>

          {/* Card 3: Purple with Waves */}
          <motion.div 
            {...fadeInUp}
            className="bg-[#BB8EF6] text-black rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[300px]"
          >
            <div className="z-10 max-w-sm mb-8 relative">
              <h3 className="text-3xl lg:text-4xl font-black uppercase tracking-tight leading-[0.9] mb-4">Private<br />Liquidity</h3>
              <p className="font-medium text-sm opacity-80 leading-relaxed">
                Move between TSLAon, NVDAon, and SPYon with zero trace. Your strategy is your edge—Obolus ensures it stays that way.
              </p>
            </div>
            {/* Wave Graphic */}
            <div className="absolute right-0 bottom-[-30%] w-[120%] h-[80%] flex items-end opacity-40 mix-blend-multiply">
               {Array.from({length: 8}).map((_,i) => (
                 <div key={i} className="absolute right-0 bottom-0 rounded-full border border-indigo-900/40" 
                      style={{
                        width: `${200 + i*40}px`, 
                        height: `${200 + i*40}px`, 
                        right: `${i * 30 - 100}px`,
                        bottom: `-50px`
                      }}></div>
               ))}
               <div className="absolute right-10 -bottom-10 w-[200px] h-[200px] bg-indigo-600/30 rounded-full blur-xl"></div>
            </div>
          </motion.div>

        </div>

        {/* Encrypted vs. Public Table */}
        <motion.section {...fadeInUp} className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight">The Obolus <span className="text-[#ccff00]">Difference</span></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-6 text-left text-[10px] font-bold uppercase tracking-widest text-white/40">Data Point</th>
                  <th className="py-6 text-left text-[10px] font-bold uppercase tracking-widest text-white/40">Standard RWA Wallet</th>
                  <th className="py-6 text-left text-[10px] font-bold uppercase tracking-widest text-[#ccff00]">Obolus Vault</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                  <td className="py-8 font-bold uppercase text-sm">Assets Held</td>
                  <td className="py-8 text-white/60 text-sm">Publicly Visible</td>
                  <td className="py-8 text-[#ccff00] font-bold text-sm">Encrypted</td>
                </tr>
                <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                  <td className="py-8 font-bold uppercase text-sm">Token Quantities</td>
                  <td className="py-8 text-white/60 text-sm">Publicly Visible</td>
                  <td className="py-8 text-[#ccff00] font-bold text-sm">Encrypted</td>
                </tr>
                <tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
                  <td className="py-8 font-bold uppercase text-sm">Entry / Exit Timing</td>
                  <td className="py-8 text-white/60 text-sm">Visible on Explorer</td>
                  <td className="py-8 text-[#ccff00] font-bold text-sm">Obfuscated</td>
                </tr>
                <tr className="group hover:bg-white/5 transition-colors">
                  <td className="py-8 font-bold uppercase text-sm">Total Net Worth</td>
                  <td className="py-8 text-white/60 text-sm">Calculated by anyone</td>
                  <td className="py-8 text-[#ccff00] font-bold text-sm">Private</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Closing Banner */}
        <motion.section
          {...fadeInUp}
          className="bg-[#ccff00] text-black rounded-3xl p-8 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative mb-24"
        >
          <div className="max-w-xl z-10">
            <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Your Portfolio.<br />Your Business.
            </h2>
            <p className="font-bold text-lg opacity-80 leading-relaxed">
              Obolus brings institutional-grade privacy to the RWA revolution. Built on BNB Chain. Powered by fhEVM.
            </p>
          </div>
          <Link
            href="https://app.obolus.network"
            className="z-10 bg-black text-white font-bold text-xs uppercase tracking-wider px-10 py-5 rounded-full hover:bg-neutral-800 hover:scale-105 transition-all whitespace-nowrap"
          >
            Launch Vault
          </Link>
          <div className="absolute right-[-5%] top-[-10%] text-[200px] font-black opacity-5 pointer-events-none">OBO</div>
        </motion.section>

      </main>

      <footer className="border-t border-white/5 py-12 px-6 lg:px-20 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo />
        <div className="flex gap-4 text-[10px] text-white/40 uppercase tracking-widest font-bold">
          <span>© 2026 OBOLUS CONFIDENTIAL VAULT</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
        </div>
      </footer>
    </div>
  );
}
