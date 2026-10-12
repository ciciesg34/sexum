import { ImageResponse } from "next/og";
import { getLink } from "@/lib/links";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default async function Image({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const data = getLink(code);

  let imageSrc: string | null = null;

  if (data?.thumbnail) {
    try {
      const res = await fetch(data.thumbnail, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
          Accept: "image/*,*/*;q=0.8",
        },
      });

      if (res.ok) {
        const buf = await res.arrayBuffer();
        const bytes = new Uint8Array(buf);
        let binary = "";
        for (let i = 0; i < bytes.length; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        const base64 = btoa(binary);
        const mime = res.headers.get("content-type") || "image/jpeg";
        imageSrc = `data:${mime};base64,${base64}`;
      }
    } catch {
      imageSrc = null;
    }
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff5ec",
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ff6b00",
              display: "flex",
            }}
          >
            Viseum
          </div>
        )}
      </div>
    ),
    { width: 1200, height: 630 }
  );
}