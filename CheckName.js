
const CheckName = (names, value) => {
    let flag = false;
    names.forEach(element => {
        if (element === value) {
            flag = true;
        }
    });

    if (flag) {
        console.log(`Boom !! ${value} is present`);
    } else {
        console.log(`Sorry !! ${value} is not present`);
    }
}

let names = ['umer', 'zia', 'awais', 'jammal', 'ahsan'];
let value = 'kasjdkajsd';
CheckName(names, value);