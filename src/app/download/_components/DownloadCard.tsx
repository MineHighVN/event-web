"use client";

import { Download, LucideIcon } from "lucide-react";
import style from "../download.module.css";

interface DownloadCardProps {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
  iconBgClass: string;
  isComingSoon?: boolean;
  buttonText?: string;
  metaText?: string;
  onClick?: () => void;
}

export const DownloadCard = ({
  title,
  description,
  icon: Icon,
  iconBgClass,
  isComingSoon = false,
  buttonText,
  metaText,
  onClick,
}: DownloadCardProps) => {
  return (
    <div
      className={`${style.card} ${isComingSoon ? style.cardFuture : style.cardActive}`}
    >
      <div className={`${style.iconWrapper} ${iconBgClass}`}>
        <Icon size={32} />
      </div>

      <h3 className={style.cardTitle}>{title}</h3>

      <div className={style.cardDesc}>{description}</div>

      {isComingSoon ? (
        <button className={style.disabledBtn}>Coming Soon</button>
      ) : (
        <button onClick={onClick} className={style.downloadBtn}>
          <Download size={20} />
          {buttonText}
        </button>
      )}

      {metaText && <div className={style.meta}>{metaText}</div>}
    </div>
  );
};
