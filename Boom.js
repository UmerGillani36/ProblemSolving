// if there is seven in an array return Boom

const boom=(array)=>{
    let flag=false;
    array.forEach(element => {
        
        if(element===7){
            flag=true;
        }
    });
    if(flag){
        console.log('Boom')
    }else{
        console.log('Sorry...There isn\'t any 7 in an array !! ')
    }
}
const array=[1,2,3,4,5,6,7];
boom(array);
