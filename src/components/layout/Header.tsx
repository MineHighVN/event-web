"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, UserCircle2, Sparkles, Gift } from "lucide-react";
import AuthModal from "../auth/AuthModal";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Support", href: "/support" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <>
      <header className="fixed top-4 inset-x-4 md:top-6 md:inset-x-10 z-[100] transition-all">
        <div className="container mx-auto bg-black/60 backdrop-blur-xl border border-white/10 py-3 md:py-5 px-6 rounded-[2rem] flex justify-between items-center shadow-2xl">
          
          {/* LOGO */}
          <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic shrink-0">
            OVERLIX
          </Link>

          <div className="flex items-center gap-2 md:gap-8">
            
            {/* 1. PC: EVENT BUTTON CÓ HỘP QUÀ ĐÍNH Ở GÓC */}
            <Link 
              href="/event" 
              className="relative hidden sm:flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-yellow-500 to-orange-600 text-black text-[10px] md:text-xs font-black rounded-full shadow-[0_0_15px_rgba(245,158,11,0.4)] uppercase italic group"
            >
              <Sparkles size={14} />
              genoreact EVENT
              {/* Hộp quà đính góc trên bên phải */}
              <div className="absolute -top-2 -right-2 bg-white text-yellow-600 p-1 rounded-full shadow-lg border border-yellow-500 group-hover:scale-110 transition-transform">
                <Gift size={14} className="animate-bounce" />
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-widest">
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* LOGIN ICON  */}
            <button 
              onClick={() => setIsAuthOpen(true)}
              className="p-2 md:px-5 md:py-2 bg-white text-black rounded-full flex items-center gap-2 hover:bg-gray-200 transition-all active:scale-90 shrink-0"
            >
              <UserCircle2 size={20} />
              <span className="text-xs font-black uppercase">Login</span>
            </button>

            {/* 2. MOBILE: ICON 3 GẠCH CÓ HỘP QUÀ KHI ĐANG ĐÓNG */}
            <button className="md:hidden text-white p-1 relative" onClick={() => setIsMenuOpen(true)}>
              {!isMenuOpen && (
                <div className="absolute -top-1 -right-1">
                  <Gift size={16} className="text-yellow-500 animate-pulse" />
                </div>
              )}
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE NAVIGATION DRAWER */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${isMenuOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMenuOpen(false)} />

        <nav className={`absolute top-0 right-0 h-full w-[75%] bg-[#0a0a0c] border-l border-white/10 p-10 flex flex-col gap-8 transition-transform duration-500 ease-out shadow-2xl ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center mb-8">
            <span className="text-white font-black italic uppercase">Menu</span>
            <button onClick={() => setIsMenuOpen(false)} className="text-white">
              <X size={32} />
            </button>
          </div>

          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-black text-gray-500 hover:text-white uppercase italic tracking-tighter">
              {link.name}
            </Link>
          ))}
          
          {/* 4. MOBILE: Ô EVENT CÓ HỘP QUÀ KHI NAV BAR MỞ */}
          <Link 
            href="/event" 
            onClick={() => setIsMenuOpen(false)}
            className="relative inline-flex items-center gap-3 text-2xl font-black text-yellow-500 uppercase italic tracking-tighter group w-fit"
          >
            genoreact Event
            {/* Hộp quà đính góc cho bản Mobile Menu */}
            <div className="absolute -top-3 -right-6 bg-white text-yellow-600 p-1 rounded-full border border-yellow-500">
              <Gift size={16} className="animate-bounce" />
            </div>
          </Link>
        </nav>
      </div>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
}