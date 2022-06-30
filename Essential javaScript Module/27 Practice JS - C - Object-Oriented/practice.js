let spaceship = {
    velocity: 0,
    speedUp: function(acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt("Enter the name of the spaceship")
    spaceship.type = prompt("Enter the type of spaceship")
    spaceship.maxVelocity = Number(prompt("Enter the maximum speed of the spaceship (km/s)"))
}

function acelerate() {
    let acceleration = Number(prompt("How much do you want to accelerate? (km/s)"))
    spaceship.speedUp(acceleration)
    if(spaceship.velocity > spaceship.maxVelocity) {
        alert(  `MAXIMUM SPEED OUTSTANDING!\nSpaceship Speed: ${spaceship.velocity} km/s\nSpaceship's Max Speed: ${spaceship.maxVelocity} km/s`)
    }
}

function stop() {
    alert(  `Name: ${spaceship.name}\nType: ${spaceship.type}\nSpaceship Speed: ${spaceship.velocity}\nSpaceship's Max Speed: ${spaceship.maxVelocity}`)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("You wish:\n1- Speed Up\n2- To stop")
        switch(chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Invalid option")
        }
    } while(chosenOption != "2")
}

registerSpaceship()
showMenu()