const timeIsMoney = (money) => {
    if (money >= 101 && money <= 1000) {
        return "You'll be building a Honda or a Acura";
    } else if (money > 1001 && money <= 5000) {
        return "You'll be building a Lexus, Nissan, or a Mazda.";
    } else if (money < 100) {
        return "But, I'm sorry your wasting your time.";
    } else {
        return "You'll be building a Supra, a Skyline R34, or a RX-7";
    }
}

module.exports = timeIsMoney;