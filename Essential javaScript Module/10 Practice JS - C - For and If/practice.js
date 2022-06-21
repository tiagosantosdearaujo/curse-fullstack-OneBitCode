let spaceshipName = prompt("What's spaceship name?")

let invertedName = ""

for(let i = spaceshipName.length-1; i >= 0; i--){
    if(spaceshipName[i] == "e"){
        break
    }
    invertedName += spaceshipName[i]
}
alert(`Original name: ${spaceshipName}\nInverted name: ${invertedName}`)