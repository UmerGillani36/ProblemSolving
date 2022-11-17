const viralAdvertisment=(n)=>{

let shared=[5]
let liked=[2]
let comulative=2;

for(let i=1; i<n ; i++){
    shared.push(liked[i-1]*3)
    let val=shared[i];
    let like=Math.floor(val/2);
    liked.push(like)
    comulative+=liked[i];
}
return comulative;

}

viralAdvertisment(5);