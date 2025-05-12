import { useState } from "react";

let Login = ()=>{
    let [userData,setUserData] =useState({"email":"","password":""})
    let emailHandler  =(event)=>{
         setUserData({...userData,email:event.target.value})
    }
    let pwdHandler = (event)=>{
        setUserData({...userData,password:event.target.value})
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
                <input type="text" onChange={emailHandler}/>   <br /> <br />
                <label>Password:</label>
                <input type="password" onChange={pwdHandler} /> <br /><br />
                
                <input type="submit" value="Login" />
            </form>
           </div>
}
export default Login;