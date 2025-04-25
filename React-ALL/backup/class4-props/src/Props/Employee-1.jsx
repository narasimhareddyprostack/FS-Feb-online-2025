let Employee = (props)=>{



    return <div>
            <h2>Employee Component</h2>
            <pre>{JSON.stringify(props)}</pre>
            <h4>Employee Id:{props.emp_Id}</h4>
            <h4>Employee Name:{props.emp_Name}</h4>
            <h3>Primary Loc:{props.loc[1]}</h3>
            <h4>New Employee Name:{props.new_Emp.uname}</h4>
          </div>
}

export default Employee;