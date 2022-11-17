function pangrams(s) {
    let alpha=['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o',  'p',
    'q', 'r', 's', 't', 'u', 'v','w', 'x','y', 'z'];
    let flag=false;
    let count=0;
    let split=s.replace(/ /g,'').split('');
    for(let val of alpha){
        for(let check of split){
            if(val===check.toLowerCase()){
                flag=true;
                count+=1;
                break;
            }else{
                flag=false;
            }
        }
        
        if(flag==false){
            break;
        }
        
    }
    if(count==26){
        return 'pangram';
    }else{
        return 'not pangram';
    }
    
}

const result=pangrams('We promptly judged antique ivory buckles for the next prize');
console.log(result);