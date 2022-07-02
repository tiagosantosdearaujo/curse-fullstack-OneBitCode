class Spaceship {
    static get DECELARATION_RATE() {
        return 0.17
    }
    constructor(name, crewQuantity) {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentvelocity = 0
    }
    speedUp(acceleration) {
        this.currentvelocity += acceleration * (1 - Spaceship.DECELARATION_RATE)
    }
}