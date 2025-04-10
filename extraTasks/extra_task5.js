
let dayCost = 40;
let discountFor7Days = 50;
let discountFor3Days = 20;

function transportation(numberOfDays) {
    if (numberOfDays >= 7) {
        return (numberOfDays * dayCost) - discountFor7Days;
    } else if (numberOfDays >= 3) {
        return (numberOfDays * dayCost) - discountFor3Days;
    }
    return numberOfDays * dayCost;
}

console.log("The cost of transportation is: " + transportation(7) + "$");