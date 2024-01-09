var isAcronym = function(words, s) {
    let flag = true;
    if(words.length !== s.length) return false;
    for(let i=0; i<words.length; i++){
        if(s[i] !== words[i][0]){
            flag = false
        }
    }

    return flag;
};

const output = isAcronym(["alice","bob","charlie"],"abc");
console.log('output', output);