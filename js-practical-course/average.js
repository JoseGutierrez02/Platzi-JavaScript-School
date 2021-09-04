const calculateArithmeticAverage = (list) => {
  const listAccumulator = list.reduce(
    (accum = 0, newElement) => accum + newElement,
  );

  const listAverage = listAccumulator / list.length;
  return listAverage;
};
