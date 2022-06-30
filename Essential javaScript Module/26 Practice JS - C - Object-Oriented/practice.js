let spaceship = {
    name: "Demeter",
    type: "Extraction",
    maxCrew: 20,
    turnOn: function(){
        console.log("Preparing propulsion")
        console.log("Turning on the on-board computer")
    }
}

spaceship.velocity = 0
spaceship.speedUp = function(spaceshipToSpeedUp, acceleration) {
    this.velocity += acceleration
}

spaceship.turnOn()

console.log(spaceship)

spaceship.speedUp(spaceship, 10)

console.log(spaceship)