import style from "./download.module.css";
import { Metadata } from "next";
import { remoteConfigRepo } from "@/repository";
import DownloadSection from "./_sections/DownloadSection";

export const metadata: Metadata = {
  title: "Get Overlix | Fast & Secure",
  // openGraph: {
  //   images: ["/images/download-preview.png"],
  // },
};

export default async function DownloadPage() {
  const appVersion = await remoteConfigRepo.getWindowsLatestVersion();

  return (
    <div className={style.container}>
      <div className={style.backgroundGrid} />
      <div className={style.topGlow} />

      <div className={style.contentWrapper}>
        {/* Version Badge */}
        <div className={style.badge}>
          <span className={style.pulsingDot} />
          <span>Official {appVersion.version}</span>
        </div>

        <h1 className={style.title}>
          Get started with <br />
          <span className={style.gradientText}>Overlix</span>
        </h1>

        <p className={style.subtitle}>
          Experience global low-latency connectivity. <br />
          Download now for your preferred device.
        </p>

        <DownloadSection windowsVersion={appVersion} />
      </div>
    </div>
  );
}
