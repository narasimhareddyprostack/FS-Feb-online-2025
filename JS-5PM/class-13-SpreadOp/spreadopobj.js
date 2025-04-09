let user={
    uname:"Rahul",
    email:"rg@gmail.com",
    loc:'Wayand'
}
let details={
    city:"Bangalore",
    email:"rg@pm.com",
    loc:"New Delhi"
}

let user_details={...user,...details}
console.log(user_details)