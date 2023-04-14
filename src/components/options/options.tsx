import React, { FC, useContext } from "react";
import Input from "../UI/input/input";
import iconDollar from "../../images/icon-dollar.svg";
import iconPerson from "../../images/icon-person.svg";
import styles from "./options.module.scss";
import { AppContext } from "../context";
import { percentageButtons } from "../../utils";
import Button from "../UI/button/button";

const Options: FC = () => {
  const { total, setTotal, numberOfPeople, setNumberOfPeople, tip, setTip } =
    useContext(AppContext);

  return (
    <div className={styles.options}>
      <Input
        icon={iconDollar}
        iconAlt="Dollar Icon"
        label="Bill"
        value={total ?? ""}
        onChange={setTotal}
        hasDot
        min={0}
        max={99999.99}
      />
      <div className={styles.buttonContainer}>
        {percentageButtons.map((button) => (
          <Button
            name={button}
            onClick={() => setTip(button)}
            selected={tip === button}
            key={button}
          />
        ))}
        <Input
          value={tip ?? ""}
          onChange={setTip}
          placeholder="Custom"
          hasDot={false}
          min={0}
          max={100}
        />
      </div>
      <Input
        icon={iconPerson}
        iconAlt="Person Icon"
        label="Number of People"
        value={numberOfPeople ?? ""}
        onChange={setNumberOfPeople}
        hasDot={false}
        min={1}
        max={100}
      />
    </div>
  );
};

export default Options;
