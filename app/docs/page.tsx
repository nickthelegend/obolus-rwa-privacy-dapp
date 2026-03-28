"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function Docs() {
    const categories = [
        { title: "Introduction", items: ["Vision", "Architecture", "fhEVM Basics"] },
        { title: "Vaults", items: ["Deposits", "Encrypted Balances", "Withdrawal Logic"] },
        { title: "Privacy", items: ["Reclaim Protocol", "ZK-KYC", "Private Solvency"] },
        { title: "Governance", items: ["Obolus DAO", "Vault Fees", "Incentives"] },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-[#ccff00] selection:text-black">
            <Header />

            <div className="pt-24 flex min-h-screen">
                {/* Sidebar */}
                <aside className="hidden lg:block w-72 border-r border-white/5 p-10 fixed h-full overflow-y-auto">
                    <div className="space-y-10">
                        {categories.map((cat, i) => (
                            <div key={i}>
                                <h4 className="text-[10px] uppercase tracking-widest text-white/20 font-bold mb-4">{cat.title}</h4>
                                <ul className="space-y-3">
                                    {cat.items.map((item, j) => (
                                        <li key={j}>
                                            <a href="#" className="text-sm text-white/40 hover:text-[#ccff00] transition-colors font-medium">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Content */}
                <main className="flex-1 lg:ml-72 p-10 lg:p-20 overflow-y-auto">
                    <motion.div {...fadeInUp} className="max-w-3xl">
                        <h1 className="text-4xl lg:text-7xl font-black mb-6 uppercase tracking-tighter">Documentation</h1>
                        <p className="text-white/60 text-lg leading-relaxed mb-12 font-medium">
                            Welcome to the Obolus Vault technical documentation. Here you'll find everything you
                            need to integrate privacy-preserving equity vaults and fhEVM integration.
                        </p>

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                            {[
                                { title: "fhEVM Guide", desc: "Understanding encrypted state.", icon: "shield" },
                                { title: "Ondo Assets", desc: "GM tokenized stock specs.", icon: "trending_up" },
                                { title: "ZK-Identity", desc: "Reclaim Protocol integration.", icon: "fingerprint" },
                                { title: "Vault API", desc: "REST and GraphQL endpoints.", icon: "terminal" }
                            ].map((card, i) => (
                                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#ccff00]/40 transition-all cursor-pointer group">
                                    <span className="material-symbols-outlined text-[#ccff00] text-3xl mb-4 group-hover:scale-110 transition-transform">{card.icon}</span>
                                    <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">{card.title}</h3>
                                    <p className="text-xs text-white/40 font-medium">{card.desc}</p>
                                </div>
                            ))}
                        </section>

                        <article className="prose prose-invert max-w-none text-white/60">
                            <h2 className="text-white text-3xl font-black mb-6 uppercase tracking-tight">Institutional Privacy</h2>
                            <p className="mb-6 font-medium leading-relaxed">
                                Obolus is built to leverage Fully Homomorphic Encryption (fhEVM) on BNB Chain.
                                Our infrastructure is designed for high-throughput encrypted computations, ensuring 
                                liquidations and entry prices remain hidden from prying eyes.
                            </p>
                            <div className="bg-white/5 rounded-3xl p-8 font-mono text-sm border border-white/10 mb-8 overflow-hidden relative">
                                <span className="text-[#ccff00]/60 font-bold italic">// Initialize Obolus Vault SDK</span><br />
                                <span className="text-white">const vault = new ObolusVault(&#123;</span><br />
                                &nbsp;&nbsp;<span className="text-white">network: 'bnb-mainnet',</span><br />
                                &nbsp;&nbsp;<span className="text-white">encryption: 'fhEVM',</span><br />
                                &nbsp;&nbsp;<span className="text-white">apiKey: process.env.OBOLUS_VAULT_KEY</span><br />
                                <span className="text-white">&#125;);</span>
                                <div className="absolute right-[-20%] bottom-[-20%] text-white/[0.02] text-[150px] font-black pointer-events-none italic uppercase">fhEVM</div>
                            </div>
                        </article>
                    </motion.div>
                </main>
            </div>
            <Footer />
        </div>
    );
}
