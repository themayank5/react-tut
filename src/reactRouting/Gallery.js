import React from "react";
import { Link, Outlet } from "react-router-dom";
export function Gallery(){
    return(
        <>
          <h1>Gallery</h1>
          <Link  to="galery1">Galery 1</Link>
          <Link  to="galery2">Galery 2</Link>
          <Link  to="galery3">Galery 3</Link>
          <Outlet/>
        </>
    )
}