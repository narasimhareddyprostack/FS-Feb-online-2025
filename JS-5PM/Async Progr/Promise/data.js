let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]
let createEmployee = (emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true;//hardcoding value
            flag?resolve("Data Inserted"):reject("Failed")
            employees.push(emp)
        },4000)
    });
}
let display_Employyees=()=>{
    setTimeout(()=>{
        let rows=""
        for(let employee of employees){
            rows=rows+`<tr>
                        <td>${employee.eid}</td>
                        <td>${employee.ename}</td>
                        <td>${employee.esal}</td>
                      </tr>`
        }
        document.getElementById('tData').innerHTML=rows
    },1000)
}

createEmployee({eid:103,ename:"Priyanka",esal:65000})
.then((msg)=>{
        console.log(msg)
        display_Employyees()
    })
.catch((err)=>{
    console.log(err)
})


