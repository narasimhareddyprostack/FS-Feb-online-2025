let employees=[
    {eid:101,'ename':'Rahul',esal:45000},
    {eid:102,'ename':'Sonia',esal:55000},
    {eid:103,'ename':'Priyanka',esal:65000}
    ]

//print all employee names - using for-of 
for(let emp of employees){
    //console.log(emp.ename)
    console.log(`Employee Id: ${emp.eid} and Name: ${emp.ename}`)
}