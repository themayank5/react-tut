import React from "react";

export function MapFunction(){

    // let student = ["Mayank 1", "Mayank 2", "Mayank 3", "Mayank 4"]
    // // // map function
    // // student.map((item) =>{
    // //     console.log("My name is :",item)
    // // }
    // // )

    let student = [
        {name:"mayank 1", email:"email 1", phone:"11111"},
        {name:"mayank 2", email:"email 2", phone:"11112"},
        {name:"mayank 3", email:"email 3", phone:"111"},
        {name:"mayank 4", email:"email 4", phone:"111"},
    ]



    return(
        <>
          <h1>Map function</h1>
          {/* {
            student.map((data) =>
              <h1>My name is : {data}</h1>
            )
          } */}

            <table border="1">
                {
                    student.map((data, id) =>
                        <tr key={id}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>

                        </tr>
                    )
                }


                {/* {
                    student.map((data, id) =>
                        data.phone === "111" ? <tr key={id}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>

                        </tr> : null
                    )
                } */}
            </table>

        </>
    )
}