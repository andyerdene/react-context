import React from "react";
import QuestionAnswer from "./QuestionAnswer";
import SideInfo from "./SideInfo";
import { useQuestionData } from "@/context";

export function Right() {
  const { count, setCount } = useQuestionData();

  return (
    <div className="w-3/4 bg-green-300 h-[100vh] flex">
      <QuestionAnswer />
      <SideInfo />
    </div>
  );
}
