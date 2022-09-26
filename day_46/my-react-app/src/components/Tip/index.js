import React, { useState } from 'react';
import './tip.css';

export default function Tip() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(15);
  const [people, setPeople] = useState(1);

  return (
    <div className="container">
      <section>
        <div className="wrapper">
          <label htmlFor="bill" className="lbl">
            Bill
          </label>
          <div className="input-box">
            <span>$</span>
            <input type="number" value={bill} id="bill" className="val" onChange={e => setBill(Number(e.target.value))} />
          </div>
        </div>
        <div className="wrapper">
          <span className="lbl">Tip</span>
          <span id="tip-amount" className="val">
            ${tip}
          </span>
        </div>
        <hr />
        <div className="wrapper">
          <span className="lbl">Total Amount</span>
          <span id="total-amount" className="val">
            ${bill + (bill * tip) / 100}
          </span>
        </div>
      </section>
      <section>
        <div className="wrapper">
          <label htmlFor="tip" className="lbl">
            Tip %
          </label>
          <span id="tip-percent" className="val">
            {tip}%
          </span>
        </div>
        <input type="range" min="1" id="tip" value={tip} onChange={e => setTip(Number(e.target.value))} />
        <div className="wrapper">
          <label htmlFor="no-of-people" className="lbl">
            No. Of People
          </label>
          <span id="split-num" className="val">
            {people}
          </span>
        </div>
        <input type="range" min="1" max="15" id="no-of-people" value={people} onChange={e => setPeople(Number(e.target.value))} />
      </section>
      <section>
        <div className="wrapper">
          <span className="lbl"> Tip Per Person </span>
          <span id="tip-per-person" className="val">
            ${(tip / people).toFixed(2)}
          </span>
        </div>
        <div className="wrapper">
          <span className="lbl"> Total Per Person </span>
          <span id="total-per-person" className="val">
            ${((bill + tip) / people).toFixed(2)}
          </span>
        </div>
      </section>
    </div>
  );
}
