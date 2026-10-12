import { notFound } from "next/navigation";
import { getLink } from "@/lib/links";
import Countdown from "@/components/Countdown";
import Histats from "@/components/Histats";

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
        {data.thumbnail && (
          <div className="border-4 border-black mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.thumbnail}
              alt="Thumbnail"
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        )}

        <Countdown target={data.url} code={code} />

        <p className="mt-6 text-xs font-bold uppercase text-neutral-500 text-center">
          Jangan tutup halaman ini
        </p>
      </div>
      <Histats />
    </div>
  );
}