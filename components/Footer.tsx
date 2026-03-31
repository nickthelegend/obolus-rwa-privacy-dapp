"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Header";

export const Footer = () => (
    <footer className="border-t border-white/5 py-12 px-6 lg:px-20 max-w-[1400px] mx-auto flex flex-col items-center gap-12">
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col gap-4 max-w-xs text-center md:text-left">
                <Logo />
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold leading-relaxed">
                    Privacy-preserving tokenized equity vault on BNB Chain.
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="https://docs.obolus.network" target="_blank" className="hover:text-white transition-colors">Documentation</Link>
                <Link href="/community" className="hover:text-white transition-colors">Community</Link>
                <Link href="/status" className="hover:text-white transition-colors">Status</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
        </div>

        <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">© 2026 OBOLUS</span>
            <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold italic">
                Powered by Ondo Global Markets × Zama fhEVM
            </span>
        </div>
    </footer>
);
