import React, {useState} from "react";

// function based component
function CounterFunction(){
    // in function based componene doesnot have render function and only have return
    // fucnntion based component doesnot have constructor instead of that have HOOKS

    let [number, setNumber] = useState(0)   //01. define the javascipt function  let []
                                            //02. in [ first add number, secong add number increament fucntio name]
                                            //03. in useState ( add the default value)

    function increment(){
        setNumber(++number)
    }
    return(
        <div>
            <h3>Functional Component</h3>
            <h1>Counter = {number} </h1>
            <button onClick={e => increment()}>Increment</button>
        </div>
    )
}

export default CounterFunction