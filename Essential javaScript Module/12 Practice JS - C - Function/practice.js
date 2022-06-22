function speedUp(velocity, acceleration){
    let newVelocity = velocity + acceleration
    return newVelocity
}

let velocity = 80
let acceleration = 5

alert(`**Before executing the funcition** velocity: ${velocity}`)

velocity = speedUp(velocity,acceleration)

alert(`**After executing the function** velocity + acceleration: ${velocity}`)