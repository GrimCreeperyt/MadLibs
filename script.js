let adjective1 = prompt('Enter an adjective');
let adjective2 = prompt('Enter an adjective');

let noun1 = prompt('Enter a noun');
let noun2 = prompt('Enter a noun');
let noun3 = prompt('Enter a noun');
let noun4 = prompt('Enter a noun');
let noun5 = prompt('Enter a noun');
let noun6 = prompt('Enter a noun');

let verb1 = prompt('Enter a verb');
let verb2 = prompt('Enter a verb');

let adverb1 = prompt('Enter an adverb');

let title1 = prompt('Enter a title');

let number1 = prompt('Enter a number');
let number2 = prompt('Enter a number');
let number3 = prompt('Enter a number');

let distance1 = prompt('Enter a unit of measuring distance');

let building1 = prompt('Enter a building');

let randNum = 2;
let story = ``;
if (randNum === 1) {
    story = `Once upon a time, in a ${adjective1} ${noun1}, a ${verb1} ${noun2} ${adverb1} ${verb2}.`;
} else if (randNum === 2) {
    story = `The ${title1} stood on the ${adjective1} ${noun1} outside his chambers. It was here the ${noun2} 
    came, after long flight. Their ${noun3} speckled the ${noun1} that rose ${number1} ${distance1} tall on 
    either side of him, a ${noun4} and a ${noun5}, ${number2} of the ${number3} that brooded over the ${noun6} 
    of the ${adjective2} ${building1}. When first he came to Dragonstone, the army of stone grotesques had 
    made him uneasy, but as the years passed he had grown used to them. Now he thought of 
    them as old friends. The three of them watched the sky together with foreboding.`;
} else if (randNum === 3) {
    story = ``;
} else if (randNum === 4) {
    story = ``;
} else if (randNum === 5) {
    story = ``;
} else if (randNum === 6) {
    story = ``;
} else if (randNum === 7) {
    story = ``;
} else if (randNum === 8) {
    story = ``;
} else {
    story = `Don't bother`;
}

let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`;