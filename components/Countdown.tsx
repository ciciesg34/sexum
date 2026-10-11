"use client";

import { useState, useEffect } from "react";
import { COUNTDOWN_SECONDS } from "@/lib/config";
import ContinueButton from "./ContinueButton";

export default function Countdown() {
  const [sec, setSec] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (sec <= 0) return;
    const t = setTimeout(() => setSec(sec - 1), 1000);
    return () => clearTimeout(t);
  }, [sec]);

  const progress =
    ((COUNTDOWN_SECONDS - sec) / COUNTDOWN_SECONDS) * 100;

  return (
    <div>
      <div className="border-4 border-black bg-black text-white text-5xl font-black text-center py-6">
        {sec > 0 ? sec : "✓"}
      </div>

      <div className="border-4 border-t-0 border-black h-3 relative overflow-hidden">
        <div
          className="bg-[var(--accent)] h-full transition-all duration-1000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {sec > 0 ? (
        <p className="mt-4 text-sm font-bold uppercase text-center">
          Menunggu {sec} detik...
        </p>
      ) : (
        <div className="mt-6">
          <ContinueButton />
        </div>
      )}
    </div>
  );
}