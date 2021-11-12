// add whatever parameters you deem necessary
/*
Input: Array of integers
Output: length of consecutive decrease 

Clarifying Questions:
1. Will the entire array be considered ?

Examples:
longestFall([5, 3, 1, 3, 0]) // 3, 5-3-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 1]) // 2, 2-1 is the longest consecutive sequence of decreasing integers
longestFall([2, 2, 2]) // 1, 2 is the longest consecutive sequence of decreasing integers
longestFall([5, 4, 4, 4, 3, 2]) // 3, 4-3-2 is the longest
longestFall([9, 8, 7, 6, 5, 6, 4, 2, 1]) // 5, 9-8-7-6-5 is the longest
longestFall([]) // 0
*/
function longestFall(arr) {
   let ans = 0;
   let accumulator = 0;

   if(arr.length === 0){
       return 0;
   }

   for(let i = 0; i < arr.length; i++){
       if(arr[i + 1] < arr[i]){
            accumulator++;
            ans = Math.max(ans, accumulator + 1)
       }else{
           accumulator = 0;
       }
   }
   if(ans === 0){
       return ans + 1;
   }else{
       return ans;
   };
}



module.exports = longestFall;
