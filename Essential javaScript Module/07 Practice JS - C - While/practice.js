let warpCount = 0
        let chosenOption = ""

        let spaceship = prompt("Enter the ship's name")

        chosenOption = prompt("Want to go into warp drive?\n1- Yes\n2- No")

        while(chosenOption == 1){
            warpCount += 1
            chosenOption = prompt("Do you want to make the next space warp?\n1- Yes\n 2-No")
        }
        alert(`Nave: ${spaceship}.\nAmount of space warp: ${warpCount}.`)