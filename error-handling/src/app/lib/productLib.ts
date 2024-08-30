import { Product } from "./defination";

const products: Product[] = [
    {
        "productId": 1,
        "name": "Wireless Bluetooth Headphones",
        "price": 99.99,
        "description": "High-quality wireless Bluetooth headphones with noise-cancellation and up to 20 hours of battery life."
    },
    {
        "productId": 2,
        "name": "Smartphone 12 Pro",
        "price": 999.99,
        "description": "Latest smartphone with 6.7-inch display, triple camera system, and 128GB storage."
    },
    {
        "productId": 3,
        "name": "4K Ultra HD Smart TV",
        "price": 549.99,
        "description": "55-inch 4K Ultra HD Smart TV with HDR, built-in streaming apps, and voice control."
    },
    {
        "productId": 4,
        "name": "Laptop - 16GB RAM, 512GB SSD",
        "price": 1199.99,
        "description": "High-performance laptop with 16GB RAM, 512GB SSD, and a powerful Intel i7 processor."
    },
    {
        "productId": 5,
        "name": "Wireless Charging Pad",
        "price": 29.99,
        "description": "Fast wireless charging pad compatible with most smartphones and wireless earbuds."
    },
    {
        "productId": 6,
        "name": "Fitness Tracker",
        "price": 69.99,
        "description": "Fitness tracker with heart rate monitor, sleep tracking, and 7-day battery life."
    }
]

export function fetchProduct(productId: number): Product | undefined {
    return products.find(product => product.productId == productId);
}