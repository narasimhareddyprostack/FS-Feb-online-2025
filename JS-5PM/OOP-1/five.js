let a=100; //varaible
class Account{
   
    min_Bal=600;
    acc_Bal=0;

    deposit_Amount(amount){
        console.log(amount)
    }
}

let a1=new Account()
let a2=new Account()
console.log(a1)  //Account {min_Bal:600}
console.log(a2)  //Account {min_Bal:600}
a1.deposit_Amount(5000)
a2.deposit_Amount(450)