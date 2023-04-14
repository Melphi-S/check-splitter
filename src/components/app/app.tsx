import React, { useState } from "react";
import "./app.css";
import logo from "../../images/logo.svg";
import Main from "../main/main";
import { AppContext } from "../context";

function App() {
  const [total, setTotal] = useState<string | null>(null);
  const [tip, setTip] = useState<string | null>(null);
  const [numberOfPeople, setNumberOfPeople] = useState<string | null>(null);

  console.log(total, tip, numberOfPeople);

  return (
    <div className="App">
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
