/*function doThing () {}
console.log(doThing.prototype) // {}

let doth = new doThing();

console.log(doth);*/


/*
const target = {a: 'toy', b: 'boy'};
const source = {b: 'car', c:'cat'};


let returnedTarget = Object.assign(target, source);

console.dir("target"+target);

console.dir("source"+source);
*/


// function Vehicle(name, noofWheels){
// 	this.name = name;
// 	this.noofWheels = noofWheels;
// }

// Vehicle.prototype.printWheels = function(){
// 	console.log(this.name +"has "+this.noofWheels+"wheels");
// }

// let twoWheeler = new Vehicle("Two wheeler", 2);

// let honda = Object.assign({}, twoWheeler);

// console.log("Honda"+honda.name);
// /*honda.printWheels();*/



// let hero = Object.create(twoWheeler);

// console.log("Hero"+hero.name);
// hero.printWheels();


/** Object.defineProperty() 
 * 
 * propertyIsEnumerable
 * 
 * */




  // var obj1 = { a: 10 };
  //       var obj2 = { b: 20 };
  //       var obj3 = { c: 30 };
  //       var new_obj = Object.assign(obj1, obj2, obj3);
  //       console.log(new_obj);



/** Inheritance example --es5*/
// function Person(firstName, lastName){

//   this.firstName = firstName;
//   this.lastName = lastName;
// }


// Person.prototype.fullName = function (){
//   return this.firstName+" "+ this.lastName;
// }




// function Employee(firstName, lastName, designation){
 
//   Person.call(this, firstName, lastName);
//   this.designation = designation;
// }

// Employee.prototype = Object.create(Person.prototype);

// Employee.prototype.constructor = Employee;

// Employee.prototype.printDesignation = function(){
//   console.log(this.designation+"is Designation");
// }


// console.log(Employee.prototype);
// let e1 = new Employee("Ram", "sname", "SE");

// let e2 = new Employee("SHyam", "sname", "SSE");

// console.log(e1.fullName());
// e1.printDesignation();

/** Inheritance -ES6--class based*/

// class Person{

//   constructor(firstName, lastName){

//     this.firstName = firstName;
//     this.lastName = lastName;

//   }

//   getFullName(){
//     return this.firstName+this.lastName;
//   }

// }


// class Employee extends Person{

// constructor(firstName, lastName, designation){

//     super(firstName, lastName);
//     this.designation = designation;
//   }

//   printDesignation(){
//     console.log(this.designation);
//   }

// }


// let e1 = new Employee("Janardhan", "ravada", "PSE");
// console.log(e1.getFullName());
// e1.printDesignation();






/** Inheritance vs compostion*/



/* Inheritance */

function Character(){

}

Character.prototype.talk = function (msg) {
  console.log(msg);
}



let Human = function(name){
  this.name = name;
}

Human.prototype = Object.create(Character.prototype);
Human.prototype.constructor = Human;

Human.prototype.walk = function (){
  console.log(`${this.name} can walk`);
}

Human.prototype.eat = function (){
  console.log(`${this.name} can eat`);
}

let sam = new Human("Janardhan");

sam.talk(`${sam.name} can talk`);

sam.walk();

sam.eat();


function Robo (id, speed){
  this.id = id;
  this.speed = speed;
}

Robo.prototype = Object.create(Character.prototype);
Robo.prototype.constructor = Robo;

Robo.prototype.drive = function(){
  console.log(`${this.id} is diriving at speed ${this.speed}`);
}

Robo.prototype.wifi = function(wifiname){
  console.log(`${this.id} is connecting to  ${wifiname}`);
}

let r12 = new Robo('r12', 30);

r12.drive();
r12.wifi("Home");


/** Compoistion*/


function Walker (store){
  walk = function(){
    let name = store.id||store.name;
    console.log(`${name} is waliking`);
  }
  return {
    walk : walk
  }
}


function Talker (store){
  talk = function(msg){
    console.log(msg);
  }
  return{
    talk : talk
  }
}


function Eater (store) {

  eat = function(){
  let name = store.id||store.name;
   console.log(`${name} can eat`);
  }
  return {
    eat : eat
  }
}


let Person = (name) => {
  let state = {name};
  return Object.assign(state, Walker(state), Talker(state));
}

let bob = Person('bib');

bob.walk();
bob.talk('bob taking');


