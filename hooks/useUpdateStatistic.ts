import { useState } from "react";

type Statistic = {
  correctAnswers: number;
  wrongAnswers: number;
};

const [statistic, setStatistic] = useState({
  correctAnswers: 0,
  wrongAnswers: 0,
});

const useUpdateStatistic = (field: keyof Statistic) => {
  setStatistic((prev: Statistic) => ({
    ...prev,
    [field]: prev[field] + 1,
  }));
};

export default useUpdateStatistic;
