"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Overlix free to use?",
    a: "Yes, we offer a generous free tier that includes everything you need to get started with personal projects.",
  },
  {
    q: "How secure is the connection?",
    a: "We use military-grade AES-256 encryption for all data in transit. Your privacy is our top priority.",
  },
  {
    q: "Can I host my own server?",
    a: "Absolutely. Overlix provides Docker containers that you can deploy on your own infrastructure.",
  },
  {
    q: "What platforms are supported?",
    a: "Currently we support Windows, macOS, Linux, iOS, and Android.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0A0C10] border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/5 rounded-2xl bg-[#15171C] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-medium text-white">{faq.q}</span>
                {openIndex === i ? (
                  <Minus size={20} className="text-gray-400" />
                ) : (
                  <Plus size={20} className="text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 text-gray-400 overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
