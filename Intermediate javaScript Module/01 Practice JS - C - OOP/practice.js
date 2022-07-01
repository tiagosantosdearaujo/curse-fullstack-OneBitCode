class SpacialStation{
    constructor(name, platformsQuantity){
        this.name = name
        this.platformsQuantity = platformsQuantity
    }
}

let observatory = new SpacialStation("Observatory", 40)

console.log(observatory)

// -----------------------------------------------------------------------------------------

class Spaceship{
    constructor(name, type = "Battle"){ // Obs this line
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Defense")


console.log(darwin)
console.log(helmet)
console.log(Spaceship)