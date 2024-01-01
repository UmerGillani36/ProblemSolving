const shuffleString =(s, indices) => {
    let output = "";
    for(let i=0;i<indices.length;i++){
        const index = indices.findIndex((ele)=> ele === i)
        output= output + s[index]
    }

    return output;
};

const output = shuffleString("codeleet",[4,5,6,7,0,2,1,3]);
console.log('output', output)