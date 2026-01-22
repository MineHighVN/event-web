import { ReactNode } from "react";
import style from "./DefaultLayout.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const DefaultLayout = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <Header />
      <main className={style.container}>
        <div className={`${style.insideContainer} ${className}`}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
