alert("Welcome a SpaceShip101")
let pilotName = prompt("What is the pilot`s name?")
let travelVelocity = prompt("What's velocity you would like to travel in a SpaceShip101?")
let confirmationVelocity = confirm(`We will travel at a velocity of ${travelVelocity}`+ "km/h. Do you confirm?")

if(travelVelocity < 0){
    alert("The SpaceShip101 is stopped and not going anywhere")
} else if(travelVelocity < 40 && confirmationVelocity == true){
    alert("you are slow, go faster")
} else if(travelVelocity >= 40 && travelVelocity <= 80 && confirmationVelocity == true){
    alert("Sounds good, keep up the velocity")
} else if(travelVelocity >= 80 && travelVelocity <= 100 && confirmationVelocity == true){
    alert("high velocity, slow down please")
} else if(travelVelocity > 100 && confirmationVelocity == true){
    alert("Dangerous speed, auto pilot active")
} else{
    alert("Mission aborted")
}
