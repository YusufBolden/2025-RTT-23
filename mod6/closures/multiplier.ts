function createMultiplier(multiplier: number) {
  return function (number: number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // 10


function applyDiscount(discountRate: number) {
  return function (price: number) {
    return price - (price * discountRate);
  };
}

const tenPercentDiscount = applyDiscount(0.10);
console.log(tenPercentDiscount(100)); // 90


function fetchUser(username: string, callback: { (user: any): void; (arg: { id: number; username: any; }): void; }) {
  setTimeout(() => {
    const user = {
      id: Math.floor(Math.random() * 1000),
      username: username
    };
    callback(user);
  }, 1000);
}

fetchUser("Alice", (user: any) => console.log("Fetched User:", user));
