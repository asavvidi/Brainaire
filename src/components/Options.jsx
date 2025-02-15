import Button from "./Button";
import { useQuiz } from "../contexts/QuizContext";
function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="optionsCont">
      {question.options.map((option, index) => {
        return (
          <Button
            className={`optionBtn btn ${answer === index ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "playerAnswered", payload: index })}
          >
            {option}
          </Button>
        );
      })}
    </div>
  );
}

export default Options;
