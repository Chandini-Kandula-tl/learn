"use client";
import { Provider } from "react-redux";
import { dataStore } from "../store";
import { ReactNode } from "react";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={dataStore}>{children}</Provider>;
};

export default ReduxProvider;
