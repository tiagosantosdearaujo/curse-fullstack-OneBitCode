function doubleVelocity(velocity, printer){
    alert("Got into double velocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity => {
    alert(`New Velocity: ${velocity} Km/s`)
}

let newVelocity = doubleVelocity(60, printVelocity)
alert(newVelocity)