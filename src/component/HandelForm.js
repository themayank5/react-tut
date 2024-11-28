import React, { useState } from "react";

export function HandelForm() {
  //fetch data
  let [name1, setName1] = useState("");
  let [place1, setPlace1] = useState("")
  let [option1, setOption1] = useState("")
  let [terms1, setTerms1] = useState(false)
  //print data
  let [name2, setName2] = useState("")
  let [place2, setPlace2] = useState("")
  let [option2, setOption2] = useState("")
  let [terms2, setTerms2] = useState(false)

   function submitForm(e){
       e.preventDefault();
       console.log(name1, place1, option1)

       setName2(name1);
       setPlace2(place1);
       setOption2(option1)
       setTerms2(terms1)

       //call this option to clear input field on submit button
       setName1("");
       setPlace1("");
       setOption1("")
       setTerms2(true)
   }

function clearField(){
   setName1("");
   setPlace1("");
   setOption1("")
   setTerms1("")

   setName2("");
   setPlace2("");
   setOption2("")
   setTerms2("")
}
   function fetchName(e){
       setName1(e.target.value)
   }
   function fetchPlace(e){
       setPlace1(e.target.value)
   }
   function fetchOption(e){
       setOption1(e.target.value)
   }
   function terms(e){

       setTerms1(e.target.checked)
   }


  return (
    <>
      <h1>Handle Form in React JS</h1>
      <h1>Form practice</h1>
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Name" onChange={fetchName} value={name1}/>
                <input type="text" placeholder="state"onChange={fetchPlace}  value={place1}/>
                <select onChange={fetchOption} value={option1}>
                  <option>select option</option>
                  <option>option 1</option>
                  <option>option 2</option>
                </select>
                <input type="checkbox" onChange={terms} value="k" checked={terms1}/> <span>Terms</span><br /><br />
                <button type="submit">submit</button>
                <button type="button" onClick={clearField}>clear</button>
            </form>

            <h3>Name:{name2}</h3>
            <h3>place:{place2}</h3>
            <h3>option:{option2}</h3>
            <h3>Terms:{terms2 ? "Yes" : ""}</h3>
    </>
  );
}

export default HandelForm;
