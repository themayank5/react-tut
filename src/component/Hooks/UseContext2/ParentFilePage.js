import { createContext, Fragment, useEffect, useState } from "react";
import { File1 } from "./File1";
import { File2 } from "./File2";

export let DataContext = createContext()

export function ParentFilePage(){

    let[data, setData] =useState([])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/comments?_limit=5").then((result) =>{
            result.json().then((resp) =>{
                //console.log(resp);
                setData(resp)
            })
        })
    },[])
    return(

        <DataContext.Provider value={data}>
            <Fragment>
                <File1 />
                <File2 />
            </Fragment>
        </DataContext.Provider>

        
    )
}