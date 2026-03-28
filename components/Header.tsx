"use client";

import React from "react";
import Link from "next/link";

export const Logo = () => (
  <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
    <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-[#ccff00] text-xs">
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" /></svg>
    </div>
    Obolus
  </div>
);

export const Header = ({ transparent = false }: { transparent?: boolean }) => {
  return (
    <header className={`flex items-center justify-between py-6 max-w-[1400px] mx-auto z-50 relative ${transparent ? "" : "px-6 lg:px-20"}`}>
      <Logo />
      <nav className="hidden md:flex items-center gap-8 font-bold text-[10px] tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
        <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        <Link href="/whitepaper" className="hover:text-primary transition-colors">Whitepaper</Link>
        <Link href="/community" className="hover:text-primary transition-colors">Community</Link>
        <Link href="/status" className="hover:text-primary transition-colors">Status</Link>
      </nav>
      <Link
        href="https://app.obolus.network"
        className="bg-black text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
      >
        Launch App
      </Link>
    </header>
  );
};
