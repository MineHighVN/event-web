import { Monitor, Smartphone, Layers } from "lucide-react";
import styles from "./download.module.css";
import { DownloadCard } from "./_components/DownloadCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Overlix | Fast & Secure",
  // openGraph: {
  //   images: ["/images/download-preview.png"],
  // },
};

export default function DownloadPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundGrid} />
      <div className={styles.topGlow} />

      <div className={styles.contentWrapper}>
        {/* Version Badge */}
        <div className={styles.badge}>
          <span className={styles.pulsingDot} />
          <span>Official Release v1.0.4</span>
        </div>

        <h1 className={styles.title}>
          Get started with <br />
          <span className={styles.gradientText}>Overlix</span>
        </h1>

        <p className={styles.subtitle}>
          Experience global low-latency connectivity. <br />
          Download now for your preferred device.
        </p>

        <div className={styles.platformGrid}>
          {/* Windows */}
          <DownloadCard
            title="Windows"
            icon={Monitor}
            iconBgClass={styles.bgBlue}
            buttonText="Download .exe"
            metaText="64-bit • v1.0.4 • 68MB"
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
            iconBgClass={styles.bgGreen}
            buttonText="Download .apk"
            metaText="ARM64 • v1.0.4 • 42MB"
            description={
              <>
                Manage your connection on the go.
                <br />
                Supports Android 10+. Battery-optimized and stable background
                tasks.
              </>
            }
          />

          {/* Future Platforms */}
          <DownloadCard
            title="Other Platforms"
            icon={Layers}
            iconBgClass={styles.bgGray}
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
      </div>
    </div>
  );
}
