
const arr = [1, 2, 3, 4];
const removeFromArray = function(array, ...values) {
    return array.filter(item => !values.includes(item));
};

const result = removeFromArray(arr, 3, 2)
console.log(result)

// Do not edit below this line
module.exports = removeFromArray;

