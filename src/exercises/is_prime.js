function isPrime(value) {
    if(value === 2) {
        return true;
    }

    if(value === 1 || (value % 2 === 0)) {
        return false;
    }

    for(let j = 3; j <= Math.sqrt(value); j += 2){
        if(value % j === 0) {
            return false;
        }
    }

    return true;
}

module.exports.isPrime = isPrime;
