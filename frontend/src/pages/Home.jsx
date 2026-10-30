import React from "react";
import AddProduct from "./admin/AddProduct";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="main-section">
      <h1>About Us</h1>
      <div className="sections">
        <section className="section1">
          <div className="image">
            <Link to="/about">
              <img
                src="https://i.pinimg.com/736x/80/62/fc/8062fc25243b68c02309fd1ad02ccfaa.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="content">
            <p>
              Discover the latest trends and shop your favorite products all in
              one place. From fashion and electronics to everyday essentials,
              find everything you need at great prices. Enjoy a smooth shopping
              experience with quality products and exciting deals! Welcome to
              ShopEase, your trusted destination for online shopping. We offer a
              wide range of high-quality products at affordable prices. Our goal
              is to make shopping simple, convenient, and enjoyable by bringing
              your favorite products right to your doorstep. Welcome to
              ShopEase, your trusted destination for online shopping. We offer a
              wide range of high-quality products at affordable prices. Our goal
              is to make shopping simple, convenient, and enjoyable by bringing
              your favorite products right to your doorstep.
            </p>
          </div>
        </section>
        <section className="section1">
          <div className="content">
            <p>
              Discover the latest trends and shop your favorite products all in
              one place. From fashion and electronics to everyday essentials,
              find everything you need at great prices. Enjoy a smooth shopping
              experience with quality products and exciting deals! Welcome to
              ShopEase, your trusted destination for online shopping. We offer a
              wide range of high-quality products at affordable prices. Our goal
              is to make shopping simple, convenient, and enjoyable by bringing
              your favorite products right to your doorstep. Welcome to
              ShopEase, your trusted destination for online shopping. We offer a
              wide range of high-quality products at affordable prices. Our goal
              is to make shopping simple, convenient, and enjoyable by bringing
              your favorite products right to your doorstep.
            </p>
          </div>
          <div className="image">
            <Link to="/about">
              <img
                src="https://i.pinimg.com/1200x/6e/67/04/6e6704c4c8cb0fb2f755d261c3c144d3.jpg"
                alt=""
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
