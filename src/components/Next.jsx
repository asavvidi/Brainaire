function Next({ dispatch, index, numOfQuestions, answer }) {
  if (answer === null) return;
  if (index < numOfQuestions - 1)
    return (
      <button
        className="nextBtn btn "
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index === numOfQuestions - 1)
    return (
      <button
        className="nextBtn btn"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default Next;
