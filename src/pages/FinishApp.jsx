import Button from "../components/Button";
import { useQuiz } from "../contexts/QuizContext";

function FinishApp() {
  const { dispatch, points, highscore, maxPoints } = useQuiz();
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="finishPage">
      <p>
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p>(Highscore: {highscore} points)</p>
      <div>
        <Button
          className="restartBtn btn"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </Button>
      </div>
    </div>
  );
}

export default FinishApp;
