import Employee from "./Employee";
let User = ()=>{
    let uid=101;  //number type
    let uname="Rahul Gadhi" // string
    let loc =["Wayand","New Delhi"] //Array 
    let new_user={
        uid:102,
        uname:"Sonai"
    }

    
    return <div>
                <h1>User Component</h1>
                <h2>User Name:{uname}</h2>
                <hr/>
                <Employee new_Emp={new_user} />
           </div>

}
export default User;


//React comp - main object is return UI