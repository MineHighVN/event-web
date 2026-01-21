"use client";

import { Layers, Monitor, Smartphone } from "lucide-react";
import style from "../download.module.css";
import { DownloadCard } from "../_components/DownloadCard";
import { AppVersionModel } from "@/models/version.model";

const DownloadSection = ({
  windowsVersion,
}: {
  windowsVersion: AppVersionModel;
}) => {
  return (
    <div className={style.platformGrid}>
      {/* Windows */}
      <DownloadCard
        title="Windows"
        icon={Monitor}
        iconBgClass={style.bgBlue}
        buttonText="Download .exe"
        metaText="64-bit • v1.0.4"
        onClick={() => {
          window.open(windowsVersion.downloadUrl, "_blank");
        }}
        description={
          <>
            The standard edition for PC & Laptop.
            <br />
            Supports Windows 10/11 (64-bit). Integrated GPU acceleration.
          </>
        }
      />

      {/* Android */}
      <DownloadCard
        title="Android"
        icon={Smartphone}
        iconBgClass={style.bgGreen}
        buttonText="Google Play"
        metaText="ARM64 • v1.0.4"
        onClick={() => {
          window.open(
            "https://play.google.com/store/apps/details?id=net.overlix",
            "_blank",
          );
        }}
        description={
          <>
            Manage your connection on the go.
            <br />
            Supports Android 10+. Battery-optimized and stable background tasks.
          </>
        }
      />

      {/* Future Platforms */}
      <DownloadCard
        title="Other Platforms"
        icon={Layers}
        iconBgClass={style.bgGray}
        isComingSoon
        description={
          <>
            Currently in development for:
            <span className="block mt-2 text-sm text-gray-500">
              • macOS (M1/M2/Intel) <br />
              • iOS (iPhone/iPad) <br />• Linux & Server CLI
            </span>
          </>
        }
      />
    </div>
  );
};

export default DownloadSection;
