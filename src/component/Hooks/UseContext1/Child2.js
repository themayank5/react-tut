import { Fragment, useContext } from "react";
import { DataContext } from "./ParentPage1";
export function Child2(){
    let data1 = useContext(DataContext)
    return(
        <Fragment>
            <h1>This is Child 2 page</h1>
            {
                data1.map((item, i) =>(
                    <p>{item.email}</p>
                ))
            }
        </Fragment>
    )
}