// First 4 variables gets info from the user through prompts

const firstName = prompt("Scrivi il tuo nome!");

const lastName = prompt("Scrivi il tuo cognome!");

const favouriteColor = prompt("E ora il tuo colore preferito!");

const age = prompt("Quanti anni hai?");

/* The "passwordAge" variable takes the age: string variable and converts it 
into a number value, then adds it to 21 */

const passwordAge = parseInt(age) + 21;

/* The "password" variable concatenates the top 3 string variables and "passwordAge" 
using the + operator. No need to manually recast "passwordAge" as string, done by default by JS */

const password = firstName + lastName + favouriteColor + passwordAge;

/* The "passwordWithSpaces" variable is used solely to demonstrate the Template Literal mechanism.
Other than this, same as above */

const passwordWithSpaces = `${firstName} ${lastName} ${favouriteColor} ${passwordAge}`;

/* Object "document" calls the "getElementById()" function using the target elements id 
as argument for the call. After doing so, point operator and "innerHtml" propriety followed by 
the = operator allows for modification of "innerHtml" (wich is the content of the targeted html element) */

document.getElementById("password").innerHTML = `La tua password è: ${password}`;

document.getElementById("password_spaces").innerHTML = `La tua password con spazi fra le parole è: ${passwordWithSpaces}`;
