import {React, useState} from 'react'
export function State(){
    // let data = "Mayank Singh";
    // function UpdateData(){
    //     data = "Shubham Singh";
    //     alert=(data)

    // }

    // let [data, setData] = useState("Mayank singh")
    // function updateName(){
    //     setData("Shubham SIngh");
    //     alert("your name is updated")
    // }


    let [numb, setNumb] = useState(1);
    function addNumber(){
        setNumb(numb + 1)
    }

    function subNumber(){
        setNumb(numb - 1)
    }
   
    return(
        <div>
            {/* <h1>{data}</h1>
            <button onClick={updateName}>Update data</button> */}

            <h1>{numb}</h1>
            <button onClick={addNumber} >Add number</button>
            <button onClick={subNumber} >Sub number</button>
        </div>
    )
}