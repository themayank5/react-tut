import React,{useState, useEffect} from "react";

export function UseEffect(){


    let [count1, setCount1] = useState(0)
    let [count2, setCount2] = useState(0)

    function counter1(){
        setCount1(count1 + 1)
    }

    function counter2(){
        setCount2(count2 + 2)
    }
    useEffect(() => {
        console.log("use effect called")
    },[count2])
    return(
        <>
          <h1>UseEffect Hooks</h1>
          <h3>count A {count1}</h3>
          <button onClick={counter1}>Click to increase</button>

          <h3>count B {count2}</h3>
          <button onClick={counter2}>Click to increase</button>          
        </>
    )
}