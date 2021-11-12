// add whatever parameters you deem necessary
/*
Input: An unsorted array containing positive ane negative ints
Output: A rearraged array with positive ints on the right and negative on the left
Condition: Array needs to be rearraged in place 

Assumptions: The rearranged array need not be sorted 

Edge case: 
1. Empty array passed in 

Method: Multiple Pointers

*/
function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(arr[left] > 0){
            left++;
        }else if(arr[right] < 0){
            right--;
        }else{
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr;
}

module.exports = separatePositive;