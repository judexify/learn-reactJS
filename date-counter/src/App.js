import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function handleNext() {
    setCount((s) => s + step);
  }
  function handlePrevious() {
    setCount((s) => s - step);
  }

  function handleNextSteps() {
    setStep((s) => s + 4);
  }
  function handlePreviousSteps() {
    if (count <= 0) return;
    setStep((s) => s - 4);
  }

  return (
    <div className="App">
      <Step
        step={step}
        handleNextSteps={handleNextSteps}
        handlePreviousSteps={handlePreviousSteps}
      />
      <Count
        count={count}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      <CurDate count={count} />
    </div>
  );
}

function Step({ step, handleNextSteps, handlePreviousSteps }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button onClick={handlePreviousSteps}>-</button>
      <p>Step: {step}</p>
      <button onClick={handleNextSteps}>+</button>
    </div>
  );
}
function Count({ count, handleNext, handlePrevious }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-30px",
      }}
    >
      <button onClick={handlePrevious}>-</button>
      <p>Count:{count}</p>
      <button onClick={handleNext}>+</button>
    </div>
  );
}

function CurDate({ count }) {
  const dates = new Date();
  const future = new Date(dates);
  future.setDate(future.getDate() + count);

  return count === 0 ? (
    <b>Today is {dates.toDateString()}</b>
  ) : (
    <b>
      {count > 0
        ? `${count} days from today is ${future.toDateString()}`
        : `${Math.abs(count)} days ago was ${future.toDateString()}`}
    </b>
  );
}
export default App;
