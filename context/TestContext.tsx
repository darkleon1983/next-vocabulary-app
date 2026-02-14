"use client";

import React, {
  Children,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type TestContextType = {
  isTrainingStarted: boolean;
  setIsTrainingStarted: Dispatch<SetStateAction<boolean>>;
  isButtonVisible: boolean;
  setIsButtonVisible: Dispatch<SetStateAction<boolean>>;
};
const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: ReactNode }) {
  const [isTrainingStarted, setIsTrainingStarted] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  return (
    <TestContext.Provider
      value={{
        isTrainingStarted,
        setIsTrainingStarted,
        isButtonVisible,
        setIsButtonVisible,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const ctx = useContext(TestContext);
  if (!ctx) throw new Error("useTest must be used inside TestProvider");
  return ctx;
}
