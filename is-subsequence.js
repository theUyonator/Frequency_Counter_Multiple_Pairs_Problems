// add whatever parameters you deem necessary
/*
Input: two strings 
Output: Boolean
Condition: str1 is a subset of str2 meaning 
str1 can be made from str2 and the order of the characters of
str1 matters

Edge Cases:
1. An empty str is passed in 
2. Strings contain spaces 

Method:
Multiple Pointers

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
*/
function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;

    while (i < str1.length && j < str2.length){
        if(str1[i] === str2[j]){
            i++;
            j++;
        }else{
            j++;
        }
    }

    return i === str1.length;
  
}



module.exports = isSubsequence;
