let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
]
let createNewEmployee =(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp);
        callback()
    },4000)
}
let display_Employees=()=>{
    setTimeout(()=>{
        let rows=""
        for(let  employee of employees){
            rows=rows+`<tr>
                            <td>${employee.eid}</td>
                            <td>${employee.ename}</td>
                            <td>${employee.esal}</td>
                      </tr>`
        }
        //document.getElementById('t_Data').innerHTML="GM"
        document.getElementById('t_Data').innerHTML=rows;
    },1000)
}
createNewEmployee({eid:103,ename:"Priyanka",esal:65000},display_Employees)
//passing object as argugment, function as agrument nothig but callback