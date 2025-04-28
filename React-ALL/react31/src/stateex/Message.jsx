import { useState } from "react";

let Message = ()=>{
    //let msg="Hello,";//comp own data - state
    let [msg,setMsg] = useState("Hello");
    //  [var,function] = useState()
   
    return <div>
                <h4>Message Component</h4>
                <hr/>
                <h4 >Wish Message:{msg}</h4>
                <button onClick={()=>{setMsg("GM")}}>GM</button>
                <button onClick={()=>{setMsg("GA")}}>GA</button>
                <button onClick={()=>{setMsg("GN")}}>GN</button>

            </div>
}
export default Message;