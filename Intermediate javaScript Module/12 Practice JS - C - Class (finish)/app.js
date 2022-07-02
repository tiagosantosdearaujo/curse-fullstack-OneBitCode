class App {
    constructor() {
        this.spaceship = null
    }

    start() {
        this.enrollSpaceship()
        let chosenOption
        do {
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        } while(chosenOption != "3")
        this.printAndExit()
    }

    enrollSpaceship() {
        let spaceshipName = prompt("What's spaceship's name?")
        let crewQuantity = prompt("What's the crew capacity?")
        let spaceshipKind = this.askForSpaceshipKind()
        if(spaceshipKind == "1") {
            let weaponsQuantity = prompt("How many weapons does this spaceship have?")
            this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
        } else {
            let sitsQuantity = prompt("How many sits does this spaceship have?")
            this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)
        }
    }

    askForSpaceshipKind() {
        let chosenOption
        while (!["1", "2"].includes(chosenOption)) {
            chosenOption = prompt("What kind of spaceship?\n1- Battle\n2- Transport")
        }
        return chosenOption
    }

    showInitialMenu(){
        const promptMessage =   "What do you want to do?\n" + 
                                "1- Speed Up\n" +
                                "2- Change spaceship\n" +
                                "3- Print and exit"
        let chosenOption = prompt(promptMessage)
        while (!["1", "2", "3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }

    redirectFeature(chosenOption){
        switch(chosenOption) {
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        } 
    }

    accelerateSpaceship() {
        let acceleration = Number(prompt("How much would you like speed up?"))
        this.spaceship.speedUp(acceleration)
    }

    printAndExit() {
        let finalMessage =  `Nome: ${this.spaceship.name}\nCrew: ${this.spaceship.crewQuantity}\nVelocity: ${this.spaceship.currentvelocity}\n`
        alert(finalMessage)
    }
}