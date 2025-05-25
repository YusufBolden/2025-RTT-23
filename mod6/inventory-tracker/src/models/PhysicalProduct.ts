import { Product } from './Product';
import { Discountable } from './Discountable';

export class PhysicalProduct extends Product implements Discountable {
  private weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }

  get formattedWeight(): string {
    return `${this.weight.toFixed(2)} kg`;
  }

  getPriceWithTax(): number {
    return parseFloat((this.basePrice * 1.1).toFixed(2)); // 10% tax
  }

  applyDiscount(percent: number): void {
    if (percent > 0 && percent <= 100) {
      this.price = parseFloat((this.price * (1 - percent / 100)).toFixed(2));
    }
  }

  applyBulkDiscount(): void {
    if (this.weight > 5) {
      this.applyDiscount(15); // 15% off for bulky items
    }
  }

  override displayDetails(): string {
    return super.displayDetails() + `, Weight: ${this.formattedWeight}`;
  }
}
