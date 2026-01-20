import Image from "next/image";
import { Download, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0F1115]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-100 bg-blue-600/20 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Overlix v1.0 is live
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
          The future of <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-pink-400">
            digital connection
          </span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience low-latency global networking designed for gamers and
          developers. Build, play, and connect without boundaries using Overlix
          infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/download"
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Download size={20} />
            Download App
          </Link>
          <button className="w-full sm:w-auto px-8 py-4 bg-[#1A1D23] text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-[#252830] transition-all flex items-center justify-center gap-2">
            <Play size={20} className="fill-white" />
            Watch Demo
          </button>
        </div>

        <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0b0e]">
          <div className="absolute inset-0 bg-linear-to-t from-[#0F1115] via-transparent to-transparent z-10" />
          <Image
            src="/assets/hero-banner.jpg"
            alt="App Interface"
            fill
            className="object-cover opacity-80 hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
