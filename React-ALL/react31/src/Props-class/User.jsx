import {Component} from 'react'

import Employee from './Employee';

class User extends Component{
    uid=10;
    uname="Rahul"
    user_Details={
        email:"rahul@gmail.com",
        loc:["Wayand","New Delhi"]
    }
    render(){
        return <div>
                    <h4>User Component</h4>
                    <h4>User Name:{this.uname}</h4>
                    <hr />
                    <Employee ename={this.uname} 
                              eid={this.uid} 
                              emp_Details={this.user_Details}
                              />
               </div>
    }
}

export default User;