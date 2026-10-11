import { notFound } from "next/navigation";
import { getLink } from "@/lib/links";
import Countdown from "@/components/Countdown";

export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const data = getLink(code);
  if (!data) notFound();

  return (
    <div className="w-full max-w-md">
      <div className="border-4 border-black bg-white p-8">
        <div className="border-4 border-black bg-black text-white text-xs font-black uppercase inline-block px-3 py-1 mb-4">
          Tautan Aman
        </div>

        {data.thumbnail && (
          <div className="border-4 border-black mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.thumbnail}
              alt="Thumbnail"
              className="w-full h-auto block"
            />
          </div>
        )}

        <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
          Tautan Disiapkan
        </h1>
        <p className="text-sm font-bold uppercase mb-6 text-neutral-600 break-all">
          Kode: {code}
        </p>

        <Countdown target={data.url} code={code} />

        <p className="mt-6 text-xs font-bold uppercase text-neutral-500 text-center">
          Jangan tutup halaman ini
        </p>
      </div>
    </div>
  );
}