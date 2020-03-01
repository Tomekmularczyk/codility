const { MinHeap } = require("../data_structures/MinHeap");
const { MaxHeap } = require("../data_structures/MaxHeap");

const addToHeap = (minHeap, maxHeap, val) => {
  if (minHeap.peek() === undefined || val < minHeap.peek()) {
    minHeap.add(val);
  } else {
    maxHeap.add(val);
  }
};

const rebalance = (leftHeap, rightHeap) => {
  const smallerHeap =
    leftHeap.array.length < rightHeap.array.length ? leftHeap : rightHeap;
  const biggerHeap =
    leftHeap.array.length > rightHeap.array.length ? leftHeap : rightHeap;

  if (biggerHeap.array.length - smallerHeap.array.length > 1) {
    smallerHeap.add(biggerHeap.removeHead());
  }
};

const getMedian = (leftHeap, rightHeap) => {
  const smallerHeap =
    leftHeap.array.length < rightHeap.array.length ? leftHeap : rightHeap;
  const biggerHeap =
    leftHeap.array.length > rightHeap.array.length ? leftHeap : rightHeap;

  if (smallerHeap.length === biggerHeap.length) {
    return (smallerHeap.peek() + biggerHeap.peek()) / 2;
  }
  // middle one
  return biggerHeap.peek();
};

function activityNotifications(expenditure, d) {
  const left = new MaxHeap();
  const right = new MinHeap();

  let notifications = 0;

  for (let i = 0; i < expenditure.length; i += 1) {
    const current = expenditure[i];
    addToHeap(left, right, current);
    rebalance(left, right);
    if (i >= d) {
      const median = getMedian(left, right);
      if (median * 2 <= current) {
        notifications += 1;
      }
    }
  }

  return notifications;
}

console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
