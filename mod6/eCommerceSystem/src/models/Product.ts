import { calculateDiscount } from '../utils/discountCalculator';
import { calculateTax } from '../utils/taxCalculator';
import { Dimensions, Meta, Review } from './Product-types';

export class Product {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public price: number,
    public discountPercentage: number,
    public rating: number,
    public stock: number,
    public tags: string[],
    public brand: string,
    public sku: string,
    public weight: number,
    public dimensions: Dimensions,
    public warrantyInformation: string,
    public shippingInformation: string,
    public availabilityStatus: string,
    public reviews: Review[],
    public returnPolicy: string,
    public minimumOrderQuantity: number,
    public meta: Meta,
    public thumbnail: string,
    public images: string[]
  ) {}

  displayDetails(): Record<string, any> {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      category: this.category,
      price: this.price,
      discountPercentage: this.discountPercentage,
      rating: this.rating,
      stock: this.stock,
      tags: this.tags,
      brand: this.brand,
      sku: this.sku,
      weight: this.weight,
      dimensions: this.dimensions,
      warrantyInformation: this.warrantyInformation,
      shippingInformation: this.shippingInformation,
      availabilityStatus: this.availabilityStatus,
      reviews: this.reviews,
      returnPolicy: this.returnPolicy,
      minimumOrderQuantity: this.minimumOrderQuantity,
      meta: this.meta,
      thumbnail: this.thumbnail,
      images: this.images
    };
  }

  getPriceWithDiscount(): number {
    return calculateDiscount(this.price, this.discountPercentage);
  }

  getTaxAmount(): number {
    return calculateTax(this.price, this.category);
  }
}
