// Mock API Response from backend (/api/products)
// https://dummyjson.com/carts

import { Product } from "../types/Product";

export default function MockJSON(): Product[] {
    return [
        {
          "title": "Apple MacBook Pro 14 Inch Space Grey",
          "price": 1999.99,
          "discountPercentage": 18.52,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
        },
        {
          "title": "Huawei Matebook X Pro",
          "price": 1399.99,
          "discountPercentage": 9.99,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
        },
        {
          "title": "New DELL XPS 13 9300 Laptop",
          "price": 1499.99,
          "discountPercentage": 3.9,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png"
        },
        {
          "title": "Rolex Submariner Watch",
          "price": 13999.99,
          "discountPercentage": 16.35,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png"
        },
        {
          "title": "iPhone X",
          "price": 899.99,
          "discountPercentage": 8.03,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/smartphones/iPhone%20X/thumbnail.png"
        },
        {
          "title": "Apple Airpods",
          "price": 129.99,
          "discountPercentage": 12.84,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
        },
        {
          "title": "Selfie Stick Monopod",
          "price": 12.99,
          "discountPercentage": 10.98,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Selfie%20Stick%20Monopod/thumbnail.png"
        },
        {
          "title": "Rolex Datejust",
          "price": 10999.99,
          "discountPercentage": 10.58,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Datejust/thumbnail.png"
        },
        {
          "title": "Watch Gold for Women",
          "price": 799.99,
          "discountPercentage": 19.53,
          "rating": null,
          "thumbnail": "https://cdn.dummyjson.com/products/images/womens-watches/Watch%20Gold%20for%20Women/thumbnail.png"
        }
      ]    
}
