// add whatever parameters you deem necessary
/*
Inputs: arr1 and arr 2
Output: Obj{ arr1[i]: arr2[i]}

Edge Cases:
1. arr1.length > arr2.length 
2. arr2.length > arr1.length 
3. arr1.length === []

clarifying Question:
1. What should I return is the first array is empty?

twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}

*/
function twoArrayObject(arr1, arr2) {
    let obj={};
    for(let i = 0; i < arr1.length; i++){
        if(i > arr2.length - 1){
            obj[arr1[i]] = null;
        }else{
            obj[arr1[i]] = arr2[i];
        }
    }

    return obj;
}

module.exports = twoArrayObject;
