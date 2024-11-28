import React, { useEffect, useState } from "react";
 export function DeleteMethod(){

    let [data, setData] = useState([])

   useEffect(() =>{
     fetch("https://jsonplaceholder.typicode.com/comments?_limit=5").then((result) =>{
        result.json().then((resp) =>{
            console.warn("result", resp)
            setData(resp)
        })
     })
   },[])

   function deleteData(id){
    fetch(`https://jsonplaceholder.typicode.com/comments?_limit=5/${id}`,{
        method:'DELETE',
    }).then((result) =>{
        result.json().then((resp) =>{
            console.warn(resp)
        })
    })
   }


    return(
        <>
          <h1>Delete Method</h1>
            <table style={{border:"1px solid red"}}>
                <thead>
                    <tr style={{border:"1px solid red"}}>
                        <th style={{border:"1px solid red"}}>ID</th>
                        <th style={{border:"1px solid red"}}>Name</th>
                        <th style={{border:"1px solid red"}}>Email</th>
                        <th style={{border:"1px solid red"}}>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((result, i) =>(
                            <tr key={i} style={{ border: "1px solid red" }}>
                                <td style={{ border: "1px solid red" }}>{result.id}</td>
                                <td style={{ border: "1px solid red" }}>{result.name}</td>
                                <td style={{ border: "1px solid red" }}>{result.email}</td>
                                <td style={{ border: "1px solid red" }}>{result.body}</td>
                                <td style={{ border: "1px solid red" }}>
                                    <button onClick={() => deleteData(result.id)}>Delete</button>
                                </td>
                                
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>

        </>
    )
 }