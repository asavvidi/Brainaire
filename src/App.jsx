import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Main from "./components/Main";
import Error from "./components/Error";
import { useEffect, useReducer } from "react";
import QuizApp from "./pages/QuizApp";
import FinishApp from "./pages/FinishApp";

const SECS_PER_QUESTIONS = 20;

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  status: "ready",
  secondsRemaining: null,
  highscore: 0,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start": {
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTIONS,
      };
    }

    case "playerAnswered":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + state.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart": {
      return { ...initialState, status: "ready", questions: state.questions };
    }
    default: {
      throw new Error(`Action unknown`);
    }
  }
}
function App() {
  const [
    { questions, index, status, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => {
    return prev + curr.points;
  }, 0);

  useEffect(() => {
    fetch(`http://localhost:9000/questions`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="page">
      <Header />
      <Main>
        {status === "error" && <Error dispatch={dispatch} />}
        {status === "loading" && <Loader />}
        {status === "ready" && (
          <Homepage numOfQuestions={numOfQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <QuizApp
            index={index}
            numOfQuestions={numOfQuestions}
            points={points}
            maxPoints={maxPoints}
            secondsRemaining={secondsRemaining}
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
          />
        )}
        {status === "finished" && (
          <FinishApp
            dispatch={dispatch}
            points={points}
            maxPoints={maxPoints}
            highscore={highscore}
          />
        )}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
