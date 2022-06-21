let distance = prompt("Entry with your distance in light-years.")
let unitOptions = prompt("Which unit do you want to convert to?\npc (Parsec)\nau (Astronomical unit)\nkm (Kilometers)")

switch(unitOptions){
    case "pc":
        let typePc = "light-years -> parsec"
        let valueInPc = distance * 0.306601
        alert(`Your distance in light-years is ${distance}.\nYou chose to convert the distance to ${typePc}.\nYour distance in parsec is ${valueInPc}.`)
        break
    case "au":
        let typeAu = "light-years -> Astromical unit"
        let valueInAu = distance * 63241.1
        alert(`Your distance in light-years is ${distance}.\nYou chose to convert the distance to ${typeAu}.\nYour distance in Astromical unit is ${valueInAu}.`)
        break
    case "km":
        let typeKm = "light-years -> Kilometers"
        valueInKm = distance * (9.5 * Math.pow(10,12))
        alert(`Your distance in light-years is ${distance}.\nYou chose to convert the distance to ${typeKm}.\nYour distance in Kilometers is ${valueInKm}.`)
        break
    default:
        alert("Error")
}