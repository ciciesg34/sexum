import { ImageResponse } from "next/og";
import { getLink } from "@/lib/links";
import sharp from "sharp";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

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
        const arrayBuffer = await res.arrayBuffer();
        const inputBuffer = Buffer.from(arrayBuffer);

        // Konversi paksa ke JPEG menggunakan sharp
        const jpegBuffer = await sharp(inputBuffer)
          .resize(1200, 630, { fit: "cover" })
          .jpeg({ quality: 85 })
          .toBuffer();

        imageSrc = `data:image/jpeg;base64,${jpegBuffer.toString("base64")}`;
      }
    } catch (e) {
      console.error("Fetch/convert thumbnail error:", e);
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