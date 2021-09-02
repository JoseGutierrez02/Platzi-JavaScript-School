/* Square code */
// Perimeter
const squarePerimeter = (squareSide) => squareSide * 4;

// Area
const squareArea = (squareSide) => squareSide * squareSide;

/* Triangle code */
// Perimeter
const trianglePerimeter = (triangleSide1, triangleSide2, triangleBase) =>
  triangleSide1 + triangleSide2 + triangleBase;

// Area
const triangleArea = (triangleBase, triangleHeight) =>
  (triangleBase * triangleHeight) / 2;

// Isosceles Height
const isoscelesTriangleHeigt = (side1, side2, base) => {
  if (side1 === side2) {
    const height = Math.sqrt((side1 * side2) - (base * base / 4));
    console.log(height);
  } else {
    console.log('No es un triangulo isosceles');
  }
} 

/* Circle code */
// Diameter
const circleDiameter = (circleRatio) => circleRatio * 2;

// PI
const PI = Math.PI;

// Circunference
const circlePerimeter = (circleRatio) => {
  const diameter = circleDiameter(circleRatio);
  return diameter * PI;
};

//Area
const circleArea = (circleRatio) => (circleRatio * circleRatio) * PI;

// Here we interact with the HTML
const calculateSquarePerimeter = () => {
  const input = document.getElementById('squareInput');
  const value = input.value;
  const perimeter = squarePerimeter(value);
  alert(perimeter);
};

const calculateSquareArea = () => {
  const input = document.getElementById('squareInput');
  const value = input.value;
  const area = squareArea(value);
  alert(area);
};

const calculateTrianglePerimeter = () => {
  const side1 = Number(document.getElementById('triangleInput1').value);
  const side2 = Number(document.getElementById('triangleInput2').value);
  const base = Number(document.getElementById('triangleBase').value);
  const perimeter = trianglePerimeter(side1, side2, base);
  alert(perimeter);
};

const calculateTriangleArea = () => {
  const base = Number(document.getElementById('triangleBase2').value);
  const height = Number(document.getElementById('triangleHeight').value);
  const area = triangleArea(base, height);
  alert(area);
};

const calculateCirclePerimeter = () => {
  const ratio = Number(document.getElementById('ratio').value);
  const diameter = circleDiameter(ratio);
  const perimeter = diameter * PI;
  alert(perimeter);
};

const calculateCircleArea = () => {
  const ratio = Number(document.getElementById('ratio').value);
  const area = circleArea(ratio);
  alert(area);
};
