let randNum = prompt('If you want to select a specific story, enter the number 0 or 1. If you want to let it be random, leave it blank.');

alert('Enter all words in a present tense. You may choose between doing them singular or plural.');

console.log(randNum);
console.log(typeof randNum);

let adjective1 = prompt('Enter an adjective');
let adjective2 = prompt('Enter an adjective');
let adjective3 = prompt('Enter an adjective');
let adjective4 = prompt('Enter an adjective');

let noun1 = prompt('Enter a noun');
let noun2 = prompt('Enter a noun');
let noun3 = prompt('Enter a noun');
let noun4 = prompt('Enter a noun');
let noun5 = prompt('Enter a noun');
let noun6 = prompt('Enter a noun');
let noun7 = prompt('Enter a noun');

let properNoun1 = prompt('Enter a proper noun');

let verb1 = prompt('Enter a verb');
let verb2 = prompt('Enter a verb');
let verb3 = prompt('Enter a verb');

let adverb1 = prompt('Enter an adverb');

let title1 = prompt('Enter a title');

let number1 = prompt('Enter a number');
let number2 = prompt('Enter a number');
let number3 = prompt('Enter a number');

let measure1 = prompt('Enter a unit of measurment');
let measure2 = prompt('Enter a unit of measurment');

let building1 = prompt('Enter a building');

let group1 = prompt('Enter a group name');

let material1 = prompt('Enter a type of material');

let emotion1 = prompt('Enter an emotion');

let relationship1 = prompt('Enter a relationship');

if (randNum !== '0' && randNum !== '1') {
//    randNum = Math.floor(Math.random() * 2);
    randNum = 3;
}
console.log(randNum);
if (randNum === '0') {
    story = `Once upon a time, in a ${adjective1} ${noun1}, a ${verb1} ${noun2} ${adverb1} ${verb2}.`;
} else if (randNum === '1') {
    story = `The ${title1} stood on the ${adjective1} ${noun1} outside his chambers. It was here the ${noun2} came, after long flight. Their ${noun3} speckled the ${noun1} that rose ${number1} ${measure1} ${adjective4} on either side of him, a ${noun4} and a ${noun5}, ${number2} of the ${number3} that ${verb2}ed over the ${noun6} of the ${adjective2} ${building1}. When first he came to ${properNoun1}, the ${group1} of ${material1} grotesques had made him ${emotion1}, but as the ${measure2} passed he had grown used to them. Now he thought of them as old ${relationship1}. The three of them watched the ${noun7} together with ${verb1}ing.`;
} else {
    story = 'Error. Please try again. If this error persists, give up.';
}

//let story = `The ${title1} stood on the ${adjective1} ${noun1} outside his chambers. It was here the ${noun2} came, after long flight. Their ${noun3} speckled the ${noun1} that rose ${number1} ${measure1} ${adjective4} on either side of him, a ${noun4} and a ${noun5}, ${number2} of the ${number3} that ${verb2}ed over the ${noun6} of the ${adjective2} ${building1}. When first he came to ${properNoun1}, the ${group1} of ${material1} grotesques had made him ${emotion1}, but as the ${measure2} passed he had grown used to them. Now he thought of them as old ${relationship1}. The three of them watched the ${noun7} together with ${verb1}ing.`;


let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`;

console.log(typeof randNum); //returns number