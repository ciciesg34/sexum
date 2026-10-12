import { ImageResponse } from "next/og";
import { getLink } from "@/lib/links";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const data = getLink(code);

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
        {data?.thumbnail ? (
          <img
            src={data.thumbnail}
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