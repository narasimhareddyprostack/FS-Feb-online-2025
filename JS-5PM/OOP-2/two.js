class Account{
   
    acc_Bal=0;

    deposit_Amount(amount){
       this.acc_Bal = this.acc_Bal + amount;
    }
    withdrawl(amount){
        this.acc_Bal=this.acc_Bal-amount
    }

}
let a1=new Account()
console.log(a1);
a1.deposit_Amount(5000)
a1.deposit_Amount(500)
a1.deposit_Amount(50)
console.log(a1);
a1.withdrawl(49);
console.log(a1)

let a2=new Account()
console.log(a2)
a2.deposit_Amount(600)
console.log(a2)

//How to access class members? 
// out side class
// inside class