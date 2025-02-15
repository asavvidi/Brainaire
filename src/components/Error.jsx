import Button from "./Button";
import { useQuiz } from "../contexts/QuizContext";

function Error() {
  const { dispatch } = useQuiz();
  return (
    <div className="errorCont">
      <p>
        <span>👎</span> There was an error fetching questions
      </p>
      <Button
        className="backBtn btn"
        onClick={() => dispatch({ type: "dataReceived" })}
      >
        Back
      </Button>
    </div>
  );
}

export default Error;
