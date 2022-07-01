class Spaceship{
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.CurrentVelocity = 0
    }
    speedUp(acceleration) {
        this.CurrentVelocity += acceleration
        if(this.CurrentVelocity > this.maxRecommendedVelocity) {
            alert('Danger, maximu speed exceeded!\n\n***SLOW DOWN***')
        }
    }
}

class TransportSpaceship extends Spaceship {
    speedUp() {
        alert('Transport spaceship accelerate 1km/s')
        this.CurrentVelocity += 1
    }        
}

let transportSpaceship = new TransportSpaceship('Transport', 4, 1000)

transportSpaceship.speedUp()
console.log(transportSpaceship)