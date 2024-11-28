import React, { Fragment, useEffect, useState, createContext} from "react";
import { Child1} from "./Child1";
import { Child2 } from "./Child2";

export const DataContext = createContext();

export function ParentPage1(){

    let [data, setData] = useState([])

useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/comments?_limit=5").then((result) =>{
        result.json().then((resp) =>{
            console.log(resp)
            setData(resp)
        })
    })
},[])

    return(
        <DataContext.Provider value={data}>
            <Fragment>
                <h1>Context API</h1>
                <Child1 />
                <Child2 />

            </Fragment>
        </DataContext.Provider>

    )
}