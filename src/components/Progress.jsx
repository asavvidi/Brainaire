import { useQuiz } from "../contexts/QuizContext";

function Progress() {
  const { numOfQuestions, index, answer, points, maxPoints } = useQuiz();
  return (
    <div className="progressCont">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPoints}
      </p>
    </div>
  );
}

export default Progress;
