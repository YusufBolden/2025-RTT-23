import { Product } from './Product';
import { Discountable } from './Discountable';

export class DigitalProduct extends Product implements Discountable {
  private fileSize: number;

  constructor(sku: string, name: string, price: number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
  }

  get formattedFileSize(): string {
    return `${this.fileSize.toFixed(1)} MB`;
  }

  getPriceWithTax(): number {
    return this.basePrice; // No tax
  }

  applyDiscount(percent: number): void {
    if (percent > 0 && percent <= 100) {
      this.price = parseFloat((this.price * (1 - percent / 100)).toFixed(2));
    }
  }

  override displayDetails(): string {
    return super.displayDetails() + `, File Size: ${this.formattedFileSize}`;
  }
}
