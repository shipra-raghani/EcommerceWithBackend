import { useEffect, useState } from "react";
import instance from "../axios";
import "../App.css";
function Products() {
  const [products, setProducts] = useState([]);

  async function getProduct() {
    const result = await instance.get("/products/");
    setProducts(result.data.products);
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <h1 className="heading">Our Products</h1>

      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />

            <h2>{product.name}</h2>

            <p className="price">₹{product.price}</p>

            <p>{product.description}</p>
            <button className="cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
