import React from "react";
import style from "./Container.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
