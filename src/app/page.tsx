import Hero from "./_components/Hero";
import Stats from "./_components/Stats";
import FeaturesGrid from "./_components/Features";
import Pricing from "./_components/Pricing";
import FAQ from "./_components/FAQ";
import CTA from "./_components/CTA";
import LandingLayout from "@/components/layout/LandingLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overlix | Ultra-Fast Global Connectivity",
  description:
    "Experience the next generation of low-latency networking. Secure, stable, and built for modern performance.",
  keywords: [
    "low latency",
    "global connectivity",
    "network acceleration",
    "Overlix",
  ],
  authors: [{ name: "Overlix Team" }, { name: "Genoract JSC" }],
  openGraph: {
    title: "Overlix | Global Low-Latency Client",
    description:
      "Connect to the world with unparalleled speed and stability. Download Overlix today.",
    url: "https://overlix.com",
    siteName: "Overlix",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Overlix Platform Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Overlix | High-Performance Networking",
    description: "The official client for global low-latency connections.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0F1115] text-slate-200 selection:bg-blue-500/30">
      <LandingLayout>
        <Hero />
        <Stats />
        <FeaturesGrid />
        <Pricing />
        <FAQ />
        <CTA />
      </LandingLayout>
    </div>
  );
}
