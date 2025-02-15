import Progress from "../components/Progress.jsx";
import Question from "../components/Question.jsx";

function QuizApp({
  index,
  numOfQuestions,
  points,
  maxPoints,
  secondsRemaining,
  question,
  answer,
  dispatch,
}) {
  return (
    <div className="quizApp">
      <Progress
        index={index}
        numOfQuestions={numOfQuestions}
        points={points}
        maxPoints={maxPoints}
        answer={answer}
      />
      <Question answer={answer} question={question} dispatch={dispatch} />
    </div>
  );
}

export default QuizApp;
