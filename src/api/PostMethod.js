import React, { useState } from "react";
export function PostMethod(){

    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [body, setBody] = useState("")

    function submitData(){
        let data ={name,email,body}

        fetch("https://jsonplaceholder.typicode.com/comments", {
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((repo) =>{
            console.log("result", repo)
        })
        console.log(name,email,body)
    }
    return(
        <>
          <h1>Post method</h1>
          <input type="text" value={name} onChange={(e) =>{setName(e.target.value)}} placeholder="name" />
          <input type="text" value={email} onChange={(e) =>{setEmail(e.target.value)}} placeholder="email" />
          <input type="text" value={body} onChange={(e) =>{setBody(e.target.value)}} placeholder="body" />
          <button onClick={submitData}>Submit</button>
        </>
    )
}