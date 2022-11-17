function jumpingOnClouds(c, k) {
    let energy = 100;
    let n = c.length;
    let inc = k - 1;
    for (let i = 0; i < n; i++) {
        if ((i + k) % n == 0) {
            if (c[(i + k) % n] == 1) {
                energy = energy - 3;
            } else if (c[(i + k) % n] == 0) {
                energy = energy - 1;

            }

            k += inc;
            return energy
        } else {
            if (c[(i + k) % n] == 1) {
                energy = energy - 3;
            } else if (c[(i + k) % n] == 0) {
                energy = energy - 1;

            }

            k += inc;

        }
    }
    return energy;
}
// let energy = jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2); //92
let energy=jumpingOnClouds([1 ,1 ,1 ,0 ,1 ,1 ,0, 0, 0 ,0],3);
console.log(energy) //80