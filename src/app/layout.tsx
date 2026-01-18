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
  title: "Overlix 2026 | Truyền Thuyết Khai Xuân",
  description:
    "Tham gia hành trình khai xuân Overlix, hoàn thành nhiệm vụ và nhận những phần quà lì xì độc quyền.",

  icons: {
    icon: [{ url: "/assets/icon.png", type: "image/png" }],
  },

  openGraph: {
    title: "Overlix 2026 | Truyền Thuyết Khai Xuân",
    description: "Hành trình đi tìm Long Mạch Số và nhận lì xì đầu năm.",
    images: [
      {
        url: "/assets/event-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Overlix Event 2026",
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
