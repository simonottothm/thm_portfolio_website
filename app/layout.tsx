import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simon Otto – Performance Marketing & Web-Development (Portfolio)",
  description:
    "Portfolio & Vita von Simon Otto: Performance-Marketing (Meta/TikTok/Google), Landingpages, CRO, Tracking. Jetzt Kontakt aufnehmen.",
  openGraph: {
    title: "Simon Otto – Performance Marketing & Web-Development",
    description:
      "Portfolio & Vita von Simon Otto: Performance-Marketing (Meta/TikTok/Google), Landingpages, CRO, Tracking.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <BackToTop />
        <Toaster />
      </body>
    </html>
  );
}

