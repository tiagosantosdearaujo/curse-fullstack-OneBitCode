let spaceship = {
    name: "Fenix",
    crewQuantity: 7,
    type: "Batalha"
}

console.log(spaceship)

console.log(spaceship.type)

console.log(spaceship["name"])

spaceship.isHitched = false
spaceship["shieldLevel"] = 100

console.log(spaceship["isHitched"])
console.log(spaceship.shieldLevel)

let spaceship123 = {}

console.log(spaceship123)

spaceship123.isHitched = false
spaceship123["shieldLevel"] = 100

console.log(spaceship123)
