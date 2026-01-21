import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Overlix | Play and Connect",
  description:
    "Explore the Overlix ecosystem, unlock exclusive rewards, and experience the next generation of digital innovation",

  icons: {
    icon: [{ url: "/assets/icon.png", type: "image/png" }],
  },

  openGraph: {
    title: "Overlix | Play and Connect",
    description:
      "Join the Overlix community to discover new opportunities and exclusive platform benefits",
    images: [
      {
        url: "/assets/brand-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Overlix Platform",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
