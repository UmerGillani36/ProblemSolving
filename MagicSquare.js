function formingMagicSquare(s) {
    let cost = 36;
    let temp = 0;
   
       let valid = 
           [
               [4, 9, 2, 3, 5, 7, 8, 1, 6],
               [4, 3, 8, 9, 5, 1, 2, 7, 6],
               [2, 9, 4, 7, 5, 3, 6, 1, 8],
               [2, 7, 6, 9, 5, 1, 4, 3, 8],
               [8, 1, 6, 3, 5, 7, 4, 9, 2],
               [8, 3, 4, 1, 5, 9, 6, 7, 2],
               [6, 7, 2, 1, 5, 9, 8, 3, 4],
               [6, 1, 8, 7, 5, 3, 2, 9, 4],
           ];
      
       for(let i = 0; i < valid.length; i++){
           temp = 
               Math.abs(s[0][0] - valid[i][0]) + 
               Math.abs(s[0][1] - valid[i][1]) + 
               Math.abs(s[0][2] - valid[i][2]) +
               Math.abs(s[1][0] - valid[i][3]) + 
               Math.abs(s[1][1] - valid[i][4]) + 
               Math.abs(s[1][2] - valid[i][5]) +
               Math.abs(s[2][0] - valid[i][6]) + 
               Math.abs(s[2][1] - valid[i][7]) + 
               Math.abs(s[2][2] - valid[i][8]);
               console.log("temp",temp);
           cost = temp < cost ? temp : cost;
           console.log("cost",cost);
       }
       return cost;
   }

  let cost= formingMagicSquare([[5 ,3, 4],
                                [1, 5 ,8],
                                [6, 4, 2]])

console.log(cost);