//Linked function files//
const personalityTrait = require('./personality-trait.js')
const timeIsMoney = require('./budget.js')

//Global User Inputs//
const traits = getInput(0);
const budget = getInput(1);

//Node functionality//
switch(traits + "|" + budget) {
    case undefined: return console.log('You have failed to pick a trait from the list.');
    case 'simple|500': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'elegant|3000': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'bubbly|10000': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'intelligent|600': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'kind|5000': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'conservative|750': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'confident|12000': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'creative|1001': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'reliable|20': return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    default:   return console.log('sigh');
}



//HELPER FUNCTION
function getInput(i) {
    return process.argv[i + 2];
}


