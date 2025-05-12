import  Axios  from "axios";
import { useState } from "react";
import { useEffect } from "react";
let Users=()=>{
    
    let [users,setUsers]=useState([])
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            setUsers(response.data)
            //console.log(response.data)
        }).catch((err)=>{
            console.log(err.message)
        })
    });
    return <div className="container">
            <div className="row"> 
            <div className="col-6"> 
            <table className="table">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User Name</th>
                    <th>User Location</th>
                </tr>
            </thead>
            <tbody>
            {
             users.length>0 ?  
             <>
             {
                users.map((user)=>{
                    return <tr key={user.id}>
                            <th>{user.id}</th>
                            <th>{user.name}</th>
                            <th>{user.address.city}</th>
                           </tr>
                })
             }  
             </>:<>No Data</>
            }
            </tbody>
            
            </table>
            </div>
             
            </div>
           </div>
}
export default Users;
