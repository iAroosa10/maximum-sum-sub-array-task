// Maximum sum subArray Problem

arrayData = [-2, 1, -3, 4, -1, 2, 1, -4, 5];
let sizeOfArray = arrayData.length;
let result = maxSumSubstring(arrayData, sizeOfArray);
console.log(result)
function maxSumSubstring(DATA, sizeOfArray) {
       let maximumSum = 0;
    let curSum = 0;
    for (let x = 0; x < sizeOfArray; x++) {
        curSum += arrayData[x];
        if (curSum > maximumSum) {
            maximumSum = curSum;
        }
        else if (curSum < 0) {
            curSum = 0;
        }
    }
    return maximumSum;
}