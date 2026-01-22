import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: 800,
              color: "var(--color-primary)",
            }}
          >
            Overlix
          </h3>
          <p className={styles.brandDesc}>
            Bringing the latest updates on game development, server
            infrastructure, and the Overlix ecosystem.
          </p>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Explore</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Minecraft Servers</a>
            </li>
            <li>
              <a href="#">DevLogs</a>
            </li>
            <li>
              <a href="#">Technology</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Company</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.columnTitle}>Connect</h4>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} Overlix / Genoract JSC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
