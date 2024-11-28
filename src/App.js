// import logo from './logo.svg';

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


// import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
// import { Home } from './reactRouting/Home';
// import { About } from './reactRouting/About';
// import { NavBar } from './reactRouting/NavBar';
// import { ContactUs } from './reactRouting/ContactUs';
// import { Gallery } from './reactRouting/Gallery';
// import { PageNotFound } from './reactRouting/PageNotFound';
// import { Galery1 } from './reactRouting/Galery1';
// import { Galery2 } from './reactRouting/Galery2';
// import { Galery3 } from './reactRouting/Galery3';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState} from 'react'
// import { Functionalcomp } from './component/FunctionalComp';
// import ClassComp from './component/ClassComp';
// import { Jsx } from './component/Jsx';
// import { ClickEvent } from './component/ClickEvent';
// import { State } from './component/State';
// import { Props } from './component/Props';
// import { BoxValue } from './component/BoxValue';
// import { HideAndShow } from './component/HideAndShow';
// import { HandelForm } from './component/HandelForm';

// import { Practice } from './component/Practice';

// import { State } from './component/Hooks/State';
// import {ParentPage} from './component/Hooks/UseContext/ParentPage'
// import { UseEffect } from './component/Hooks/UseEffect';

// import { CssUse } from './component/CssUse';
// import { MapFunction } from './component/MapFunction';
// import { GetMethod } from './api/GetMethod';
// import { PostMethod } from './api/PostMethod';
// import { DeleteMethod } from './api/DeleteMethod';

import { ParentPage1 } from './component/Hooks/UseContext1/ParentPage1';
import { Child1 } from './component/Hooks/UseContext1/Child1';
import { ParentFilePage } from './component/Hooks/UseContext2/ParentFilePage';


function App() {
//how to use state and props 
// let [name, setName] = useState("Mayank singh")
// function updateName(){
//   setName("Shubham Singh")
// }



  return (
    <div className="App">
      <h1>Ract js tutorial</h1>
      <ParentFilePage />
      {/* < ParentPage1 /> */}


      {/* <Practice /> */}      
        {/* <Functionalcomp /> */}
        {/* <ClassComp /> */}
        {/* <Jsx/> */}
        {/* <ClickEvent /> */}
        {/* <State/> */}

        {/* <Props name={"Mayank"} age={25} other={{adress:"Delhi", mobile:"9015119802"}}/>
        <Props name={name} />
        <button onClick={updateName}>Update name</button> */}

        {/* <BoxValue /> */}
        {/* <HideAndShow /> */}
        {/* <HandelForm /> */}
        {/* <UseEffect /> */}
        {/* <CssUse /> */}
        {/* <MapFunction /> */}


        {/* <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/*"  element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about"  element={<About />} />
            <Route path="/contactus"  element={<ContactUs />} />
            <Route path="/gallery/"  element={<Gallery />}>
              <Route path="galery1"  element={<Galery1/>}/>
              <Route path="galery2"  element={<Galery2/>}/>
              <Route path="galery3"  element={<Galery3/>}/>
            
            </Route>
          </Routes>
        </BrowserRouter> */}

        {/* <GetMethod /> */}
        {/* <PostMethod /> */}
        {/* <DeleteMethod /> */}
        {/* <ParentPage /> */}
        {/* <State /> */}


        
    </div>
  );
}

export default App;
