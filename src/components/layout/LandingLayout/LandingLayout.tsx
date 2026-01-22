import Header from "./components/Header";
import Footer from "./components/Footer";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
