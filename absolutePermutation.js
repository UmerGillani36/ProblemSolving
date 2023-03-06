function absolutePermutation(n, k) {

    const obj = {}
    for (let i=1; i <= n; i++){
        if(i-k > 0 && !obj[i-k]){
            obj[i-k] = i
        }
        else if(i+k <= n && !obj[i+k]){
            obj[i+k] = i
        }
        else {
            return [-1]
        }
    }
    return Object.values(obj)
    }

    const result = absolutePermutation(3,0);

    console.log(result);