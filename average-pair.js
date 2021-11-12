// add whatever parameters you deem necessary
/*
Inputs: Sorted array of integers & a target average
Output: Boolean 

Clarifying questions:
1. Are to round up the float to 1 decimal place ?
2. Are we to always return a float ?

Edge cases:
1. The array is epmty 
2. The target average is 0

Method: Multiple Pointers

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false
*/
function averagePair(arr, trgtAvg) {
    if(arr.length === 0) return false;
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        let avg = (arr[left] + arr[right]) / 2;
        if(avg === trgtAvg){
            return true;
        } else if (avg > trgtAvg){
            right--;
        }else {
            left++;
        }
    }
    return false;
};

module.exports = averagePair;
