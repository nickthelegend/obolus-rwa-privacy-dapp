"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "./Header";

export const Footer = () => (
    <footer className="border-t border-white/5 py-12 px-6 lg:px-20 max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo />
        <div className="flex gap-4 text-[10px] text-white/40 uppercase tracking-widest font-bold">
            <span>© 2026 OBOLUS CONFIDENTIAL VAULT</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
        </div>
    </footer>
);
