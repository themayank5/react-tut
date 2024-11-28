import { useState } from "react"

export function BoxValue(){

  let [boxValue, setBoxValue] = useState("")

  let[printVal, setPrintVal] = useState("")
  function value(val){
    setBoxValue(val.target.value)
  }
  function PrintVlaue(){
    setPrintVal(boxValue)
  }

    return(
    <div>
      <h1>{printVal}</h1>
      <input type="text" onChange={value}/>
      <button onClick={PrintVlaue}>Print Value</button>
    </div>
    )
}