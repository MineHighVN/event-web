"use client"; 

import { useState } from 'react';
import { Facebook, Disc, ChevronDown } from 'lucide-react';
import Link from 'next/link';

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    width="20" 
    height="20"
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const footerData = [
  { 
    title: "About Us", 
    links: [
      { label: "Announcements", href: "https://discordapp.com/channels/1424731700448989359/1425028454906331228" },
      { label: "Downloads", href: "/downloads" },
      { label: "Privacy Policy", href: "https://docs.overlix.net/en/overlix/pp" }, 
      { label: "Terms of Use", href: "https://docs.overlix.net/en/overlix/tos" }
    ] 
  },
  { 
    title: "Products", 
    links: [
      { label: "Academy", href: "/products/academy" },
      { label: "Feedback", href: "https://discordapp.com/channels/1424731700448989359/1425011795336233041" },
      { label: "Help", href: "/help" }
    ] 
  },
  { 
    title: "Support", 
    links: [
      { label: "Support Center", href: "/support" },
      { label: "CTO", href: "/team/cto" },
      { label: "CEO", href: "/team/ceo" }
    ] 
  },
];

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    // Chỉ toggle trên mobile
    if (window.innerWidth < 768) {
      setOpenSection(openSection === title ? null : title);
    }
  };

  return (
    <footer className="bg-brand-gray text-gray-400 px-6 md:px-20 py-16 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex gap-4 mb-6 md:mb-0 items-center">
          <DiscordIcon className="hover:text-white cursor-pointer transition-colors" />
          <Facebook size={20} className="hover:text-white cursor-pointer transition-colors" />
        </div>

        {footerData.map((section) => (
          <div key={section.title} className="border-b border-gray-800 md:border-none pb-4 md:pb-0">
            <div 
              className="flex justify-between items-center cursor-pointer md:cursor-default"
              onClick={() => toggleSection(section.title)}
            >
              <h4 className="text-white font-semibold uppercase text-sm tracking-wider">{section.title}</h4>
              <ChevronDown size={18} className={`md:hidden transition-transform ${openSection === section.title ? 'rotate-180' : ''}`} />
            </div>
            
            <ul className={`mt-4 space-y-3 overflow-hidden transition-all duration-300 ${
              openSection === section.title || typeof window !== 'undefined' && window.innerWidth >= 768 
              ? 'max-h-40 opacity-100' 
              : 'max-h-0 opacity-0 md:max-h-full md:opacity-100'
            }`}>
              {section.links.map((link) => (
  <li key={link.label}> {/* Dùng link.label làm key (là một chuỗi) */}
    <Link 
      href={link.href} 
      className="hover:text-white cursor-pointer text-sm transition-colors"
    >
      {link.label} {/* Hiển thị thuộc tính label thay vì cả object link */}
    </Link>
  </li>
))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}