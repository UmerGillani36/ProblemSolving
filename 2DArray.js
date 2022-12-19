function hourglassSum(arr) {
    let maximum=0;
    let array=[[],[],[],[]];
    let AdditionArray=[]

    for(let val of arr){
        let index=0;
        for(let i=0; i<val.length;i++){
            if(i+2 !== val.length){
                if(index < 4) {
                    array[index].push(...val.slice(i,i+3));
                }
                index++;
            }
            
        }
    }
    console.log(array);
    array.map((ele, ind)=>{
        let prev=0;
        let next=0;
        let skipOne=8;
        let skipTwo=12;
        for(let i=0; i<4; i++){
        ele.map((val,index)=>{
            tempVal=val;
            if(index<=8){
                if(index!==3 && index!==5){
                    prev+=val;
                }
            }else{
                if(index!==12 && index!==14){
                    next+=val;
                }
            }
           
        })
        console.log('tempval',ele.splice(ind,3))
        // tempVal.splice(i,i+3);
    }
        AdditionArray.push(prev,next);
    })
    console.log(AdditionArray);
    maximum=Math.max(...AdditionArray);
    return maximum;
}
// const result=hourglassSum([
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 0, 0, 0],
//     [0, 0, 2, 4, 4, 0],
//     [0, 0, 0, 2, 0, 0],
//     [0, 0, 1, 2, 4, 0],
// ]);

const result=hourglassSum([
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
]);
console.log(result);