// md.addClass('img', 'test')
// md.addClass('img', 'text-center')
// md.addClass('img', 'row')
// //so purest want it all seperated
//
// var img = md.one('img')
// img.addClass('text')
// img.addClass('text-center')
// // this is the oop way

//Literal Object Literal Object Literal Object Literal Object Literal Object Literal Object
var food = {
    edible: true
}
food.edible = true// add a property of an object, chain syntax

//New Object New ObjectNew ObjectNew ObjectNew ObjectNew ObjectNew ObjectNew Object
var food = new Object()
food.edible = true
var tacos = Object.create(food)// how to reclone
// Constructor Function Constructor Function Constructor Function Constructor Function
//objects are self-aware that has state
//Array() Number() String() Boolean()
//functions can be objects
var Food = function() {
    this.edible = true
    this.totalEaten = 0//all start zero
    this.eat = function() {//method
        this.totalEaten++//curent instance add one.
        console.log('Now eating ' + this.type + ' 1 of ' + this.totalEaten)
    } //this is a method.  not running until we have our instances
}// this function is not to be run directly.  only to be cloned
//Food()
//var pizza = food  //copy of pizza, doesn't clone but a different word.  it's an alias.  it's the same object. when you console.log(food) still says true.  pizza is good
var pizza = Object.create(food)//this is how you correctly clone an object
pizza.edible = false//this one tastes bad
console.log(pizza)
console.log(food)
//var pizza = new Food() //pizza as a variablebecomes inistances. become copies of their master template.
//console.log(pizza) //made a type of data to javascript and has built in properties from the template.  originated Food.  properties of edible = true from parent.

var pizza1 = new Food()
pizza1.type = 'Taco Pizza'
console.log(pizza1)



var pizza2 = new Food()
pizza2.type = 'Margarita'
console.log(pizza2)
Food.prototype.calories = 1200//can motify stuff


//


//cannot use var before it.  this variable are not set or don't exist until you make a copy. //java, ruby, swift, uses this way
class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
        this.year
        this.setYear = this.setYear.bind(this)//a hack.. if you make a method, then you have to bind it.
    }
    setYear(year){
        this.year = year
    }//this is referiing to setYear

    drive(speed) {
        console.log(`${make} ${model} is driving ${speed}mph.`)
    }
}

class Toyota extends Vehicle {
    constructor(model) {//specify the toyota because of the parent, but i am using the model info from the parent vehicle for the rest of the data.
        super('Toyota', model)//have a class that extends something.  have to call the super() function.  first thing you are going to do.  super is refering to the parent class that you extented.  super is a call to it's parent constructor. //parent is vehicle
        //this.make = 'Toyota' or super()
        console.log('Now making a new Toyota')// can declare more variables like vars.. cant' use vars.
    }
} //extends clone everything and make another template and add more stuff on it.

class Ford extends Vehicle {
    constructor(model) {
        super('Toyota', model)
        console.log('Now making a new Ford')
    }
}

var $4Runner = new Toyota('4Runner')//4runner is instancnes
//$4Runner.setYear(2006)//sets it as a property
$4Runner.year = 2006
console.log($4Runner)

var prius = new Toyota('Prius')
prius.year = 2008
console.log(prius)

///
// class BaseballPlayer extends Person {
//     constructor(atttributes) {
//         this.attributes = attributes
//     }
// }//this attributes will contain all the player1 objects.
// var player1 = new BaseballPlayer({
//     battingAvg: 400
//     position: pitcher
// })

// class Person
// class Athlete, team, skills, avg score, year that they started
// class BaseballPlayer, position, pitch, homeruns,


// class Person {
//     constructor(name, height) {
//         this.name = name
//         this.height = height
//         this.age = age
//         this.setPosition= setPosition.bind(this)
//     }
//     setPosition(position){
//         this.position = position}
//     setSport(position){
//         this.sport = sport
//
// }
// }

// class Athlete extends Person {
//     constructor(age) {
//         super(sport)
//         this.position = position
//     }
// }
//
// class baseballPlayer extends Athlete {
//     constructor(name) {
//         super(position)
//     }
// }
//
// var SamYoung = new Athlete('SamYoung')
// SamYoung.height = "6' 2"
// console.log(SamYoung)
//




// Clone the first two spaceship variables and create two new ones with different speeds and names.
// Extend the second two spaceship constructors (Constructor Function and Class) and create two new spaceships with different speeds and names.
// Add a land method that console logs a landing message. Call the land method 3 seconds after you call the original launch method using setTimeout. For the Constructor Function spaceship, use .prototype to add it on retroactively.

var spaceShip1 = {
    topSpeed: '21yph',
    shipName: "Galaxy Cruiser",
    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!')
    }
}
spaceShip1.launch()
//object New object New object New object New object New object New object New

var spaceShip2 = new Object()
spaceShip2.topSpeed = '12yph'
spaceShip2.shipName = 'Big Goliath'
spaceShip2.launch = function(){
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!.')}
spaceShip2.launch()
// //Constructor function Constructor function Constructor function


var spaceShip = function() {
    this.topSpeed = '30yph'
    this.shipName = 'Dauntless Runner'
    this.launch = function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!.')
    }
}
var spaceShip3 = new spaceShip
spaceShip3.launch()
// // Class Class Class Class Class Class Class Class Class Class
// Class

class spaceShipGo {
    constructor() {
        this.topSpeed = '19yph'
        this.shipName = 'Flat Mellow Yellow '
    }
    launch(){
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + '!.')
    }
}
var spaceShip4 = new spaceShipGo()
spaceShip4.launch()
