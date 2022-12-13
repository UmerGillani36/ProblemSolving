function separateNumbers(s) {
let split=s.split('');
let prev='';
let next='';
let result=[];
        for(let i=0;i<split.length;i++){
            prev =( i===0 ? split[i]: prev);
            // console.log(prev)
                if(Number(prev)+1=== Number(split[i+1])){
                    console.log('runig')
                   result.push(prev,split[i+1]);
                    prev=split[i+1];
                    result=[...new Set(result)]
                }else{
                    if(Number(prev) > Number(split[i+1])){
                        next+=split[i+1];
                        // console.log('next',next)
                        // console.log('prev',prev)
                        if(Number(next) > Number(prev)){
                            result.push(prev,next);
                        }
                    }else if(Number(prev) == Number(split[i+1])){
                        prev+=split[i+1];
                    }
                    // i++;
                }
         }
         console.log(result);
}
// separateNumbers("1234");
// separateNumbers("99100");
separateNumbers("99910001001");