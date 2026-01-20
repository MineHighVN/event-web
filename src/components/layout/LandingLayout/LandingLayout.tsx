import Header from "./_components/Header";
import Footer from "./_components/Footer";

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
