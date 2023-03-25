function findMedian(arr) {
    // Write your code here
    let median = 0;
    let length = arr.length;
    for(let i=1; i<length; i++){
        let key = arr[i];
        let j = i - 1;

        while(j>=0 && key < arr[j]){
            arr[j+1] = arr[j]
            j--;
        }

        arr[j+1] = key;
    }
    let index = (length-1)/2
    median = arr[index] 
    return median;

}

let result = findMedian([2 ,4 ,6 ,8 ,3]);
console.log(result)