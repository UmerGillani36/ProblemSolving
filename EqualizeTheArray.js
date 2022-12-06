function equalizeArray(arr) {
    let deletedValues=[];
    let flag=false;
    let temp;
    let tempValue;
    for(let [i,val] of arr.entries()){
        if(arr.every((element)=>element===val)){
            return 0;
        }
        flag=true;
        for(let b=i+1; b<arr.length ; b++){
           if(val===arr[b]){
            temp=arr.splice(b,1);
            tempValue=temp.pop()
            deletedValues.push(tempValue)
            if(flag){
                temp=arr.splice(i,1);
                tempValue=temp.pop()
                deletedValues.push(tempValue)
                flag=false;
            }
           }
        }
    }
    if(deletedValues.length > arr.length){
        return arr;
    }else{
        return deletedValues;
    }

}
// const result=equalizeArray([3, 3, 2, 1, 3]);
const result=equalizeArray([1,2,3,1,2,3,3,3]);
// const result=equalizeArray([1,2,2,3]);
console.log(result);




// if(val===arr[b]){
//     flag=true
//     break;
// }else if(b===arr.length-1){
//     if(arr[0]!==arr[b]){
//         console.log('runing');
//         deletedValues.push(arr.pop())
//     }
//     flag=false;
//     break;
// }
// else{
// }
// console.log(flag);
// if(flag===false){
//     deletedValues.push(arr.splice(i,1))
// }