export default function CTA() {
  return (
    <section className="py-32 bg-[#0F1115] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-3xl mx-auto tracking-tight">
          Ready to start your journey?
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Join thousands of developers and gamers building the future of
          connectivity today.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get Started for Free
          </button>
          <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
