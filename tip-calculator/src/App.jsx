import { useState } from "react";
import "./index.css";

export default function App() {
  const [selfService, setSelfService] = useState(0);
  const [friendService, setfriendService] = useState(0);
  const [billAmount, setBillAmount] = useState("");

  return (
    <div style={{ marginLeft: "50px", marginTop: "50px" }}>
      <BillAmount
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        id="billAmount"
        text="How much Was the bill"
      />
      <GetService percent={selfService} setPercent={setSelfService}>
        <label htmlFor="selfservice">How Do you love the service </label>
      </GetService>
      <GetService percent={friendService} setPercent={setfriendService}>
        <label htmlFor="friendservice">How Do your Friend Like the service </label>
      </GetService>
      <Recip selfService={selfService} friendService={friendService} billAmount={billAmount} />
      <Reset
        setBillAmount={setBillAmount}
        setSelfService={setSelfService}
        setfriendService={setfriendService}
      />
    </div>
  );
}

function BillAmount({ billAmount, setBillAmount, id, text }) {
  function handleBillAmount(event) {
    setBillAmount(Number(event.target.value));
  }
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type="number" id={id} value={billAmount} onChange={handleBillAmount} />
    </div>
  );
}

function GetService({ percent, setPercent, children }) {
  function handleService(event) {
    setPercent(Number(event.target.value));
  }

  return (
    <div>
      {children}
      <select id="selfservice" value={percent} onChange={handleService}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">it was okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Amazing! (20%)</option>
      </select>
    </div>
  );
}

function Recip({ selfService, friendService, billAmount }) {
  const tip = ((selfService + friendService) / 2 / 100) * billAmount;
  const bill = billAmount;
  const total = bill + tip;
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Recip</h2>

      <h3>You Pay:{`$${total}($${bill} + $${tip} tip) `}</h3>
    </div>
  );
}

function Reset({ setBillAmount, setSelfService, setfriendService }) {
  function handleReset() {
    setBillAmount("");
    setSelfService(0);
    setfriendService(0);
  }

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
