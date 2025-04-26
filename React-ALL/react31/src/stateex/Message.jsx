import { useState } from "react";

let Message = ()=>{
    //let msg="Hello,";//comp own data - state
    let [msg,setMsg] = useState("Hello");
    //  [var,function] = useState()
    let gmHandler = ()=>{
        setMsg("Good Morning")
    }
    let gaHandler = ()=>{
        setMsg("Good Afternoon")
    }
    let gnHandler = ()=>{
        setMsg("Good Night")
    }
    return <div>
                <h4>Message Component</h4>
                <hr/>
                <h4>Wish Message:{msg}</h4>
                <button onClick={gmHandler}>GM</button>
                <button onClick={gaHandler}>GA</button>
                <button onClick={gnHandler}>GN</button>

            </div>
}
export default Message;