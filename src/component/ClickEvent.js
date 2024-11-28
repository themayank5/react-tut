export function ClickEvent(){
    function Alert(){
        alert("alert function")
    }
    return(
        <div>
            {/* <button onClick={Alert}>Click me</button> */}

            {/* arrowFunction */}
            <button onClick={()=>Alert()}>Click me</button> 
        </div>
    )
}