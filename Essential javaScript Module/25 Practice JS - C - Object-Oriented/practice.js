let spaceship = {
    name: "Supernova",
    type: "Batalha",
    crew: ["Cap. Silva", "Ana Julia", "Thiago"]
}

spaceship.crew.push("Ten. Fernanda")

console.log(spaceship)

let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 8},
    {name: "Helmet", crewQuantity: 15}
]

console.log(spaceships[0].name)

let spaceships123 = [
    {name: "Supernova", crewQuantity: 4},
    {name: "Helisium", crewQuantity: 20},
    {name: "SpaceX", crewQuantity: 6}
]

spaceships123.forEach(spaceships12345 => {
    console.log(`The ${spaceships12345.name} has ${spaceships12345.crewQuantity} crew.`)
})

let spaceship678 = {
    name: "Golias",
    maxCrew: 20,
    captain: {
        name:"Hugo Trent",
        age: 37
    }
}

console.log(spaceship678.captain.name)