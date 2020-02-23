// Complete the freqQuery function below.
function freqQuery(queries) {
  const map = new Map();
  const frequenciesMap = new Map();
  const result = queries.reduce((prev, [key, value]) => {
    switch (key) {
      case 1: {
        if (map.has(value)) {
          const count = map.get(value);
          map.set(value, count + 1);

          if (frequenciesMap.has(count)) {
            const c = frequenciesMap.get(count);
            frequenciesMap.set(count, c - 1);
          }
          if (frequenciesMap.has(count + 1)) {
            const c = frequenciesMap.get(count + 1);
            frequenciesMap.set(count + 1, c + 1);
          } else {
            frequenciesMap.set(count + 1, 1);
          }
        } else {
          map.set(value, 1);
          frequenciesMap.set(1, value);
        }
        break;
      }
      case 2: {
        if (map.has(value)) {
          const count = map.get(value);
          if (count === 1) {
            map.delete(value);
            if (frequenciesMap.has(count)) {
              const c = frequenciesMap.get(count);
              if (c === 1) {
                map.delete(c);
              } else {
                frequenciesMap.set(count, c - 1);
              }
            }
          } else {
            map.set(value, count - 1);

            const c = frequenciesMap.get(count);
            frequenciesMap.set(count, c - 1);
          }
        }
        break;
      }
      case 3: {
        // const y = [...map.values()];
        // if (y.includes(value)) {
        if (frequenciesMap.has(value)) {
          prev.push(1);
        } else {
          prev.push(0);
        }
        break;
      }
      default:
    }
    return prev;
  }, []);

  return result;
}

const quer = freqQuery([
  [1, 5],
  [1, 6],
  [3, 2],
  [1, 10],
  [1, 10],
  [1, 6],
  [2, 5],
  [3, 2]
]);
console.log(quer);
