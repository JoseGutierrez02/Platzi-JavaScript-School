const intDivision = (dividend, divisor) => {
  if(dividend < divisor) {
    return 0;
  }

  return 1 + intDivision(dividend - divisor, divisor);
};
