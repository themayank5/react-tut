import React,{Fragment, useEffect, useState} from "react";


export function Practice() {

    let[name, setname] = useState("");
    let[email, setEmail] = useState("");
    let[body, setBody] = useState("");

    function submitForm(){
        let data = {name, email, body};

        fetch("https://jsonplaceholder.typicode.com/comments", {
            method:"POST",
            headers:{
                'Type':'Application/json',
                'Content-type':'Application/json'
            },
            body:JSON.stringify(data)
        })
        console.log(name, email, body)
        setname("");
        setEmail("");
        setBody("")
    }
   
    return (
        <Fragment>
           <input type="text" placeholder="name" value={name}  onChange={(e) => {setname(e.target.value)}}  />
           <input type="text" placeholder="email" value={email}  onChange={(e) => {setEmail(e.target.value)}}  />
           <input type="text" placeholder="body" value={body}  onChange={(e) => {setBody(e.target.value)}}  />

           <button onClick={submitForm}>Submit</button>
        </Fragment>
    )
}