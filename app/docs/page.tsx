"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DocsRedirect() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://docs.obolus.network";
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#ccff00] flex items-center justify-center font-sans tracking-tighter uppercase font-black text-2xl">
      Redirecting to Official Documentation...
    </div>
  );
}
