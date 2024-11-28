import {React, useState, } from "react";
export function State(){
    


let [numb, setNumb] = useState(1)
    function increment(){
        setNumb(numb + 1)
    }

    function decrement(){
        setNumb(numb - 1)
    }
   
    return(
        <div>
            {/* <h1>{data}</h1>
            <button onClick={updateName}>Update data</button> */}

            <h1>{numb}</h1>
            <button onClick={increment} >Add number</button>
            <button  onClick={decrement} >Sub number</button>
        </div>
    )
}