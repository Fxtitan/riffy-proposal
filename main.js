//Linked function files//
const personalityTrait = require('./personality-trait.js')
const timeIsMoney = require('./budget.js')

//Global User Inputs//
const traits = getInput(0);
const budget = getInput(1);

//Node functionality//
switch(traits) {
    case undefined: return console.log('You have failed to pick a trait from the list.');
    case 'simple': return console.log(personalityTrait(traits));
    case 'elegant': return console.log(personalityTrait(traits));
    case 'bubbly': return console.log(personalityTrait(traits));
    case 'intelligent': return console.log(personalityTrait(traits));
    case 'kind': return console.log(personalityTrait(traits));
    case 'conservative': return console.log(personalityTrait(traits));
    case 'confident': return console.log(personalityTrait(traits));
    case 'creative': return console.log(personalityTrait(traits));
    case 'reliable': return console.log(personalityTrait(traits));
    default:   return console.log('sigh');
}



//HELPER FUNCTION
function getInput(i) {
    return process.argv[i + 2];
}


