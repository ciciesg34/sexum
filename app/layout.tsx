import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sexum.vercel.app"),
  title: "Viseum",
  description: "Pendekkan tautan Anda",
  openGraph: {
    title: "Viseum",
    description: "Pendekkan tautan Anda",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="px-6 py-5">
            <div className="max-w-md mx-auto flex items-center justify-center">
              <a
                href="/"
                className="font-bold text-lg tracking-tight text-neutral-900"
              >
                Viseum
              </a>
            </div>
          </header>

          <main className="flex-1 flex items-center justify-center px-6 py-8">
            {children}
          </main>

          <footer className="px-6 py-6 text-xs text-center text-neutral-500">
            © 2026 Viseum — 15319
          </footer>
        </div>
      </body>
    </html>
  );
}