import { Zap, Shield, Smartphone, Globe } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="py-32 bg-[#0F1115] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-125 h-125 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything you need to <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              build & connect
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            Powerful features packed into a beautiful interface. Designed for
            performance, built for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-[#15171C] border border-white/5 hover:border-white/10 transition-all group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Globe size={200} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                <Globe size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Global Edge Network
              </h3>
              <p className="text-gray-400 max-w-sm">
                Connect from anywhere with our distributed edge network ensuring
                sub-30ms latency worldwide.
              </p>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#1A1D23] border border-white/5 hover:border-white/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <Zap size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Instant Sync</h3>
            <p className="text-gray-400">
              Real-time data synchronization across all connected clients.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#1A1D23] border border-white/5 hover:border-white/10 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              DDos Protection
            </h3>
            <p className="text-gray-400">
              Enterprise-grade mitigation against all layout 3/4/7 attacks.
            </p>
          </div>

          <div className="md:col-span-2 p-8 rounded-3xl bg-[#15171C] border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-linear-to-tl from-blue-600/20 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-pink-500/20 flex items-center justify-center text-pink-400 mb-6">
                <Smartphone size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Cross-Platform Native
              </h3>
              <p className="text-gray-400 max-w-md">
                Whether you are on iOS, Android, Windows, or Linux, Overlix
                provides a consistent, high-performance experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
