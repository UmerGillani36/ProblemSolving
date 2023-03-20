
function insertionSort1(n, arr) {
    // Write your code here

    for(let i=1; i<n; i++){
        let key = arr[i];
        let j = i - 1;

        while(j>=0 && key < arr[j]){
            arr[j+1] = arr[j]
            console.log(arr.join(' '))
            j--;
        }

        arr[j+1] = key;
    }
    console.log(arr.join(' '))


}

insertionSort1(5,[2 ,4 ,6 ,8 ,3]);