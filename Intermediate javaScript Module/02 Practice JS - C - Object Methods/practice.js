class Spaceship {
    constructor(name) {
        this.name = name
        this.velocity = 0
    }
    speedUp(acceleration){
        this.velocity += acceleration
    }
    speedDown(slowDown){
        this.velocity -= slowDown
    }
}

let artemis = new Spaceship("Artemis")

console.log(artemis)

artemis.speedUp(10)
artemis.speedUp(15)

console.log(artemis)

artemis.speedDown(5)

console.log(artemis)