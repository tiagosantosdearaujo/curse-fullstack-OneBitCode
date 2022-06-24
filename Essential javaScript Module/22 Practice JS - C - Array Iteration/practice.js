let hitchedSpaceships = ["Demeter", "Darwin","Supernova", "Fenix","Puller"]

hitchedSpaceships.forEach(function(currentSpaceships, index){                            // Command "ForEach"
    alert(`Nave: ${currentSpaceships}\nIndice: ${index}`)
})

let upcaseedSpaceships = hitchedSpaceships.map(function(currentSpaceship){               // Command "map"
    let upcased = currentSpaceship.toUpperCase()
    return upcased
})
alert(upcaseedSpaceships)

let filtered7Chars = hitchedSpaceships.filter(element => { return element.length >= 7 }) // Command "find"
alert(with7Chars)

let finded7Chars = hitchedSpaceships.find(element => { return element.length >= 7 })     // Command "find"
alert(with6Chars)

