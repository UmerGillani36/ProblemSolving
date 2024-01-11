var countConsistentStrings = function(allowed, words) {
    let count = 0;
    let flag = false;
    for(let i=0; i<words.length; i++){
        const word = words[i];
        flag = false;
        for(let j=0; j<word.length; j++){
            if(!allowed.includes(word[j])){
                flag = true;
                break;
            }
        }
        if(!flag){
            count++
        }
    }
    return count;
};

const output = countConsistentStrings("ab",["ad","bd","aaab","baa","badab"]); 