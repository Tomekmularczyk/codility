function makeChange(coins, money, index) {
    if (money === 0) {
        return 1;
    }

    if (index >= coins.length) {
        return 0;
    }

    let amountWithCoin = 0;
    let nrOfWays = 0;
    while (amountWithCoin <= money) {
        let remaining = money - amountWithCoin;
        nrOfWays += makeChange(coins, remaining, index + 1);
        amountWithCoin += coins[index];
    }

    return nrOfWays;
}

function solution(coins, money) {
    return makeChange(coins, money, 0);
}