// Function to calculate the price of a product with discount
const calculatePriceWithDiscount = (price, discount) => {
  const pricePercentageWithDiscount = 100 - discount;
  const priceWithDiscount = (price * pricePercentageWithDiscount) / 100;
  return priceWithDiscount;
};

const handlePrice = () => {
  const price = document.getElementById('price').value;
  const discount = document.getElementById('discount').value;
  const priceWithDicount = calculatePriceWithDiscount(price, discount);
  const paragraph = document.getElementById('priceResult');
  paragraph.innerText = `El precio con descuento es de: ${priceWithDicount}$`;
};

// console.log({
//   originalPrice,
//   discount,
//   pricePercentageWithDiscount,
//   priceWithDiscount,
// });
