import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div style={{ marginLeft: "50px", marginTop: "50px" }}>
      <BillAmount id="billAmount" text="How much Was the bill" />
      <SelfService />
      <FriendService />
      <Recip />
    </div>
  );
}

function BillAmount({ id, text }) {
  const [billAmount, setBillAmount] = useState(null);

  function handleBillAmount(event) {
    setBillAmount(event.target.value);
  }
  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input type="text" id={id} value={billAmount} onChange={handleBillAmount} />
    </div>
  );
}

function SelfService() {
  const [selfService, setSelfService] = useState(0);

  function handleSelfService(event) {
    setSelfService(Number(event.target.value));
  }

  return (
    <div>
      <label htmlFor="selfservice">How Do you love the service </label>
      <select id="selfservice" value={selfService} onChange={handleSelfService}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">it was okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Amazing! (20%)</option>
      </select>
    </div>
  );
}

function FriendService() {
  const [friendService, setfriendService] = useState(0);

  function handleFriendService(event) {
    setfriendService(Number(event.target.value));
  }

  return (
    <div>
      <label htmlFor="friendservice">How Do your Friend Like the service </label>
      <select id="friendservice" value={friendService} onChange={handleFriendService}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">it was okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Amazing! (20%)</option>
      </select>
    </div>
  );
}

function Recip() {
  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Recip</h4>

      <p>You Pay: $50 ($45 + $5)</p>
    </div>
  );
}
