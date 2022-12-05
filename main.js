arrayData = [-2, 1, -3, 4, -1, 2, 1, -4, 5];
let sizeOfArray = arrayData.length;
let result = maxSumSubstring(arrayData, sizeOfArray);
console.log(result)
function maxSumSubstring(DATAS, sizeOfArray) {
       let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < sizeOfArray; i++) {
        currentSum += arrayData[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
        else if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;
}