let emp={
    eid:101,
    ename:"Rahul",
    esal:45000,
    loc:'Wayand'
}
console.log(emp.eid)
//iterat object using - for in 
for(prop in emp){
    //console.log(emp.prop)
    console.log(emp[prop])
}