import { useState, useEffect } from "react"
import { Product } from "../types/Product";

// Mock Backend Request
import MockJSON from "../utils/MockJSON";

const BASE_URL = 'https://dummyjson.com/products?limit=10&'


const getProducts = async () => {
  const response = await fetch(BASE_URL);
  if(!response.ok) {
    throw new Error('Request Error');
  }
  const data = await response.json();
  
  return data.products;
}


export default function Store() {
  // Products State
  const [ /* getItems */ , setItems] = useState<Product[]>([]);
  const [getMock, setMock] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async() => {
      try {
        const products = await getProducts();
        setItems(products);
      } catch (error) {
        console.error('ERROR' + error);        
      }
    };

    fetchProducts();

    // Using Mock JSON Response
    setMock(MockJSON);
  }, []);


  return <>
    <div className="flex justify-center mt-4 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
            Explore Our Products
        </h1>
    </div>

    <div className="mx-auto max-w-1xl px-4 pt-8 pb-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        { getMock.map((product) => (
              <div key={product.title} className="group relative">
              <img
                alt="Product Image"
                src={product.thumbnail}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  {product.discountPercentage !== null && product.discountPercentage > 4 ? (
                    <p className="mt-1 text-sm text-gray-500">Save up to ${((product.price * (product.discountPercentage / 100 ))).toFixed(2)} upfront</p>
                  ) : (
                    <p></p>
                  )}
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price}</p>
              </div>
            </div>
        ))}
      </div>
    </div>
  </>
}
