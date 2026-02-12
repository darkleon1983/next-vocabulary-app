import React, {
  Children,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type TestContextType = {
  isTrainingStarted: boolean;
  setIsTrainingStarted: (v: boolean) => void;
  isButtonVisible: boolean;
  setIsButtonVisible: (v: boolean) => void;
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
