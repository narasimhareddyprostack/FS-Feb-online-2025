function test(){
	console.log("Good After Noon");
	return "Good Monring";
	
	console.log("Good After Noon");//Unreachable st
}
let msg=test();
console.log(msg)