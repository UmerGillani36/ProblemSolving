function rotateLeft(d, arr) {
    let temp=arr;
    let result=[];

    for(let i=0; i<d; i++){
            let temp=arr.shift();
            arr.push(temp);
    }
}

let result=rotateLeft(4,[1,2,3,4,5]);
console.log(result);


//if you want to rotate by element than use below code


// function rotateLeft(d, arr) {
//     let temp=arr;
//     let result=[];

//     for(let i=0; i<arr.length; i++){
//         let index=d+i;
//         let mod = index % arr.length;
//         result[mod]=temp[i]
//     }
//     return result;
// }

// let result=rotateLeft(4,[1,2,3,4,5]);
// console.log(result);