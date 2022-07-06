function show() {
    let element1 = document.getElementById("name")
    console.log(element1.value)

    let element2 = document.getElementsByName("phone")
    console.log(element2[0].value)
    console.log(element2[1].value)

    let element3 = document.querySelectorAll("div#phones input[name='phone'")
    console.log(element3[0].value)
    console.log(element3[1].value)
}