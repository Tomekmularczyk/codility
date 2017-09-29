function addNumber(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number')
        throw new Error("You did'nt pass number values");

    return a + b;
}

module.exports = addNumber;
