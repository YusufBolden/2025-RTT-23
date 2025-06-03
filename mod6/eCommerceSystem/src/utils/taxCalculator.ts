export const calculateTax = (price: number, category: string) => {
  const standardTaxRate = 0.0475;
  const groceriesTaxRate = 0.03;
  let applicableTaxRate = standardTaxRate;
  if (category.toLowerCase() === "groceries") {
    applicableTaxRate = groceriesTaxRate;
  }
  return price * applicableTaxRate;
};
