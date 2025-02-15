import Next from "../components/Next.jsx";
import Progress from "../components/Progress.jsx";
import Question from "../components/Question.jsx";
import Timer from "../components/Timer.jsx";
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
      <Question
        answer={answer}
        question={question}
        dispatch={dispatch}
        secondsRemaining={secondsRemaining}
        index={index}
      />

      <Next
        dispatch={dispatch}
        answer={answer}
        numOfQuestions={numOfQuestions}
        index={index}
      />

      <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
    </div>
  );
}

export default QuizApp;
