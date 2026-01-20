import LandingLayout from "@/components/layout/LandingLayout";
import React from "react";

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return <LandingLayout>{children}</LandingLayout>;
}
