"use client";

import { SMARTLINK_URL } from "@/lib/config";

export default function ContinueButton() {
  return (
    <a
      href={SMARTLINK_URL}
      className="block border-4 border-black bg-[var(--accent)] text-white text-center font-black uppercase text-xl py-5 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0_0_#000]"
    >
      Dapatkan Tautan
    </a>
  );
}