import { useState } from "react";
import instance from "../../axios";

function AddProduct() {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const frm = new FormData();

      frm.append("name", data.name);
      frm.append("description", data.description);
      frm.append("price", data.price);
      frm.append("image", data.image);
      console.log(data.image);
      const response = await instance.post("/products/addProduct", frm);

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "image") {
      setData({ ...data, image: e.target.files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Your Name"
        value={data.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="description"
        placeholder="Enter Description"
        value={data.description}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Enter Price"
        value={data.price}
        onChange={handleChange}
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
