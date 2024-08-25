import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  const [products, setproducts] = useState([]);
  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`);
    const data = await res.json();
    setproducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  
  return (
    <div>
      <div className="products">
        {products.map((prod) => (
          <span className="product__single">
            <img src={prod.images[0]}></img>
            <span className="text">{prod.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
