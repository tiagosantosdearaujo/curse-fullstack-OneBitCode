let spaceship = prompt("What's the spaceship name?")
let secretWord = prompt("Which character would you like to encode?")
let newSpaceship = ""

for(let i = 0; i<spaceship.length;i++){
    if(spaceship[i] == secretWord){
        newSpaceship += "*"
    } else{
        newSpaceship += spaceship[i]
    }
} 
alert(`The spaceship codename is ${newSpaceship}`)