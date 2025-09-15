import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillLink – Digital Talent Exchange",
  description: "Platform digital yang menghubungkan mahasiswa berbakat dengan UMKM.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gradient-to-b from-amber-50 via-white to-amber-100">
        {children}
      </body>
    </html>
  );
}
