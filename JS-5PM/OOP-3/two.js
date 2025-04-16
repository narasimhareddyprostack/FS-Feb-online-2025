class Parent{
    constructor(){
        console.log("Parent Class Constructor")
    }

}
class Child extends Parent{
    constructor(){
        super();  //invoking parent class constructor
        console.log("Child Class Constructor")
    }
}
new Child()