export const calculateDiscount = (price: number, discountPercentage: number) => {
  const discountAmount = (price * discountPercentage) / 100;
  return price - discountAmount;
};
