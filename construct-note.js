// add whatever parameters you deem necessary
/*
Inputs -> str1 (message), str2 (group of letters)
Output -> Boolean if str1 can be made in its entirety from str2
This means the frequency of each letter in str2 must be  >= frequency
of each letter in str1
assumptions: Assume that there are only lowercase letters and no space
or special characters in both the message and the letters.

Edge cases: 
1. Both msg and ltrs are empty strings 
2. Only msg is an empty string 
3. Only ltrs is an empty string 

Method: Frequency counter will be utilized

constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true

*/

function constructNote(msg, ltrs) {
    if(msg === "" && ltrs === "") return true;
    if(msg === ""  && ltrs !== "") return true;
    if(msg !== "" && ltrs === "") return false;

    let msgFrq = frequencyCounter(msg);
    let ltrsFrq = frequencyCounter(ltrs);
    // console.log(msgFrq, ltrsFrq);

    for (let char of msg){
        if(!ltrsFrq.has(char)) return false;

        if(ltrsFrq.get(char) < msgFrq.get(char)) return false;
    }
    return true;
}


function frequencyCounter(str){
    let frequencies = new Map();

    for(let char of str){
        let charCount = frequencies.get(char) || 0;
        frequencies.set(char, charCount + 1);
    }

    return frequencies;
}

module.exports = constructNote;