import React, {useReducer} from 'react';
import counterReducer from './CounterReducer';

function Child2() {
    let [state, dispatch] = useReducer(counterReducer, 1);
    return (
        <div>
            <h1>We are in Child 2 : Using useReducer</h1>
            <h2>The value of counter is: {state}</h2>
            <button onClick={()=>{dispatch({type:"increment"})}}>Increment Counter</button>
        </div>
    );
}

export default Child2;