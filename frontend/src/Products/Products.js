import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  console.log("rendered");

  useEffect(() => {
    console.log("effect called");
  }, [])

  fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
    .then(function(response){
      return response.json();
    })
    .then(function(res){
      console.log("fetch");
      setProducts(res);
    });

  return (
      <div>
        {products.map(function(item) { 
          return (
              <ProductCard title={item.title} price={item.price.value} key={item.title}/>
          );
        })}
      </div>
  );
}

export default Products;