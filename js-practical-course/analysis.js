// Helpers
const itsEven = (number) => number % 2 === 0;

const calculateArithmeticMedian = (list) => {
  const listAccumulator = list.reduce(
    (accum = 0, newElement) => accum + newElement,
  );

  const listMedian = listAccumulator / list.length;
  return listMedian;
};

// Median calculator
const medianSalaries = (list) => {
  const half = parseInt(list.length / 2);

  if (itsEven(list.length)) {
    const middlePerson1 = list[half - 1];
    const middlePerson2 = list[half];
    const median = calculateArithmeticMedian([middlePerson1, middlePerson2]);
    return median;
  } else {
    const middlePerson = list[half];
    return middlePerson;
  }
};

// General Median
const salariesCol = colombia.map((person) => person.salary);

// Sorted salaries
const salariesColSorted = salariesCol.sort(
  (salaryA, salaryB) => salaryA - salaryB,
);

const generalMedianCol = medianSalaries(salariesColSorted);

// Top 10% median
const spliceStart = (salariesColSorted.length * 90) / 100;
const spliceCount = salariesColSorted.length - spliceStart;
const salariesColTop10 = salariesColSorted.splice(spliceStart, spliceCount);

const top10MedianCol = medianSalaries(salariesColTop10);

console.log({
  generalMedianCol,
  top10MedianCol,
});
