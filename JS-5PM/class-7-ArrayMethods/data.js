let employees=[{eid:101},{eid:102}]
let user={
    name:'Rahul',
    loc:"Bangalore",
    email:'rg@gmail.com'
}
//Object class
console.log(Object.keys(user))     //[name,loc,Bangalore]
console.log(Object.keys(user).length) //3
console.log(Object.keys(user).length>0) //true
if(Object.keys(user).length>0){
    console.log("Not Empty Object")
}
else{
    console.log("Empty Object")
}
//console.log(Object.values(user))