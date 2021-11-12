// add whatever parameters you deem necessary
/*
Inputs: An array and an int 
Output: An int
Condition: The int outputed should be the number of pairs that sum
up to give the int inputed. If no pairs return 0

Assumptions:
1.There are no duplicate numbers in the array 

Clarifying questions:
1. Are we just considering integers?

Method:
Multiple Pointers 

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2
*/

// Solution using frequency counter time complexity O(n)
// space complexity O(n)
function countPairs(arr, int) {
    let pairs = [];
    let arrFrq = frequencyCounter(arr);
    console.log(arrFrq);

    for(let key of arrFrq.keys()){
        let diff = int - key;
        console.log(key, diff);
        if(arrFrq.has(diff) === true && diff !== key){
            pairs.push(key);
            pairs.push(diff);
            arrFrq.delete(key);
            arrFrq.delete(diff);
        }
    }

    return pairs.length / 2;

   
}

function frequencyCounter(arr){
    let frequencies = new Map();

    for(let el of arr){
        let valCount = frequencies.get(el) || 0;
        frequencies.set(el, valCount + 1);
    }

    return frequencies;
}
// Easier solution with time complexity O(n^2) and space complexity
// O(n)

// function countPairs(arr, n){
//     let pairs = [];

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === n ){
//                 pairs.push(arr[i]);
//                 pairs.push(arr[j]);
//             }
//         }
//     }

//     return pairs.length / 2;
// }


module.exports = countPairs;