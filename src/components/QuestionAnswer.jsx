import React from "react";
import Question from "./Question";
import Answer from "./Answer";
import { useQuestionData } from "@/context/QuestionContext";

export default function QuestionAnswer() {
  const { data, setData } = useQuestionData();
  const answers = data.answers;
  return (
    <div className="w-3/4 bg-red-200">
      <Question />
      {answers.map((answer, index) => {
        return <Answer key={index} index={index} />;
      })}
    </div>
  );
}
