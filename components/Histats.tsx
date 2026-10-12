"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    _Hasync?: unknown[];
  }
}

export default function Histats() {
  useEffect(() => {
    window._Hasync = window._Hasync || [];
    window._Hasync.push(["Histats.start", "1,5057691,4,24,200,50,00011111"]);
    window._Hasync.push(["Histats.fasi", "1"]);
    window._Hasync.push(["Histats.track_hits", ""]);

    const hs = document.createElement("script");
    hs.type = "text/javascript";
    hs.async = true;
    hs.src = "//s10.histats.com/js15_as.js";
    (document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]).appendChild(hs);
  }, []);

  return (
    <noscript>
      <a href="/" target="_blank" rel="noopener noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="//sstatic1.histats.com/0.gif?5057691&101"
          alt=""
          style={{ border: 0 }}
        />
      </a>
    </noscript>
  );
}