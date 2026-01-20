import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "Perfect for hobbyists and students.",
    features: [
      "2 Servers",
      "Community Support",
      "Basic Analytics",
      "1GB Storage",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    desc: "For power users and creators.",
    features: [
      "Unlimited Servers",
      "Priority Support",
      "Real-time Metrics",
      "50GB Storage",
      "Custom Domain",
    ],
    highlight: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/mo",
    desc: "Scale your community.",
    features: [
      "Everything in Pro",
      "Dedicated IP",
      "DDoS Insurance",
      "Team Management",
      "API Access",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-32 bg-[#0F1115]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400">Choose the plan that fits your needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col ${
                plan.highlight
                  ? "bg-[#15171C] border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.1)] scale-105 z-10"
                  : "bg-[#0A0C10] border-white/5 hover:border-white/10"
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-6">{plan.desc}</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500">{plan.period}</span>
                )}
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-3 text-gray-300 text-sm"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-blue-400" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.highlight
                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
