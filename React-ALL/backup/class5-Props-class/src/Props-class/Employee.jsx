import React from "react";
class Employee extends React.Component{
    render(){
        return <div>
                    <h4>Employee Component</h4>
                    <pre>{JSON.stringify(this.props)}</pre>
                    <h3>Employee Id:{this.props.eid}</h3>
                    <h3>Emplyee Name:{this.props.ename}</h3>
                    <h3>Email id:{this.props.emp_Details.email}</h3>
               </div>
    }
}

export default Employee;