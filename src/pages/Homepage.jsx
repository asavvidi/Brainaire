import Button from "../components/Button";
import { useQuiz } from "../contexts/QuizContext";

function Homepage() {
  const { dispatch, numOfQuestions } = useQuiz();
  return (
    <div className="welcomeCont">
      <h1>Welcome to Brainare – The Ultimate Millionaire Quiz Challenge!</h1>
      <p>
        Think you have what it takes to climb to the top and prove your
        knowledge? Brainaire is the ultimate test of trivia, speed, and
        accuracy. Answer <strong>{numOfQuestions}</strong> challenging
        questions, stay sharp under pressure, and see if you can achieve the
        highest score! Will you rise to the challenge or fall short? Play now
        and show the world you're the true quiz champion!
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
