let oldestPersonName = prompt("What's the oldest person's name?");
let oldestPersonAge = prompt( "How old are the oldest person?");
let youngestPersonName = prompt("What's the youngest person's name?");
let youngestPersonAge = prompt( "How old are the youngest person?");

//Command "parseInt(input-variable)" - transform value type text in value type number.
let ageDifference = parseInt(oldestPersonAge) - parseInt(youngestPersonAge);


alert(`The oldest person's name is ${oldestPersonName} and your age is ${oldestPersonAge}`);
alert(`The youngest person's name is ${youngestPersonName} and your age is ${youngestPersonAge}`);
alert(`The age difference is ${ageDifference}`);


