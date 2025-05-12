let employee_Names=["rahul","sonia","Priyanka"]
//create new array based on existing array convert emp to upper case
//["RAHUL","SONIA","PRIYANKA"]


let new_Employees=employee_Names.map((ename)=>{
    return ename.toUpperCase();
})
console.log(employee_Names)
console.log(new_Employees)