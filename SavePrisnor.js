const savePrisoner=(n,m,s)=>{
let start=s;
let warnPrisnor=0;
let candies=m;

while(candies>=0){
    for(let j=start; j<n+start; j++){
        if(candies==0){
            return warnPrisnor
        }else{

            warnPrisnor=j;
        }
        candies--;
    }

}
        
    
    }
    
    const warnPrisnor=savePrisoner(7,19,2);
    console.log(warnPrisnor)
// savePrisoner(3,7,3);
// savePrisoner(7,19,2);