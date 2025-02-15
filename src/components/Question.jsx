function Question({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="questionCont">
      <h4>{question.question}</h4>
      <div className="optionsCont">
        {question.options.map((option) => {
          return (
            <button
              className="optionBtn btn"
              key={option}
              disabled={hasAnswered}
              onClick={() => dispatch({ type: "finish" })}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Question;
