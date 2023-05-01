import React, { useState } from "react";
import styles from "./app.module.scss";
import logo from "../../images/logo.svg";
import Main from "../main/main";
import { AppContext } from "../context";

function App() {
  const [total, setTotal] = useState<string | null>(null);
  const [tip, setTip] = useState<string | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState<string | null>(null);

  return (
    <div className={styles.app}>
      <img src={logo} alt="logo." />
      <AppContext.Provider
        value={{
          total,
          tip,
          numberOfPeople,
          setTotal,
          setTip,
          setNumberOfPeople,
        }}
      >
        <Main />
      </AppContext.Provider>
    </div>
  );
}

export default App;
