//declare variables

var adjective = ["big","small","fat","funny","weird","slippery","sad","tall"];

var nounIdea = ["sadness","idleness","depression","excitement","feelings","hope","focus","bordom"];

var nounObject = ["car","house","dog","apple","hat","hair","ball","sweater"];
var newProducts = [];


var randomNumber = Math.floor(Math.random() * 9);

newProducts[0] = adjective[randomNumber] + " " + nounIdea[randomNumber] + " " + nounObject[randomNumber];

randomNumber = Math.floor(Math.random() * 9);

newProducts[1] = adjective[randomNumber] + " " + nounIdea[randomNumber] + " " + nounObject[randomNumber];

randomNumber = Math.floor(Math.random() * 9);

newProducts[2] = adjective[randomNumber] + " " + nounIdea[randomNumber] + " " + nounObject[randomNumber];

randomNumber = Math.floor(Math.random() * 9);

newProducts[3] = adjective[randomNumber] + " " + nounIdea[randomNumber] + " " + nounObject[randomNumber];

randomNumber = Math.floor(Math.random() * 9);

newProducts[4] = adjective[randomNumber] + " " + nounIdea[randomNumber] + " " + nounObject[randomNumber];



//get user input
console.log("provide the first set of values:");
let userAdj  = prompt("enter an adjective:");
let userNoun1  = prompt("enter an noun(idea):");
let userNoun2  = prompt("enter an noun(object):");



adjective.push(userAdj);
nounIdea.push(userNoun1);
nounObject.push(userNoun2);

/*testing to see if the input was actually added

console.log(adjective);
console.log(nounIdea);
console.log(nounObject);

*/


console.log("provide the second set of values:");
 userAdj  = prompt("enter an adjective:");
 userNoun1  = prompt("enter an noun(idea):");
 userNoun2  = prompt("enter an noun(object):");



adjective.push(userAdj);
nounIdea.push(userNoun1);
nounObject.push(userNoun2);



console.log(newProducts);



