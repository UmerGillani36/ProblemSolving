function acmTeam(topic) {
    let length = topic.length;
    let valLength = topic && topic[0].length;
    let maximumTopics = 0;
    let maximumTeams = 0;
    let temp;
    let knownTopics = [];
    let i=0;
    let j=i+1;
    while(i != length-1){
        temp=0;
        for(let k=0; k<valLength;k++){
            if(topic[i].charAt(k) == '1' || topic[j].charAt(k) == '1'){
                temp++;
            }
        }
        knownTopics.push(temp)
        j+=1;
        if(j === length){
            i += 1;
            j = i + 1;
        }
    }
    console.log(knownTopics);

    maximumTopics = Math.max(...knownTopics);
    for(let val of knownTopics){
        if(maximumTopics === val){
            maximumTeams++;
        }
    }

    return [maximumTopics , maximumTeams]
}

const result = acmTeam(['10101','11100','11010','00101']);

console.log(result);