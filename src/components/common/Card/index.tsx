import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";

interface CardProps {
  title: string;
  excerpt: string;
  image?: string;
  category: string;
  date: string;
  author: string;
}

const Card: React.FC<CardProps> = ({
  title,
  excerpt,
  image,
  category,
  date,
  author,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={
            image ||
            "https://placehold.co/600x400/0056b3/ffffff?text=Overlix+Game"
          }
          width={400}
          height={0}
          loading="eager"
          unoptimized
          alt={title}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.footer}>
          <span>{author}</span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
