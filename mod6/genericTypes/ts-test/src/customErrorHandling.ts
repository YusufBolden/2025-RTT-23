// interface Error {
//   name: string;
//   message: string;
//   stack?: string;
// }


class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}


class PaymentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'PaymentError';
  }
}


type Order = {
  productId: string;
  quantity: number;
  price: number;
};


function processOrder(order: Order): string {
  if (order.quantity < 1) {
    throw new ValidationError('Quantity must be at least 1.');
  }
  if (order.price <= 0) {
    throw new PaymentError('Price must be a positive number.');
  }
  return `Order processed: ${order.quantity} x Product ${order.productId} @ $${order.price}`;
}


function handleOrder(order: Order): void {
  try {
    const result = processOrder(order);
    console.log(result);
  } catch (error) {
    if (error instanceof ValidationError || error instanceof PaymentError) {
      console.error(`${error.name}: ${error.message}`);
    } else {
      console.error('Unknown error:', error);
    }
  }
}


handleOrder({ productId: 'YB001', quantity: 2, price: 29.99 });
handleOrder({ productId: 'YB002', quantity: 0, price: 35.00 });
// Should trigger ValidationError

handleOrder({ productId: 'YB003', quantity: 1, price: -5 });
// Should trigger PaymentError