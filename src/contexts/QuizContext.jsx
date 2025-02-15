import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QUESTION = 20;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "playerAnswered":
      const question = state.questions.at(state.index);
      if (!question) return state;

      const isCorrect = action.payload === question.correctOption;

      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
        secondsRemaining: state.secondsRemaining - (isCorrect ? 0 : 10),
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return { ...initialState, status: "ready", questions: state.questions };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error(`Action unknown `);
  }
}
function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, secondsRemaining, points, highscore },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numOfQuestions = questions.length;
  const maxPoints = questions.reduce((prev, curr) => {
    return prev + curr.points;
  }, 0);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const response = await fetch("http://localhost:9000/questions");
        if (!response.ok) throw new Error("Failed to fetch questions");
        const data = await response.json();

        const shuffleQuestions = [...data].sort(() => Math.random() - 0.5);
        dispatch({ type: "dataReceived", payload: shuffleQuestions });
      } catch (error) {
        dispatch({ type: "dataFailed" });
        console.error("Error fetching data:", error);
      }
    }
    fetchQuestions();
  }, []);
  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numOfQuestions,
        maxPoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error(`QuizContext was used outside of the QuizProvider`);
  }
  return context;
}

export { QuizProvider, useQuiz };
