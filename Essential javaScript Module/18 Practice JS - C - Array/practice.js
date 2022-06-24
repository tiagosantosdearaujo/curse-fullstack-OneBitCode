let hitchedSpaceships = ["Colossus","Elemental","Helmet"]

console.log(hitchedSpaceships)

hitchedSpaceships.push("Supernova") // Command "push" --> add new element in last position the array.

console.log(hitchedSpaceships)

hitchedSpaceships.pop() // command "pop" --> remove last element
                        //We also have o return the removed element --> let removedSpaceship = hitchedSpaceships.pop() --> last element removed

console.log(hitchedSpaceships)

hitchedSpaceships.shift() // command "shift" --> remove last element
//We also have o return the removed element --> let removedSpaceship = hitchedSpaceships.shift() --> first element removed

console.log(hitchedSpaceships)

hitchedSpaceships.unshift("Colossus") // command "unshift" --> Add first element
//We also have o return the removed element --> let removedSpaceUnship = hitchedSpaceships.unshift() --> first element removed

console.log(hitchedSpaceships)

console.log(hitchedSpaceships.length) // Command "lenght" --> print the size of the array

let elementalPos = hitchedSpaceships.indexOf("Elemental") // command "indexOf" --> find element inside the array

console.log(elementalPos)