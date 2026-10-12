import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-md">
      <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-3xl shadow-[0_20px_60px_-15px_rgba(255,107,0,0.25)] p-8 text-center">
        <h1 className="text-7xl font-bold text-neutral-900 mb-3">404</h1>
        <p className="text-sm font-medium text-neutral-600 mb-6">
          Tautan tidak ditemukan atau sudah kedaluwarsa.
        </p>
        <Link
          href="/"
          className="inline-block font-semibold text-white text-sm px-6 py-3 rounded-2xl bg-gradient-to-b from-[#ff8a2b] to-[#ff6b00] shadow-[0_10px_30px_-5px_rgba(255,107,0,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(255,107,0,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}