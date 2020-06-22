//budget could output the names of the cars
// i can turn this function into a variable 
// link this variable to the Trait.js file

const timeIsMoney = (money) => {
    if (money >= 0 && money <= 1000) {
        return "You'll be building a Honda or a Acura";
    } else if (money > 1001 && money <= 5000) {
        return "You'll be building a Lexus, Nissan, or a Mazda. "
    } else {
        return "You'll be building a Supra, a Skyline R34, or a RX-7"
    }
}

module.exports = timeIsMoney;