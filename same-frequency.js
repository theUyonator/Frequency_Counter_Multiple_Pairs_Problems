// add whatever parameters you deem necessary
/*
Inputs: int1 & int2
Output: Boolean
Condition: each digit in int1 must have the same frequency as in int2

Assumptions:
1. Only integers will be passed in

Method: Frequency Counter 

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/
function sameFrequency(int1, int2) {
    let int1Frq = frequencyCounter(int1);
    let int2Frq = frequencyCounter(int2);
    console.log(int1Frq, int2Frq);

  for(key of int1Frq.keys()){
      if(int2Frq.has(key) === false) return false;
      if(int1Frq.get(key) !== int2Frq.get(key)) return false;
  }

  return true;
}

function frequencyCounter(int){
    let str = int.toString();
    let frequencies = new Map();

    for(char of str){
        let valCount = frequencies.get(char) || 0;
        frequencies.set(char, valCount + 1);
    }

    return frequencies;
}

module.exports = sameFrequency;
