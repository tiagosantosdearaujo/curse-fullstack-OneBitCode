
//Command "alert" - Show window alert on browser.
alert("Welcome! We will ask your name and age!")

//type let - variable mutable.
//Command "prompt" - Show window on browser with message, it is possible to make a text input. 
let name = prompt("What's your name?");
let age = prompt( "How old are you?");

//Command "confirm" - Show window on browser with two options, "ok" return "true" and "cancel" return false.
confirm("Could you confirm your age, " + age + " years old?");

// Command ${input-variable} - bring the value of the variable to string.
alert(`Your name is ${name} and your age is ${age}`);



