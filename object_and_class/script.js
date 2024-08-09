const student = {
    name:"prit rajput",
    mark:99,
    countmark() {
        console.log("my mark is",this.mark);
    }
}

const address ={
    My_address:"Amadhara"
}

address.__proto__ = student; // address object new property add

// class 
class Suzuki_CAR{
    constructor(brand){
        console.log("create a object")
        this.brandName = brand;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    
}

let swift = new Suzuki_CAR("swift")  // conver class to object
 console.log(swift)
let ertica = new Suzuki_CAR("ertica")  // add property
console.log(ertica)

// inharitance

class person{
    constructor(){
        console.log("parentconstructor enter")
        this.speceise = "Homosepience"
    }
    eat(){
        console.log("I am daily eat and sleep")
    }
    sleep(){
        console.log("I can daily eat and sleep ")
    }
}

class Engineer extends person{  
    constructor(branch){
        console.log("child constructor enter")
        super()
        this.branch = branch;
        console.log("child constructor end")
    }    // we can inharit the class using extens keyword
    work(){
        super.eat()
        console.log("I can work on projects")
    }
}

let prit = new Engineer("Information Technology")