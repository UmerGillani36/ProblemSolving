function jumpingOnClouds(c) {


let count=0;
let ar=[];
while(c.length !== 0){
    for(let [i,val] of c.entries()){
        if(val==0 && c[i+1]==1){
        ar.push(c.splice(0,i+1))
        break;
    }
    if(val==1){
        c.splice(i,1);
        break;
    }
    if(c.every((val)=> val==0)){
        ar.push(c.splice(0,c.length));
        break;
    }
}
if(c.length==0){
    break;
}
}
for(let [i,val] of ar.entries()){
    if(val.length==0){
        continue;
    }
    else{
        if(i===0){
            let len = val.length;
            count+=Math.floor(len/2) 
        }else{
            count++;
            len = val.length;
            count+=Math.floor(len/2) 
        }
    }
}
return count;
}
let result=jumpingOnClouds([0,0,0,0,1,0,0,1,0]);
console.log(result);