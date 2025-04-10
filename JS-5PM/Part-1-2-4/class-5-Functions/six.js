function cal_Age(dob_Year){
    //executing some business login
    let current_Year = 2025;
    let age = current_Year - dob_Year
    return age;
}

let age1=cal_Age(1983)
console.log(age1)  //42

let age2=cal_Age(2001)
console.log(age2) //24