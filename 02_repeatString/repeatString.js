const repeatString = function(string, repetition) {
    let words = ''
    if (repetition < 0) {
        console.log('ERROR')
        return ('ERROR')
    }
    for (i=0; i < repetition; i++) {
        words += string
    }
    console.log(words)
    console.log(number)
    return words
};
const number = Math.floor(Math.random() * 1000)
repeatString('hey', 3)
repeatString('hello', 10)
repeatString('hi', 1)
repeatString('bye, 0')
repeatString('goodbye', -1)
repeatString('odin', number)
repeatString('', 10)
// Do not edit below this line
module.exports = repeatString;
