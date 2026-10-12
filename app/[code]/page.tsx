import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLink } from "@/lib/links";
import Countdown from "@/components/Countdown";
import Histats from "@/components/Histats";

type Props = {
  params: Promise<{ code: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { code } = await params;
  const data = getLink(code);

  if (!data) {
    return {
      title: "Tidak Ditemukan",
      description: "",
    };
  }

  const baseUrl = "https://tribbo.site";
  const pageUrl = `${baseUrl}/${code}`;

  return {
    metadataBase: new URL(baseUrl),
    title: "Tautan Disiapkan",
    description: "Klik untuk membuka tautan tujuan Anda.",
    alternates: { canonical: pageUrl },
    openGraph: {
      title: "Tautan Disiapkan",
      description: "Klik untuk membuka tautan tujuan Anda.",
      url: pageUrl,
      type: "website",
      images: data.thumbnail
        ? [
            {
              url: data.thumbnail,
              width: 1200,
              height: 630,
              alt: "Thumbnail",
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: "Tautan Disiapkan",
      description: "Klik untuk membuka tautan tujuan Anda.",
      images: data.thumbnail ? [data.thumbnail] : [],
    },
  };
}

export default async function Page({ params }: Props) {
  const { code } = await params;
  const data = getLink(code);
  if (!data) notFound();

  return (
    <div className="w-full max-w-md">
      <div className="backdrop-blur-xl bg-white/60 border border-white/80 rounded-3xl shadow-[0_20px_60px_-15px_rgba(255,107,0,0.25)] p-6">
        {data.thumbnail && (
          <div className="rounded-2xl overflow-hidden mb-5 shadow-lg">
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

        <p className="mt-5 text-[11px] font-medium uppercase tracking-wider text-neutral-500 text-center">
          Jangan tutup halaman ini
        </p>
      </div>
      <Histats />
    </div>
  );
}