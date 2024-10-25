
const sumAll = function(lower, higher) {
    let sum = 0;
    if (higher < 0 || lower < 0) {
        return('ERROR');
    }
    if (lower > higher) {
        swap = lower;
        lower = higher;
        higher = swap;
    }
    if (!Number.isInteger(lower) || !Number.isInteger(higher)) {
        return('ERROR')
    }
    for(i = lower; i <= higher; i++) {
        sum += i; 
    }
    console.log(sum);
    return sum;
};
sumAll(1, 4)
sumAll(1, 100)
// Do not edit below this line
module.exports = sumAll;
