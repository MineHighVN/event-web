import { Users, Globe2, Activity, Clock } from "lucide-react";

const stats = [
  {
    value: "100K+",
    label: "Active Users",
    icon: Users,
    desc: "Trust Overlix daily",
  },
  {
    value: "< 30ms",
    label: "Global Latency",
    icon: Activity,
    desc: "Optimized routing",
  },
  {
    value: "99.99%",
    label: "Uptime SLA",
    icon: Clock,
    desc: "Always available",
  },
  {
    value: "15+",
    label: "Data Centers",
    icon: Globe2,
    desc: "Worldwide coverage",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-[#0F1115] relative">
      <div className="absolute inset-0 bg-white/5 skew-y-3 transform origin-top-left -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#0A0C10] border border-white/5 hover:border-white/10 hover:bg-[#15171C] transition-all duration-300 group"
            >
              <div className="mb-4 p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <stat.icon size={24} />
              </div>

              <h3 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-white via-gray-200 to-gray-500 mb-2 tracking-tight">
                {stat.value}
              </h3>

              <p className="text-white font-bold text-lg mb-1">{stat.label}</p>

              <span className="text-sm text-gray-500 font-medium">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
