import {React, useState} from "react";

export function HideAndShow(){

let [status, setStatus] = useState(true);

function hideStatus(){
    setStatus(false)
}
function showStatus(){
    setStatus(true)
}

function togelButton(){
    setStatus(!status)
}


    return(
        <>
          {
            status? <h1>Mayank Singh</h1>:null
          }
          
          <button onClick={hideStatus}>hide</button>
          <button onClick={showStatus}>show</button>
          <button onClick={togelButton}>Toggel</button>
        </>
    )
}