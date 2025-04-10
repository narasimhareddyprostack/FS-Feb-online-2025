class Account{
    min_Bal=500;
    open_Account(){
        console.log("Account Opened Successfully")
    }
    desosit_Amount(){
        console.log("Amount Deposited successfully")
    }
    withdrawl_Amount(){
        console.log("Insuffient Balance")
    }
    get_Bal(){
        console.log("Server Busy")
    }
    close_Account(){
        console.log("Bal - ve ")
    }

}


//how to access class members - using object
let a1=new Account();
console.log(a1.min_Bal)
a1.open_Account()
a1.desosit_Amount()
a1.withdrawl_Amount()
a1.get_Bal()
a1.close_Account()