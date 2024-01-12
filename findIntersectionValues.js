var findIntersectionValues = function(nums1, nums2) {

    function findIndex (array1, array2){
        let count = 0;
        for(let i=0; i<array1.length; i++){
            for(let j=0; j<array2.length; j++){
                if(array1[i] === array2[j]){
                    count++;
                    break;
                }
            }
        }
        return count;
    }
    const count1 = findIndex(nums1, nums2);
    const count2 = findIndex(nums2, nums1);

    return [count1, count2];
};

const output = findIntersectionValues([4,3,2,3,1],[2,2,5,2,3,6]);
console.log('output', output);