
            // A00 A01 A02 
            // A10 A11 A12 
            // A20 A21 A22 
           

const printDiagonalSums=(mat, n)=>
{

    let length=mat.length;
    console.log(length);
    let principal = 0, secondary = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
 
            //  principal diagonal
            if (i == j)
                principal += mat[i][j];
 
            //secondary diagonal
            if ((i + j) == (length - 1))
                secondary += mat[i][j];
        }
    }
 
    console.log("Principal Diagonal:",principal );
    console.log("Secondary Diagonal:",secondary );
}
arr = [
    [1, 2, 3,4],
    [4, 5, 6,4],
    [7, 8, 9,4],
    [7, 8, 9,4],

];
printDiagonalSums(arr,3);