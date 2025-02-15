import Button from "../components/Button";
import { useQuiz } from "../contexts/QuizContext";

function Homepage() {
  const { dispatch, numOfQuestions } = useQuiz();
  return (
    <div className="welcomeCont">
      <h1>Welcome to Brainare – The Ultimate Millionaire Quiz Challenge!</h1>
      <p>
        Think you have what it takes to climb to the top and claim the ultimate
        prize? Brainare is the ultimate test of knowledge, strategy, and nerve.
        Answer increasingly <strong>{numOfQuestions}</strong> difficult
        questions, use lifelines wisely, and see if you can make it all the way
        to the million! Will you rise to the challenge or crack under the
        pressure? Play now and prove you're the true quiz champion!
      </p>

      <Button
        className="startBtn btn"
        onClick={() => dispatch({ type: "start" })}
      >
        Start
      </Button>
    </div>
  );
}

export default Homepage;
