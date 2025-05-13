import { useState } from "react";
let Login = ()=>{
    let [userData,setUserData] =useState({"email":"","password":""})
    let updateHandler = (event)=>{
        let {name,value} = event.target
        setUserData({...userData,[name]:value})
    }
    let submitHandler =(event)=>{
        event.preventDefault();
        console.log(userData)
    }
    return <div>
            <h4>Login Detals</h4>
            <pre>{JSON.stringify(userData)}</pre>
            <form onSubmit={submitHandler}>
                <label>Email Id:::</label>
                <input type="text" onChange={updateHandler}     name="email"  />   <br /> <br />
                <label>Password:</label>
                <input type="password" onChange={updateHandler} name="password"/> <br /><br />
                <input type="submit" value="Login" />
            </form>
           </div>
}
export default Login;