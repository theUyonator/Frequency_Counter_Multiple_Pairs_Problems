// add whatever parameters you deem necessary
/*
Input: Array of ints 
Output: Pivot Index 
Condition: Return the index where the sum of numbers on the right
equal the some of numbers on the left

Assupmtions:
1. If there is another pivot index, choose the smallest index
2. We return -1 when there is no index  

Method:
Multiple Pointers

Examples:
pivotIndex([1,2,1,6,3,1]) // 3
pivotIndex([5,2,7]) // -1  no valid pivot index
pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 
however there is a smaller valid pivot at 1: -1 = -3 + 2
*/
function pivotIndex(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    };

    let left_sum = 0;

    for(let i = 0; i < arr.length; i++){
        if(i > 0) left_sum += arr[i - 1];
        if(total - left_sum - arr[i] === left_sum) return i;
    }

    return -1;
   
}

module.exports = pivotIndex;
