import Hero from "@/components/sections/Hero";
import Countries from "@/components/sections/Countries";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow">
        <Hero />
        <Countries />
      </main>
      <Footer />
    </div>
  );
}
