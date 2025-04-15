let goToMovie = (success,failure)=>{
    let acc_Bal=1500;

    if(acc_Bal>1000){
        success("Go and Enjoy")
    }else{
        failure("Open Laptop and practise")
    }
}

goToMovie((msg)=>{console.log(msg)},(err)=>{console.log(err)})