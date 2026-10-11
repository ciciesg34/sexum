export default function Home() {
  return (
    <div className="w-full max-w-lg">
      <div className="border-4 border-black bg-white p-8 mb-6">
        <h1 className="text-5xl font-black uppercase tracking-tight leading-none mb-3">
          Pendekkan
          <br />
          Tautan
        </h1>
        <p className="text-sm font-bold uppercase text-neutral-600">
          Ubah URL panjang jadi pendek dalam hitungan detik.
        </p>
      </div>

      <form className="border-4 border-black bg-white p-6 space-y-4">
        <label className="block">
          <span className="block text-xs font-black uppercase mb-2">
            URL Panjang
          </span>
          <input
            type="url"
            placeholder="https://contoh.com/url-panjang-anda"
            className="w-full border-4 border-black px-4 py-3 font-bold outline-none focus:bg-neutral-100"
          />
        </label>

        <button
          type="submit"
          className="w-full border-4 border-black bg-[var(--accent)] text-white font-black uppercase text-lg py-4 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all shadow-[6px_6px_0_0_#000]"
        >
          Pendekkan Sekarang
        </button>
      </form>

      <div className="border-4 border-black bg-white p-6 mt-6">
        <h2 className="text-xs font-black uppercase mb-3 text-neutral-600">
          Cara Kerja
        </h2>
        <ol className="space-y-2 text-sm font-bold uppercase">
          <li>01 — Masukkan URL panjang</li>
          <li>02 — Klik tombol pendekkan</li>
          <li>03 — Salin tautan pendek Anda</li>
        </ol>
      </div>
    </div>
  );
}