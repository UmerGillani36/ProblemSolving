
//  ans = 0
//  count = 0
//  for i in path:
//      if i=='U':
//          count += 1
//      elif i == 'D' and count == 0:
//          count -= 1
//          ans += 1
//      elif i == 'D':
//          count -= 1
//  return ans

function countingValleys(steps, path) {
    let count=0; 
    let valley=0;
    
        for(let i=0 ; i<steps ; i++){

            if(path.charAt(i)=="U"){
                count++;
                up=true;
            }else if(path.charAt(i)=="D" && count==0){
                count--;
                valley++;
                }
                else if(path.charAt(i)=="D"){
                    count--;
                }
           
        }
        return valley;
    }

   const valley= countingValleys(12,"DDUUDDUDUUUD");
   console.log(valley)