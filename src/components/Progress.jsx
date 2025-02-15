function Progress({ numOfQuestions, index, answer, points, maxPoints }) {
  return (
    <div className="progressCont">
      <progress max={numOfQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numOfQuestions}
      </p>
      <p>
        Points <strong>{points}</strong> / {maxPoints}
      </p>
    </div>
  );
}

export default Progress;
