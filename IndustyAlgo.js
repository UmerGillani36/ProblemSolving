

function filter(number){
    
    return number/2;
}

function filters(array){
    
    let totalFilters=0;
    let sum=0;
    let length=array.length;
    const arrayCopy=array;
    
    
     for(let i=0 ; i<length ; i++){
        if(array[i]==0){
            splice(i,1)
        }
    }
        length=array.length;

     for(let i=0 ; i<length ; i++){
       
       sum+=array[i];
       
    }
    console.log("sum",sum);
      for(let i=0 ; i<length/2 ; i++){
       
        for(let j=0 ; j<length ; j++){
       
                 if(array[j]>array[j+1]){
                     
                     let value=array[j];
                     array[j]=array[j+1];
                     array[j+1]=value ;
                 }      
    }
       
    }
    
    // 
        for(let i=0 ; i<length ; i++){
      
        let value=array.pop();
        const filterValue=filter(value);
        array.unshift(filterValue);
        
        for(let i=0 ; i<length ; i++){
            let newSum=0;
            for(let i=0 ; i<length ; i++){
       
                newSum+=array[i];
                
                
             }

            console.log("NewSum",newSum);
            if( (sum/2) >= newSum){
                // break;
                return totalFilters;
                  }
                  

                  
    
        
    }
        }
        
        
    
    
    
    
    return totalFilters;
}
// const calculation=(array)=>{
    
   
//     const totalCalculatedPolution;
    
   
      
    
    
//     return {totalFilter , totalCalculatedPolution};
// }

const array=[5,19,8,1];
const totalFilters=filters(array);
console.log(totalFilters)
// const {totalFilter , totalCalculatedPolution} = calculation(array);
// console.log("TotalFilter",totalFilter);
// console.log("Total Calculated Polution",totalCalculatedPolution);