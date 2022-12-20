function anagram(s) {
  let length = s.length;
  let rightString = [];
  let leftString = [];
  let count = 0;
  let flag=false;
  if (length % 2 !== 0) {
    return -1;
  }

  leftString = s.slice(0, length / 2).split('');
  rightString = s.slice(length / 2, length).split('');
  rightString = rightString.reverse();
  for (let i = 0; i < length/2; i++) {
    flag=false;
    for(let j=0;j<length/2;j++){
        if (rightString[i] === leftString[j]) {
            console.log(rightString[i],leftString[j])
            flag=true;
            leftString.splice(j,1);
            break;
        }
    }
    if(!flag){
        count++;
    }
  }
  return count;
}

const result = anagram("mnop");
console.log(result);
