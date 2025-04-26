import React,{useState} from 'react';

let Counter = ()=>{
    //let counter = 0;  //comp own data
    let [counter,setCounter]=useState(0)
    //   var   , function

    let incrHandler = ()=>{
       setCounter(counter+1)
    }
    return <div>
                <h4>Counter Component</h4>
                <h4>Counter Value:{counter}</h4>
                <button onClick={incrHandler}>Incr</button>  
           </div>
}

export default Counter;