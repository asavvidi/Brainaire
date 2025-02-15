import Next from "../components/Next.jsx";
import Progress from "../components/Progress.jsx";
import Question from "../components/Question.jsx";
import Timer from "../components/Timer.jsx";
function QuizApp() {
  return (
    <div className="quizApp">
      <Progress />
      <Question />
      <Next />
      <Timer />
    </div>
  );
}

export default QuizApp;
