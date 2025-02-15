import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Main from "./components/Main";
import Error from "./components/Error";
import QuizApp from "./pages/QuizApp";
import FinishApp from "./pages/FinishApp";
import { useQuiz } from "./contexts/QuizContext";

function App() {
  const { status } = useQuiz();
  return (
    <div className="page">
      <Header />
      <Main>
        {status === "error" && <Error />}
        {status === "loading" && <Loader />}
        {status === "ready" && <Homepage />}
        {status === "active" && <QuizApp />}
        {status === "finished" && <FinishApp />}
      </Main>
      <Footer />
    </div>
  );
}

export default App;
