// Make an object named spaceship1 using a JavaScript object literal. Include properties with this information: - Top speed of 2lyph (light years per hour) - Ship name of Galaxy Cruiser
//
// Include a method (a property that is set to an anonymous function) named launch that console logs your ship name + ' launching to infinity and beyond at ' + top speed + '!'. After you create your spaceship object, call the launch method to see the console log.
//
// Make three other spaceships with different speeds and names using the three other ways of making objects seen in the examples above.

//object literal object literal object literal object literal object literal

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
