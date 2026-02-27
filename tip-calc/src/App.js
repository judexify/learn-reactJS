import React from "react";
import { useState } from "react";

function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div className="app">
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectComp percentage={percentage1} onSetPercent={setPercentage1}>
        How did you like the service?
      </SelectComp>
      <SelectComp percentage={percentage2} onSetPercent={setPercentage2}>
        How did your friend like the service
      </SelectComp>

      {bill > 0 ? (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bills in $..."
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
function SelectComp({ children, percentage, onSetPercent }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSetPercent(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%) </option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <p>
      You Pay ${bill + tip} (${bill} + ${`${tip.toFixed(2)}`}) tip
    </p>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
