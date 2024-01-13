var minSteps = function(s, t) {
    function countFreq(str){
        let freq = {};
        for(let i=0; i<str.length; i++){
            if(freq[str[i]]){
                freq[str[i]]++;
            }else{
                freq[str[i]] = 1;
            }
        }
        return freq;
    }
    const freqA = countFreq(s);
    const freqB = countFreq(t);
    let count = 0;
    Object.entries(freqA).forEach((value)=>{
        if(value[1] > freqB[value[0]]){
            count = count + (value[1] - freqB[value[0]]) 
        }else if(!freqB[value[0]]){
            count += value[1]
        }
    })

    return count;
};

const output = minSteps("leetcode", "practice");
console.log('output', output)