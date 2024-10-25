const leapYears = function(year) {
    const fourYears = year % 4 === 0;
    const oneHundresYears = year % 100 === 0;
    const fourHundredYears = year % 400 === 0;

    if (fourYears && (!oneHundresYears || fourHundredYears)) {
        console.log('true')
        return(true);
    }   else {
        console.log('false')
        return(false);
    }

};
leapYears(240)
// Do not edit below this line
module.exports = leapYears;
