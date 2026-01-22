import Link from "next/link";
import { Twitter, Github, Linkedin, Disc } from "lucide-react";

const footerData = {
  product: [
    { label: "Features", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0A0C10] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold text-white mb-6 block tracking-tight"
            >
              OVERLIX
            </Link>
            <p className="text-gray-500 mb-6 max-w-sm">
              Empowering the next generation of digital communities with robust
              infrastructure and seamless connectivity.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin, Disc].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              {footerData.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              {footerData.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerData.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Genoract JSC. All rights reserved.
          </p>
          <div className="flex gap-6 items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-500 text-sm font-mono">
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
