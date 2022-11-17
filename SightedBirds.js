
function migratoryBirds(arr) {

    let length=arr.length;
    let sightedBirsds=[]; 
    let count=0;
    
            for(let i=1 ; i<=5 ; i++){
                count=0;
                for(let j=0 ; j<length ; j++){
                    if(i==arr[j]){
                        count++;
                    }
                }
                        sightedBirsds.push(count)
            }
           const maxNumber= Math.max(...sightedBirsds);

           for(let i=0 ;i<5 ;i++ ){
                if(maxNumber==sightedBirsds[i]){
                        return i+1;
                }
           }
           
    
    }const arr=[1, 4 ,4, 4, 5 ,3]
    const value=migratoryBirds(arr);
    console.log(value);