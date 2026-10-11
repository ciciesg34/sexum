import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shortlink",
  description: "Pendekkan tautan Anda",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b-4 border-black px-6 py-4">
            <a href="/" className="font-black text-xl tracking-tight uppercase">
              Shortlink
            </a>
          </header>

          <main className="flex-1 flex items-center justify-center px-6 py-12">
            {children}
          </main>

          <footer className="border-t-4 border-black px-6 py-4 text-sm font-bold uppercase">
            © 2026 Shortlink
          </footer>
        </div>
      </body>
    </html>
  );
}