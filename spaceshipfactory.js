// Clone the first two spaceship variables and create two new ones with different speeds and names.
// Extend the second two spaceship constructors (Constructor Function and Class) and create two new spaceships with different speeds and names.
// Add a land method that console logs a landing message. Call the land method 3 seconds after you call the original launch method using setTimeout. For the Constructor Function spaceship, use .prototype to add it on retroactively.

var spaceShip1 = {
    topSpeed: '21',
    shipName: "Galaxy Cruiser",
    launch: function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + ' yph!')
    }
    // land: function() {
    //     console.log('Helloooooo')
    // }
}
spaceShip1.launch()
//spaceShip1.setTimeout(land(),3000)
//cloning spaceShip1
var spaceShip5 = Object.create(spaceShip1)
spaceShip5.topSpeed = '32'
spaceShip5.shipName = 'Battle Star'
spaceShip5.launch()
//object New object New object New object New object New object New object New

var spaceShip2 = new Object()
spaceShip2.topSpeed = '12'
spaceShip2.shipName = 'Big Goliath'
spaceShip2.launch = function(){
    console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + ' yph!')}
spaceShip2.launch()

var spaceShip6 = Object.create(spaceShip2)
// cloning spaceShip2
var spaceShip6 = Object.create(spaceShip2)
spaceShip6.topSpeed = '33'
spaceShip6.shipName = 'Hungry Apple'
spaceShip6.launch()

// //Constructor function Constructor function Constructor function


var spaceShip = function() {
    this.topSpeed = '30'
    this.shipName = 'Dauntless Runner'
    this.launch = function() {
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + ' yph!')
    }
}
var spaceShip3 = new spaceShip
spaceShip3.launch()
//cloning 3
var spaceShip7 = new spaceShip
spaceShip7.topSpeed = '9'
spaceShip7.shipName = 'Chopped Liver'
spaceShip7.launch()


// // Class Class Class Class Class Class Class Class Class Class
// Class

class spaceShipGo {
    constructor() {
        this.topSpeed = '19'
        this.shipName = 'Flat Mellow Yellow '
    }
    launch(){
        console.log(this.shipName + ' launching to infinity and beyond at ' + this.topSpeed + ' yph!')
    }
}
var spaceShip4 = new spaceShipGo()
spaceShip4.launch()
//cloning 4th
var spaceShip8 = new spaceShipGo()
spaceShip8.topSpeed = '40'
spaceShip8.shipName = 'Sparkle City'
spaceShip8.launch()
