import React from "react";
import styles from "./main.module.scss";
import Options from "../options/options";
import Result from "../result/result";

const Main = () => {
  return (
    <div className={styles.main}>
      <Options />
      <Result />
    </div>
  );
};

export default Main;