let DATA = " secred information";
class user{
   constructor(name,email){
    this.name = name;
    this.email = email;
   }
   viewData(){
    console.log("the data was",DATA)
   }
}

class Admin extends user {
   constructor(name,email){
      console.log("enater")
       super(name,email)
   }
   editData(){
      DATA = "new data added in the website"
   }
}

let student1 = new user("aman","aman@email.com")
let student2 = new user("chaman","chama@email.com")

let Teacher = new user("deen","deen@college.com")

let admin = new Admin("chandu","chandu@chaman.com")
console.log(admin)