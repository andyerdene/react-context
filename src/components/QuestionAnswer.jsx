import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import { useQuestionData, useTheme } from "@/context";

export default function QuestionAnswer() {
  const { data, setData } = useQuestionData();
  const { theme } = useTheme();
  const answers = data.answers;
  const divClassName = `w-3/4 ${
    theme == "light" ? "bg-red-200" : "bg-green-700"
  }`;
  return (
    <div className={divClassName}>
      <Question />
      {answers.map((answer, index) => {
        return <Answer key={index} index={index} />;
      })}
    </div>
  );
}
