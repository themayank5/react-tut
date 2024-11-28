import React, { createContext } from "react";
import { PageA } from "./PageA";
 let nameContext = createContext()
export function ParentPage(){

    let nameData ={
        firstName:"Mayank SIngh",
        secondName:"Shubham Singh"
    }
    return(
        <>
        <nameContext.Provider value={nameData} >
           <PageA />
        </nameContext.Provider>
        </>
    )
}
export {nameContext}