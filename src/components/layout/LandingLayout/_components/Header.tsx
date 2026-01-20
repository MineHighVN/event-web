"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, Gift, Zap } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Ecosystem", href: "/products" },
  { name: "Developers", href: "/dev" },
  { name: "Support", href: "/support" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#0F1115]/80 backdrop-blur-xl border-white/5 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg  transition-all">
              <Image
                src={"/assets/icon.png"}
                width={64}
                height={64}
                alt="Navbar Overlix Icon"
              />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              OVERLIX
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/event"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-yellow-400 text-xs font-bold uppercase tracking-wider border border-white/10 transition-all hover:scale-105"
            >
              <Gift size={14} />
              <span>Events</span>
            </Link>

            <button className="bg-white text-black hover:bg-gray-200 px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2">
              Get Started
              <ArrowRight size={16} />
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 bg-[#0F1115] transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-12">
            <span className="text-xl font-bold text-white">MENU</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white"
            >
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-bold text-gray-500 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <Link
              href="/event"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-linear-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 text-yellow-500 font-bold"
            >
              <Zap size={20} />
              Current Events
            </Link>
            <button className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg">
              Login Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
