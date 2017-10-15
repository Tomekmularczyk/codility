/*
* Podstawowy buble sort przemierza każdy element tablicy tyle razy ile wynosi ilosc elementów
* Daje to niestety słaby wynik O(n^2)
* */

function basicBubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

/**
 * Możemy zastosować 2 optymalizacje:
 *
 * 1. Jeżeli nie było żadnej zamiany elementów w iteracji to znaczy, że tablica jest posortowana. Możemy to sprawdzić za pomocą flagi.
 * 2. Przy N iteracji przez tablice N elementów od końca jest już posortowanych. Przy kolejnych iteracjach możemy je pominąć.
 */
function optimizedBubbleSort(arr) {
    function swapItems(arr, index1, index2) {
        const index1_oldValue = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = index1_oldValue;
    }

    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < (arr.length - 1) - i; i++) {
            if (arr[i] > arr[i + 1]) {
                swapItems(arr, i, i + 1);
                isSorted = false;
            }
        }
    }
}

module.exports.basicBubbleSort = basicBubbleSort;
module.exports.optimizedBubbleSort = optimizedBubbleSort;
