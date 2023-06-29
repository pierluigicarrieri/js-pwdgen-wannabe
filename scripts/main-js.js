const firstName = prompt("Scrivi il tuo nome!");

const lastName = prompt("Scrivi il tuo cognome!");

const favouriteColor = prompt("E ora il tuo colore preferito!");

const age = prompt("Quanti anni hai?");

const passwordAge = parseInt(age) + 21;

const password = firstName + lastName + favouriteColor + passwordAge;

const passwordWithSpaces = `${firstName} ${lastName} ${favouriteColor} ${passwordAge}`;

document.getElementById("password").innerHTML = `La tua password è: ${password}`;

document.getElementById("password_spaces").innerHTML = `La tua password con spazi fra le parole è: ${passwordWithSpaces}`;
