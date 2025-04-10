function changeColorOne(){
    //alert('Test Case 123')
    //how to get btton tag ref? using document object
    document.getElementById('btn1').style.backgroundColor="green"
    //document.getElementById('btn1').innerHTML="GM"
}
function changeColorTwo(){
    document.getElementById('btn2').style.backgroundColor="blue"
}
function changeColorThree(){
    document.getElementById('btn3').style.backgroundColor="yellow"
}

function changeColorFour(){
    document.getElementById('btn4').style.backgroundColor="yellow"
}
function changeColorFive(){
    /* let tag_Ref=document.querySelector('.formEx1')
    console.log(tag_Ref)
    tag_Ref.style.backgroundColor="red" */
    document.querySelector('.formEx1').style.backgroundColor="red"
}
function changeCase(){
    let name=document.querySelector('.formEx2').value;
    //alert(name.toUpperCase())
    document.querySelector('.formEx2').value=name.toUpperCase()
}