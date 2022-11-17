// let sortBySeason=()=>{
//     let arr=[ 'Fall 2025', 'Spring 2025', 'Summer 2025', 'Winter 2025' ];
// let sortedArr=[];
// arr.forEach(entry=>{
//     let split=entry.split[" "][0]
//     if(split==='Spring'){
//         sortedArr[0]=entry
//     }else if(split==='Summer'){
//          sortedArr[1]=entry
//     }else if(split==='Winter'){
//          sortedArr[2]=entry
//     }else{
//        sortedArr[3]=entry 
//     }
//    })

// sortedArr=sortedArr.filter(s=>s!==undefined)
// return sortedArr;

// }
let sortBySeason=()=>{
    let arr=[ 'Fall 2025', 'Spring 2025', 'Summer 2025', 'Winter 2025' ];
    let season=[ 'Spring', 'Summer', 'Fall', 'Winter' ];
    let sortedArr=[];
season.forEach(val=>{
    arr.forEach(entry=>{
        let split=entry.split(" ")[0];
        console.log(split)
        if(val===split){
            sortedArr.push(val);
        }
    })
   })
console.log(sortedArr);
}


console.log(sortBySeason())