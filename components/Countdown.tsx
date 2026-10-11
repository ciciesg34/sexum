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
      <div className="mt-6">
        <a
          href={target}
          className="block border-4 border-black bg-[var(--accent)] text-white text-center font-black uppercase text-xl py-5 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0_0_#000]"
        >
          Buka Tautan Tujuan
        </a>
      </div>
    );
  }

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
          <button
            onClick={handleClick}
            className="w-full border-4 border-black bg-[var(--accent)] text-white text-center font-black uppercase text-xl py-5 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0_0_#000]"
          >
            Dapatkan Tautan
          </button>
        </div>
      )}
    </div>
  );
}