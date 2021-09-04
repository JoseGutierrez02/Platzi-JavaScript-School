const calculateArithmeticMedian = (list) => {
  const listAccumulator = list.reduce(
    (accum = 0, newElement) => accum + newElement,
  );

  const listMedian = listAccumulator / list.length;
  return listMedian;
};

const list = [100, 200, 400000000, 500];

const listhHalf = parseInt(list.length / 2);

const itsEven = (number) => (number % 2 === 0 ? true : false);

let median;

if (itsEven(list.length)) {
  const element1 = list[listhHalf - 1];
  const element2 = list[listhHalf];

  median = calculateArithmeticMedian([element1, element2]);
} else {
  median = list[listhHalf];
}
