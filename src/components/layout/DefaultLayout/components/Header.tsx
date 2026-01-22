"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import styles from "./Header.module.css";
import Button from "@/components/common/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Games", href: "/games" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Overlix<span className={styles.logoHighlight}>Blog</span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    pathname === link.href ? styles.active : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <Button variant="outline">Sign In</Button>
            <Button>Subscribe</Button>
          </div>
        </nav>

        <div className={styles.actions}>
          <button className={styles.iconBtn}>
            <Search size={20} />
          </button>
          <div className={styles.desktopButtons}>
            <Button variant="outline">Sign In</Button>
            <Button>Subscribe</Button>
          </div>
          <button className={styles.menuBtn} onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && <div className={styles.overlay} onClick={toggleMenu} />}
    </header>
  );
};

export default Header;
