import React, { useContext, useMemo } from "react";
import styles from "./result.module.scss";
import Button from "../UI/button/button";
import { AppContext } from "../context";

const Result = () => {
  const { total, setTotal, numberOfPeople, setNumberOfPeople, tip, setTip } =
    useContext(AppContext);

  const tipForPerson = useMemo(
    () =>
      total && numberOfPeople && tip
        ? (+total * (parseInt(tip) / 100)) / +numberOfPeople
        : 0,
    [total, numberOfPeople, tip]
  );

  const totalForPerson = useMemo(
    () =>
      (total && numberOfPeople ? +total / +numberOfPeople : 0) + tipForPerson,
    [total, numberOfPeople, tipForPerson]
  );

  const resetOptions = () => {
    setTotal(null);
    setTip(null);
    setNumberOfPeople(null);
  };

  return (
    <div className={styles.result}>
      <div className={styles.info}>
        <span className={styles.value}>Tip Amount</span>
        <span className={styles.person}>/ person</span>
        <span className={styles.sum}>{`$${tipForPerson.toFixed(2)}`}</span>
      </div>
      <div className={styles.info}>
        <span className={styles.value}>Total</span>
        <span className={styles.person}>/ person</span>
        <span className={styles.sum}>{`$${totalForPerson.toFixed(2)}`}</span>
      </div>
      <Button
        name="RESET"
        onClick={resetOptions}
        selected={true}
        disabled={!total || !tip || !numberOfPeople}
      />
    </div>
  );
};

export default Result;
