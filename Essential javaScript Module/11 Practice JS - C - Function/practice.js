//MOD 1 - 

function greetPilot(name, message){
    alert(message + ", " + name)
}

greetPilot("Tiago Araujo","Welcome")

//MOD 2 - 

function greetPilot1(name, message = "Hi"){
    alert(message + ", " + name)
}

greetPilot1("Tiago Araujo","Welcome pilot")

//MOD 3 - When the user does not declare an argument, we have a default argument to the function.

function greetPilot2(name, message = "Hi"){
    alert(message + ", " + name)
}

greetPilot2("Tiago Araujo")