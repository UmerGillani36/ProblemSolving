const countMatches = (items, ruleKey, ruleValue)=> {
    let result = 0;
    for(let i = 0; i < items.length; i++){
        for(let j = 0; j < 3; j++){
            if(ruleKey === 'type' && ruleValue === items[i][0]){
                result++;
                break;
            }
            else if(ruleKey === 'color' && ruleValue === items[i][1]){
                result++;
                break;
            }
            else if(ruleKey === 'name' && ruleValue === items[i][2]){
                result++;
                break;
            }
        }
    }
    return result;
};

const result = countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],"color","silver");
console.log('result',result)