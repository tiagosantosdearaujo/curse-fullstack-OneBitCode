class Spaceship{
    constructor(name, maxCrew, maxRecommendedValue){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedValue = maxRecommendedValue
        this.CurrentVelocity = 0
    }
    speedUp(acceleration) {
        this.CurrentVelocity += acceleration
        if(this.CurrentVelocity > this.maxRecommendedValue) {
            alert(`Danger, maximu speed exceeded!\n\n***SLOW DOWN***`)
        }
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendedValue, maxLoadWeight) {
        super(name, maxCrew, maxRecommendedValue)
        this.maxLoadWeight = maxLoadWeight
    }
    speedUp(acceleration) {
        acceleration /= 2
        alert(`Speed Up in ${acceleration} km/s`)
        super.speedUp(acceleration)
    }
}

let transportSpaceship = new TransportSpaceship("Transport", 4, 100, 400)
console.log(transportSpaceship)

transportSpaceship.speedUp(210)