import React, { useEffect, useState } from "react";

export function GetMethod() {

    let [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then((result) => {
            result.json().then((resp) => {
                setData(resp);
            })
        })
    })
    return (
        <>
            <h1>Api Calling</h1>

            <table>
                <tr>
                    <th>Id</th>
                    <th>title</th>
                    <th>body</th>

                </tr>
                {
                    data.map((item, i) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))
                }
            </table>


        </>
    )
}