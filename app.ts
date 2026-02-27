function calculateFinalPrice(price: number, taxRate: number): number {
    return price + (price * taxRate);
}
let orderTotal: number = 100;  
console.log("Initial total:", orderTotal);
orderTotal = "100"; 
let finalPrice = calculateFinalPrice(orderTotal, 0.1);
console.log("Final price with tax:", finalPrice);
