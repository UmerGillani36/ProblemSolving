
const AddIfNotPresent = (names, value) => {

    let flag = false;
    names.forEach(element => {
        if (element === value) {
            flag = true;
        }
    });

    if (flag) {
        console.log(`Boom !! ${value} is present`);
    } else {

        names.push(value);

    }
    return names;
}

let names = ['umer', 'zia', 'awais', 'jammal', 'ahsan'];
let value = 'shan';
const results=AddIfNotPresent(names, value)
console.log(results)