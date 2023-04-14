import React, { createContext, Dispatch, SetStateAction } from "react";

interface IAppContext {
  total: string | null;
  tip: string | null;
  numberOfPeople: string | null;
  setTotal: Dispatch<SetStateAction<string | null>>;
  setTip: Dispatch<SetStateAction<string | null>>;
  setNumberOfPeople: Dispatch<SetStateAction<string | null>>;
}

const defaultState = {
  total: null,
  tip: null,
  numberOfPeople: null,
  setTotal: () => {},
  setTip: () => {},
  setNumberOfPeople: () => {},
};

export const AppContext = createContext<IAppContext>(defaultState);
