import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full max-w-md">
      <div className="border-4 border-black bg-white p-8 text-center">
        <h1 className="text-6xl font-black uppercase tracking-tight mb-4">
          404
        </h1>
        <p className="text-sm font-bold uppercase text-neutral-600 mb-6">
          Tautan tidak ditemukan atau sudah kedaluwarsa.
        </p>
        <Link
          href="/"
          className="inline-block border-4 border-black bg-black text-white font-black uppercase px-6 py-3 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0_0_#000]"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}