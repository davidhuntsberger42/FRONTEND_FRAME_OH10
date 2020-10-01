import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onReset, onInptNum, onChangedInNum, numSet, trackClick }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br />
          <p>Number of clicks on counter "+" and "-" buttons: {trackClick}</p>
          <br />
          <input type="text" onChange={event => onChangedInNum(event.target.value)} value={numSet} />
          <button onClick={onInptNum}>Change the counter.</button>
        </div>
      </div>
    );
}


export default Counter;