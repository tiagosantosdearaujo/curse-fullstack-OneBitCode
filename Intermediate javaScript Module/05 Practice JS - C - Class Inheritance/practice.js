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
            alert('Danger, maximu speed exceeded! ***SLOW DOWN***')
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop() {
        this.CurrentVelocity = 0
        alert('put guns down and Stopping spaceship')
    }
}

class DiscoverySpaceship extends Spaceship {
    stop() {
        this.CurrentVelocity = 0
        alert('Stopping spaceship')
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)

console.log(darwin)
console.log(fenix)

darwin.speedUp(210)
fenix.speedUp(230)

darwin.stop()
fenix.stop()
