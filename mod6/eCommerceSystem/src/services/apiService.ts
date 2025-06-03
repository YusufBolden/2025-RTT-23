export const fetchProducts = async (): Promise<any[]> => {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.products;
    
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return []; // Returns empty array as a fallback
  }
};
