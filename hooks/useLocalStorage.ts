import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved) as T;
    }
    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
};

// const handleWrongAswers = () => {
//   setStats((prev) => ({
//     ...prev,
//     wrongAswers: prev.wrongAswers + 1,
//   }));
// }

updateStatistic = (field) => {
  setStats((prev) => ({
    ...prev,
    [field]: prev[field] + 1,
  }));
};
export default useLocalStorage;

type User = {
  firstName: string;
  lastName: string;
  age: number;
  isAdmin: boolean;
};

type Statistic = {
  correctAnswers: number;
  wrongAnswers: number;
};

type UserKeyType = keyof User;

let myVar: UserKeyType = "";

