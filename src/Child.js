import React, { useContext } from 'react';
import counterContext from './CounterContext.js';

function Child() {
    let counter = useContext(counterContext);
    console.log(counter);
    
    return (
        <div>
            <h1>We are in Child : Using useContext</h1>
            <h2>Counter Value is: {counter[0]}</h2>
            <button onClick={()=>{counter[1](++counter[0])}}>Increment Counter</button>
        </div>
    );
}

export default Child;