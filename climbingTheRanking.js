// function climbingLeaderboard(ranked, player) {

//     ranked = [...new Set(ranked)]
//     let leaderboard = [];
//     let rank;
//     player.map((item) => {


//         rank = 1;
//         for (let j = 0; j < ranked.length; j++) {
//             if (item == ranked[j]) {
//                 rank = j + 1;
//                 break;
//             } else if (item < ranked[j]) {
//                 rank++;
//                 // console.log("player",player[i]);
//                 // console.log("rank",rank);
//             }
//         }
//         leaderboard.push(rank)
//     })
//     console.log(leaderboard)
// }
function climbingLeaderboard(ranked, player) {
    // Write your code here
    let result = []
    let collection = [...new Set(ranked)]
    let l = collection.length -1
    
    for ( const player_b of player) {
      while (l >=0) {
        if (player_b >= collection[l]) l--;
        else {
          result.push( l + 2)
          break;
        }
      }
      if( l < 0) result.push(1)
      
    }
    return result

}


// climbingLeaderboard([100,100,50,40,40,20,10],[5,25,50,120])
climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])