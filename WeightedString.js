//Case 1 
let str="aaabbbbcccddd";
let arrayofObj=[];
let calc=[];
let count;
let que=[9,7,8,12,5];
let result=[];

   for(let [i,val] of str.split('').entries()){
       count=1;     
       for(let j=i+1; j<str.length; j++){
           if(str[i]===str[j]){
            // console.log(str[i],str[j]);
            count++;
        }
        else{
            arrayofObj.push({char:String(str[i]), num: count});
            // str.split('').splice(0,count).join('');
            break;
        }
        if(j===str.length-1){
        arrayofObj.push({char:String(str[i]), num: count});
        }
       
       }
       if(i==str.length-1){
        arrayofObj.push({char:String(str[i]), num: count});

    }
}
arrayofObj.map((val)=>{
        let check=str.charCodeAt(str.indexOf(val.char));
        let a=check-96;
            let res=a*val.num;
            calc.push(res);
})

for(let i=0;i<que.length;i++){
    if(calc.includes(que[i])){
        result.push("Yes");
    }else{
        result.push("No");
    }
}

console.log(result)


//Case 2

// function weightedUniformStrings(s, queries) {
//     const substr = s.match(/(.)\1{0,}/g);
//     let weights = new Set();
//     let ans = [];
    
//     for (let i = 0; i < substr.length; i++) {
//         for (let count = 1; count <= substr[i].length; count++) {
//             weights.add((substr[i].charCodeAt(0) - 96) * count);
//         }
//     }
    
//     queries.forEach(val => {
//         const include = weights.has(val) ? 'Yes' : 'No';
//         ans.push(include);
//     });
    
//     return ans
// }

//Case 3 unsolved


// var result2=[]
// function factorial(x,y) 
// { 
//   if (y === 0)
//  {
//     return 1;
//  }
//   result2.push(x*y)
//   return factorial(x,y-1);
// }

// function weightedUniformStrings(s, queries) {
//     let str=s;
//     let arrayofObj=[];
//     let calc=[];
//     let result=[];
//     let count;
//     let obj={}
//     let splitted=str.split('')

// let prev;
// let temp={}
//   for(var i=0;i<splitted.length;i++){
//     if(!obj[splitted[i]]){
//         obj[splitted[i]] = 1
//         prev=splitted[i]
//     }else{
//         if(splitted[i]===prev){
//             obj[splitted[i]]=obj[splitted[i]]+1
//         }else{
//             if(temp[splitted[i]]){
//                 temp[splitted[i]]= temp[splitted[i]]+1
//             }else{
//                 temp[splitted[i]]=1
//             } 
          
          
//             if(temp[splitted[i]] > obj[splitted[i]]){
//                 obj[splitted[i]]=temp[splitted[i]]
//             }
//         }
//     }
// }
// Object.keys(obj).map((val)=>{
//     let code=str.charCodeAt(str.indexOf(val))-96;
//     calc.push({code,iterator:obj[val]});
// })
// for(var j=0;j<calc.length;j++){
//     factorial(calc[j].code,calc[j].iterator)
// }
// for(let i=0;i<queries.length;i++){
//     if(result2.includes(queries[i])){
//         result.push("Yes");
//     }else{
//         result.push("No");
//     }
// }
// return result;
// }
