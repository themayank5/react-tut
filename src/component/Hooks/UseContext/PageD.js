import React, { useContext } from "react";
import { nameContext} from "./ParentPage";
export function PageD(props){
    let {firstName, secondName} = useContext(nameContext)
    return(
        <>
           <h1>First name:{firstName}</h1>
           <h1>Second name:{secondName}</h1>
        </>
    )
}