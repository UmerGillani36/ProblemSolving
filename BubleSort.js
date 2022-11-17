const BubleSort=(list)=>{

const length=list.length;
for (let index = 0; index < length; index++) {
for (let i = 0; i < length; i++) {
  if(i<=length-1){
    let current =list[i];
    let next=list[i+1];
    if (current>next) {
        list[i]=next;
        list[i+1]=current;
    } 
}
}
console.log(list);
}
}
const list=[8,3,-2,0,9,1,4,5,-1,10]
BubleSort(list);