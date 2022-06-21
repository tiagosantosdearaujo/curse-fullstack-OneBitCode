let departureDateEntry = prompt("Enter departure date (format MM/DD/YYYY)")
let departuteDate = moment(departureDateEntry, "MM/DD/YYYY")
let today = moment()
let dateDiff = today - departuteDate

let chosenOption = parseInt(prompt("Choose how you would like to display the departure time\n 1- Seconds\n 2- Minutes\n3- Hours\n4- Days"))

if(chosenOption == 1){
    let secondsOfDeparture = Math.round(dateDiff / 1000)
    alert(`Flight Time: ${secondsOfDeparture} seconds`)
} else if(chosenOption == 2){
    let minutesOfDeparture = Math.round(dateDiff / 1000 / 60)
    alert(`Flight Time: ${minutesOfDeparture} minutes`)
} else if(chosenOption == 3){
    let hoursOfDeparture = Math.round(dateDiff / 1000 / 3600)
    alert(`Flight Time: ${hoursOfDeparture} hours`)
} else if(chosenOption == 4){
    let daysOfDeparture = Math.round(dateDiff / 1000 / 3600 / 24)
    alert(`Flight Time: ${daysOfDeparture} days`)
} else{
    alert("Mission aborted")
}