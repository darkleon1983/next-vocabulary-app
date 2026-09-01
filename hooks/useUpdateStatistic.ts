import { useState } from "react";

type Statistic = {
  correctAnswers: number;
  wrongAnswers: number;
};

const useUpdateStatistic = () => {
  const [statistic, setStatistic] = useState({
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  function updateStatistic(field: keyof Statistic) {
    setStatistic((prev) => ({
      ...prev,
      [field]: prev[field] + 1,
    }));
  }
  return {
    statistic,
    updateStatistic,
  };
};

export default useUpdateStatistic;
