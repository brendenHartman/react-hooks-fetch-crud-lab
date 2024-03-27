import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionsArr, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(r => r.json())
    .then((data) => setQuestions(data));
  }, []);

  function handleFormSubmit(newQues){
    setQuestions([...questionsArr, newQues])
  }

   function handleQuestionDelete(questionID){
    console.log(questionID)
    setQuestions(questionsArr.filter((ques) => ques.id != questionID))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={handleFormSubmit}/> : <QuestionList questionsToDisplay={questionsArr} onDelete={handleQuestionDelete}/>}
    </main>
  );
}

export default App;
