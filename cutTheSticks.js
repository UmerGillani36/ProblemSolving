function cutTheSticks(arr) {

    let n = arr.length;
    let arrcopy = arr;
    let result = []
    let min = 1;
    result.push(n)

    for (let i = 0; i < n; i++) {
        if (arrcopy.length <= 1) {
            return result
        }
        else {

            min = Math.min(...arrcopy)
            arrcopy = arrcopy.map((ele) => { return ele - min })

            for (let j = 0; j < arrcopy.length; j++) {

                if (arrcopy[j] == 0) {
                    arrcopy.splice(j, 1)
                    j--;
                }
            }
            if(arrcopy.length>0){

                result.push(arrcopy.length)
            }


        }
    }
    return result;
}
// let result = cutTheSticks([5, 4, 4, 2, 2, 8])
// let result = cutTheSticks([1 ,2 ,3 ,4 ,3 ,3 ,2 ,1])
let result = cutTheSticks([8 ,8 ,14 ,10, 3, 5 ,14 ,12])
console.log(result)