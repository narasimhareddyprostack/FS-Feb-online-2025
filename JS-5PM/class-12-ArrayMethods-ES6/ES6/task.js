let enames=["rg","sg","pg"]
//create new employee names with upper case?
/* let new_Enames=enames.map((ename)=>{
    return ename.toUpperCase()
}) */

let new_Enames=enames.map(name=>name.toUpperCase())
console.log(new_Enames)

//[].map()     -for every array element expecting new value
//[].filter()  - to filter data based on condition
//[].find()    - to vefify element present or not 