class Account{
    acc_Id;
    acc_Name;
    acc_Bal;

    constructor(id,name,amount){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }

    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    withdrawl(){}
    get_Bal(){}

}

let a1=new Account(101,"Rahul",5000)
a1.deposit_Amount(15000)
a1.deposit_Amount(10000)

let a2=new Account(102,"Sonia",50000)
a2.deposit_Amount(100)
a2.deposit_Amount(200)
console.log(a1)
console.log(a2)