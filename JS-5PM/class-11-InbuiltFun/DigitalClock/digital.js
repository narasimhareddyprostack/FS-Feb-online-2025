/* let ct=new Date().toLocaleTimeString()
document.getElementById('digital').innerHTML=ct;
//document.getElementById('digital').innerHTML=new Date() */


setInterval(()=>{
    let ct=new Date().toLocaleTimeString()
    document.querySelector('.abc').innerHTML=ct
    //document.getElementsByTagName('p')[0].innerHTML=ct;
},1000)