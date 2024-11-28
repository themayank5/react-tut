import React from "react";
import {useNavigate} from 'react-router-dom'

export function Home(){
    let navigate = useNavigate();
    return(
        <>
          <h1>Home page.</h1>
          <button onClick={() => navigate('/about')}>Go to ContactUs page</button>
        </>
    )
}