function findMode(arr) {
    if (!arr.length) {
        return null;
    }

    // put everything to map and track highest occurrence
    const map = new Map();
    let maxOccurrences = 1;
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        let counterInMap = map.get(el);
        if (counterInMap) {
            counterInMap += 1;
            map.set(el, counterInMap);
        } else {
            map.set(el, 1);
        }

        if (counterInMap > maxOccurrences) {
            maxOccurrences = counterInMap;
        }
    }

    // find elements with highest occurrence
    const elementsWithHighestOccurrence = [...map.entries()]
        .filter(([, value]) => value === maxOccurrences)
        .map(([key]) => key);

    return Math.min(...elementsWithHighestOccurrence);
}

function findMean(arr) {
    const sum = arr.reduce((prev, curr) => prev + curr, 0);
    return parseToOneDecimalPoint(sum / arr.length);
}

function findMedian(arr) {
    if (!arr.length) {
        return 0;
    }

    // array must be sorted
    const copy = [...arr];
    copy.sort((a, b) => a - b);

    const middle = Math.floor(copy.length / 2);
    if (copy.length % 2 === 0) {
        const median = (copy[middle - 1] + copy[middle]) / 2;
        return parseToOneDecimalPoint(median);
    } else {
        const median = copy[middle];
        return parseToOneDecimalPoint(median);
    }
}

function parseToOneDecimalPoint(value) {
    const truncated = value.toFixed(1);
    return parseFloat(truncated);
}

module.exports.findMode = findMode;
module.exports.findMean = findMean;
module.exports.findMedian = findMedian;
