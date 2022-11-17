
function missingNumbers(arr, brr) {
    let result=[];
    let flag=false;
    for(let br of brr){
        flag=false;
        for(let [i,ar] of arr.entries()){
            if(br === ar){
                flag=true;
                arr.splice(i,1);
                break;
            }
        }
        if(flag==false){
            result.push(br);
        }
    }
    result.sort();
    console.log(result.sort)
    return [...new Set(result)]

}

// let result=missingNumbers(
//     [203,204,205,206,207,208,203,204,205,206],[203,204,204,205,206,207,205,208,203,206,205,206,204]);
let result=missingNumbers(
    [11,4,11,7,13,4,12,11,10,14],[11,4,11,7,3,7,10,13,4,8,12,11,10,14,12]);

    console.log(result);
