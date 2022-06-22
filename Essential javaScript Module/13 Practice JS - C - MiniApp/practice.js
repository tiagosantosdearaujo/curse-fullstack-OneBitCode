function controlSpeed(velocity, acceleration){
    if(acceleration == "1"){
        velocity += 5
    } else if(acceleration == 2 && velocity >= 0){        
        if(velocity > 0){
            velocity -= 5    
        } else{
            velocity = 0
        }
    }  else if(acceleration != 1 || acceleration != 2){
        do {
            acceleration = prompt("Please, Choose a valid option:\n1- accelerate the spaceship by 5 km/s\n 2- decelerate the ship by 5 km/s")
            if(acceleration == "1"){
                velocity += 5
            } else if(acceleration == 2 && velocity >= 0){        
                if(velocity > 0){
                    velocity -= 5    
                } else{
                    velocity = 0
                }
            }
        } while(acceleration != 1 && acceleration  != 2)
    }    
    return velocity
}

let spaceshipName = prompt("What's the spaceship name?")
let velocity = 0
let acceleration =  prompt("Do you would like:\n1- accelerate the spaceship by 5 km/s\n 2- decelerate the ship by 5 km/s")

velocity = controlSpeed(velocity,acceleration)

alert(`The spaceship's ${spaceshipName} is at a velocity of ${velocity} Km/s.`)
