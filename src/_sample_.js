const a = [3, 2, 1];
const n = 3;

let totalNumberOfSwaps = 0;
function swap(arr, index1, index2) {
    const index1_oldValue = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = index1_oldValue;
    totalNumberOfSwaps++;
}

for (let i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    let numberOfSwaps = 0;

    for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in decreasing order
        if (a[j] > a[j + 1]) {
            swap(a[j], a[j + 1]);
            numberOfSwaps++;
        }
    }

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps === 0) {
        break;
    }
}

console.log(totalNumberOfSwaps);
