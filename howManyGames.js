function howManyGames(p, d, m, s) {
    let count = 0;
    while (p > m && s > 0) {
        s -= p;
        p = Math.max(p - d, m);
        count++;
    }
    return count + Math.floor(s / m);
}
const result = howManyGames(20,3,6,85);

console.log(result);