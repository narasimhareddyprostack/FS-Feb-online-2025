import React from "react";

class Employee extends React.Component{


    render(){
        return <div>
                    <h2>Employee Component...</h2>
                  
                    <pre>{JSON.stringify(this.props)}</pre>
                    <h4>New Employee Name:{this.props.new_Emp.uname}</h4>
               </div>
    }
}

export default Employee