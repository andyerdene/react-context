import React, { useContext, createContext, useState } from "react";

const QuestionContext = createContext();
export const useQuestionData = () => useContext(QuestionContext);

export function QuestionProvider({ children }) {
  const [data, setData] = useState(dummyData);
  const [count, setCount] = useState(0);

  return (
    <QuestionContext.Provider value={{ data, setData, count, setCount }}>
      {children}
    </QuestionContext.Provider>
  );
}

const dummyData = {
  question: {
    title: "Push method in React Hooks (useState)?",
    detail:
      "How to push element inside useState array React hook? Is that as an old method in react state? Or something new? E.g. setState push example ?",
  },
  answers: [
    {
      text: "You can use the spread operator to push an element to an array in React Hooks:",
      rating: 10,
    },
    {
      text: "lorem 10",
      rating: 9,
    },
    {
      text: "lorem 3",
      rating: 11,
    },
  ],
};
