import { Fragment, useContext } from "react";
import { DataContext } from "./ParentFilePage";
export function File2(){
    let Data2 = useContext(DataContext)
    return(
        <Fragment>
            <h1>This is File 2 page</h1>
            {
                Data2.map((item, i) =>(
                    <p key={i}>{item.email}</p>
                ))
            }
        </Fragment>
    )
}