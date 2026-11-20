import { useEffect, useState } from "react";
import instance from "../axios";
import "../App.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [search, setsearch] = useState("");
  const [filter, setFilter] = useState(false);
  const [activeFilter, setactiveFilter] = useState("price");
  const [sortPrice, setSortPrice] = useState("");
  const [description, setDescription] = useState("");

  async function getProduct() {
    const result = await instance.get("/products/");
    setProducts(result.data.products);
  }

  useEffect(() => {
    getProduct();
  }, []);

  const filteredProduct = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      product.description.toLowerCase().includes(description.toLowerCase())
    )
    .sort((a, b) => {
      if (sortPrice === "low") {
        return a.price - b.price;
      }
      if (sortPrice === "high") {
        return b.price - a.price;
      }
    });

  function clearFilters() {
    setSortPrice("");
    setDescription("");
    setactiveFilter("price");
  }
  // useEffect(() => {
  //   if (!filter) {
  //     setDescription("");
  //   }
  // }, [filter]);
  return (
    <>
      <h1 className="heading">Our Products</h1>

      {/* Search and Filter */}
      <div className="search-and-filter">
        <input
          type="text"
          className="search-input"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
        <div className="filter-container">
          <button
            className="filter-btn"
            onClick={() => {
              setFilter(!filter);
            }}
          >
            <i className="fa-solid fa-filter"></i>
            Filter
          </button>

          {filter && (
            <div className="filterPanel">
              <div className="leftPanel">
                <button
                  className="filterPrice"
                  onClick={() => {
                    setactiveFilter("price");
                  }}
                >
                  Price
                </button>
                <button
                  onClick={() => {
                    setactiveFilter("description");
                  }}
                >
                  Description
                </button>
              </div>
              {activeFilter === "price" && (
                <div className="rightPanel">
                  <div className="actualFilters">
                    <label>
                      <input
                        type="checkbox"
                        checked={sortPrice === "low"}
                        onChange={() =>
                          setSortPrice(sortPrice === "low" ? "" : "low")
                        }
                      />
                      Low to High
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        checked={sortPrice === "high"}
                        onChange={() =>
                          setSortPrice(sortPrice === "high" ? "" : "high")
                        }
                      />
                      High to Low
                    </label>
                  </div>
                  <div className="clearFilters">
                    <button className="clearButton" onClick={clearFilters}>
                      Clear Filter
                    </button>
                  </div>
                </div>
              )}
              {activeFilter === "description" && (
                <div className="rightPanel">
                  <input
                    id="description"
                    name="description"
                    type="text"
                    placeholder="Enter the description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <div className="clearFilters">
                    <button className="clearButton" onClick={clearFilters}>
                      Clear Filter
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="product-container">
        {filteredProduct.map((product) => (
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
