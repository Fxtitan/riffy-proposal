const personalityTrait = (trait) => {
    switch(trait) {
        case 'simple': return 'The color you should choose is white.' ;
        case 'elegant': return 'The color you should choose is black.';
        case 'bubbly': return 'The color you should choose is red.';
        case 'intelligent': return 'The color you should choose is blue.';
        case 'kind': return 'The color you should choose is green.';
        case 'conservative': return 'The color you should choose is grey.';
        case 'confident': return 'The color you should choose is yellow.';
        case 'creative': return 'The color you should choose is orange.';
        case 'reliable': return 'The color you should choose is brown.';
        default: return 'You need to choose a trait.' 
    }
}

module.exports = personalityTrait;