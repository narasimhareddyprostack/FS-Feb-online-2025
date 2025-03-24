let a=[10,20,30]
let b=a; //array alias 

b[1] = 25
console.log(a)
console.log(b)

let c =a.slice()
let d =[...a]
c[1] = 29
console.log(c)