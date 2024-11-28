import React, { Fragment, useContext } from "react";
import { DataContext } from "./ParentPage1";
export function Child1(){
    let data = useContext(DataContext);
    return(
        <Fragment>
            <h1>This is Child 1 page</h1>
            
            {
                data.map((item, i) => (
                    <p >{item.name}</p>
            ))
            }
        </Fragment>
    )
}