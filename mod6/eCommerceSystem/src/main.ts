import { Product } from './models/Product';
import { fetchProducts } from './services/apiService';
import { handleError } from './utils/errorHandler';

const displayProducts = async (): Promise<void> => {
  try {
    const productsData = await fetchProducts();

    const productInstances = productsData.map((data) => new Product(
      data.id,
      data.title,
      data.description,
      data.category,
      data.price,
      data.discountPercentage,
      data.rating,
      data.stock,
      data.tags,
      data.brand,
      data.sku,
      data.weight,
      data.dimensions,
      data.warrantyInformation,
      data.shippingInformation,
      data.availabilityStatus,
      data.reviews,
      data.returnPolicy,
      data.minimumOrderQuantity,
      data.meta,
      data.thumbnail,
      data.images
    ));

    productInstances.forEach((product) => {
      console.log(product.displayDetails());
      console.log(`Discounted Price: $${product.getPriceWithDiscount().toFixed(2)}`);
      console.log(`Tax Amount: $${product.getTaxAmount().toFixed(2)}`);
      console.log('='.repeat(50));
    });

  } catch (error) {
    handleError(error);
  }
};

displayProducts();
