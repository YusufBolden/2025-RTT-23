const delaySimulation = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));


function getProductDetails(): Promise<{ name: string; price: number }> {
  return delaySimulation(1000).then(() => {
    console.log("Fetched product details");
    return {
      name: "HyperX Wireless Headphones",
      price: 99.99,
    };
  });
}


function getProductReviews(): Promise<string[]> {
  return delaySimulation(800).then(() => {
    console.log("Fetched product reviews");
    return [
      "Great sound quality!",
      "Battery life could be better.",
      "Comfortable to wear for long periods.",
    ];
  });
}


function getRelatedProducts(): Promise<string[]> {
  return delaySimulation(600).then(() => {
    console.log("Fetched related products");
    return ["Bluetooth Speaker", "Noise-Canceling Earbuds", "Charging Case"];
  });
}


getProductDetails()
  .then((details) => {
    console.log("Product Details:", details);
    return getProductReviews();
  })
  .then((reviews) => {
    console.log("Product Reviews:", reviews);
    return getRelatedProducts();
  })
  .then((relatedProducts) => {
    console.log("Related Products:", relatedProducts);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
