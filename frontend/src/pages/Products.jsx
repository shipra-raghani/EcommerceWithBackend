import { useEffect, useState } from "react";
import instance from "../axios";

function Products() {
  const [products, setProducts] = useState([]);
  async function getProduct() {
    const result = await instance.get("/products/");
    console.log(result.data.products);
    setProducts(result.data.products);
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <h1>Our Products</h1>

      <div>
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.image} alt={product.name} width="150" />

            <h2>{product.name}</h2>
            <p>Price: ₹{product.price}</p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Products;
