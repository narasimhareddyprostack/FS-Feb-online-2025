let enames=["rg","sg","pg"]
//create new employee names with upper case?
let new_Enames=[]

for(let ename of enames){
    new_Enames.push(ename.toUpperCase())
}

console.log(new_Enames)