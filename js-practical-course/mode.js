const list = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const listCount = {};

list.map((element) => {
  if (listCount[element]) {
    listCount[element] += 1;
  } else {
    listCount[element] = 1;
  }
});

const listArray = Object.entries(listCount).sort(
  (accumVal, newVal) => accumVal[1] - newVal[1],
);

const mode = listArray[listArray.length - 1];
console.log(mode);
