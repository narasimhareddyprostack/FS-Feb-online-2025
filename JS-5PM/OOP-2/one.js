class Account{
    acc_Id;
    acc_Name;
    acc_Bal=0;

    open_Account(){
        console.log("Account Opened Successfully")
    }
    deposit_Amount(){
        console.log("Amount Deposited")
    }
    withdrawl(){
        console.log("Amount Withdrawl")
    }
    get_Bal(){
        console.log("Getting Bal")
    }

}
let a1=new Account()
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()