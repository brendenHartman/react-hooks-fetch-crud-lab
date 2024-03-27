import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionsToDisplay, onDelete }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsToDisplay.map((question) => <QuestionItem key={question.id} question={question} onDelete={onDelete}/>)}</ul>
    </section>
  );
}

export default QuestionList;
