function slowDown(velocity, printer) {
    let deceleration = 20
    while(velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }
    alert("Stopped ship.The floodgates can be opened.")
}
let spaceshipVelocity = 150
slowDown(spaceshipVelocity, function(velocity) {
    alert(`Current velocity: ${velocity}`)
})