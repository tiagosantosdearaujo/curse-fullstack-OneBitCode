function save() {
    event.preventDefault() // Obs: Cancel event subimit
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value

    alert(`Name: ${name}\nProgramming Language: ${programmingLang}`)
}