import { Fragment, useContext } from "react";
import { DataContext } from "./ParentFilePage";
export function File1(){
    let Data2 = useContext(DataContext)
    return(
        <Fragment>
             <h1>This is File 1 page</h1>
            {
                Data2.map((item, i) =>(
                    <p key={i}>{item.name}</p>
                ))
            }
        </Fragment>
    )
}