import Button from "./Button";

function Error({ dispatch }) {
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
