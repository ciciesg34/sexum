"use client";

import { useState, useEffect } from "react";
import { COUNTDOWN_SECONDS, SMARTLINK_URL } from "@/lib/config";

export default function Countdown({ target, code }: { target: string; code: string }) {
  const [sec, setSec] = useState(COUNTDOWN_SECONDS);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const check = () => {
      const flag = localStorage.getItem(`clicked_${code}`);
      if (flag === "1") setClicked(true);
    };

    check();
    window.addEventListener("pageshow", check);
    window.addEventListener("visibilitychange", check);
    return () => {
      window.removeEventListener("pageshow", check);
      window.removeEventListener("visibilitychange", check);
    };
  }, [code]);

  useEffect(() => {
    if (sec <= 0 || clicked) return;
    const t = setTimeout(() => setSec(sec - 1), 1000);
    return () => clearTimeout(t);
  }, [sec, clicked]);

  const handleClick = () => {
    localStorage.setItem(`clicked_${code}`, "1");
    window.location.href = SMARTLINK_URL;
  };

  const progress = ((COUNTDOWN_SECONDS - sec) / COUNTDOWN_SECONDS) * 100;

  if (clicked) {
    return (
      <div className="mt-1">
        <a
          href={target}
          className="block w-full text-center font-semibold text-white text-base py-4 rounded-2xl bg-gradient-to-b from-[#ff8a2b] to-[#ff6b00] shadow-[0_10px_30px_-5px_rgba(255,107,0,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Buka Tautan Tujuan
        </a>
      </div>
    );
  }

  return (
    <div>
      <div className="relative flex items-center justify-center py-4">
        <span className="text-6xl font-bold text-neutral-900 tabular-nums">
          {sec > 0 ? sec : "✓"}
        </span>
      </div>

      <div className="h-2 rounded-full bg-white/70 overflow-hidden mb-5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#ff8a2b] to-[#ff6b00] transition-all duration-1000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      {sec > 0 ? (
        <p className="text-sm font-medium text-neutral-600 text-center">
          Menunggu {sec} detik...
        </p>
      ) : (
        <button
          onClick={handleClick}
          className="block w-full text-center font-semibold text-white text-base py-4 rounded-2xl bg-gradient-to-b from-[#ff8a2b] to-[#ff6b00] shadow-[0_10px_30px_-5px_rgba(255,107,0,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Dapatkan Tautan
        </button>
      )}
    </div>
  );
}