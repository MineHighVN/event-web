import { Download, LucideIcon } from "lucide-react";
import styles from "../download.module.css";

interface DownloadCardProps {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
  iconBgClass: string;
  isComingSoon?: boolean;
  buttonText?: string;
  metaText?: string;
}

export const DownloadCard = ({
  title,
  description,
  icon: Icon,
  iconBgClass,
  isComingSoon = false,
  buttonText,
  metaText,
}: DownloadCardProps) => {
  return (
    <div
      className={`${styles.card} ${isComingSoon ? styles.cardFuture : styles.cardActive}`}
    >
      <div className={`${styles.iconWrapper} ${iconBgClass}`}>
        <Icon size={32} />
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>

      <div className={styles.cardDesc}>{description}</div>

      {isComingSoon ? (
        <button className={styles.disabledBtn}>Coming Soon</button>
      ) : (
        <button className={styles.downloadBtn}>
          <Download size={20} />
          {buttonText}
        </button>
      )}

      {metaText && <div className={styles.meta}>{metaText}</div>}
    </div>
  );
};
