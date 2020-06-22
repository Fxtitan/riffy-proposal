//Linked function files//
const personalityTrait = require('./personality-trait.js')
const timeIsMoney = require('./budget.js')

//Global User Inputs//
const traits = getInput(0);
const budget = getInput(1);

//Node functionality//
switch(traits + "|" + budget) {
    case undefined: return console.log('You have failed to pick a trait from the list.');
    case `simple|${budget}`: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'elegant|' + budget: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'bubbly|' + budget: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'intelligent|' + budget: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'kind|' + budget: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'conservative|' + budget: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'confident|' + budget: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case 'creative|' + budget: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    case `reliable|${budget}`: return console.log(personalityTrait(traits)) + console.log(timeIsMoney(budget));
    default:   return console.log('sigh');
}



//HELPER FUNCTION
function getInput(i) {
    return process.argv[i + 2];
}


