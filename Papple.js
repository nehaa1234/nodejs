import React, { useState } from 'react';
import apple from './images/apple.jpeg';
import strawberry from './images/strawberry.png';
import { useCart } from './CartContext'; // Import the useCart hook
 // Import Link from react-router-dom

function Papple() {
  const { addToCart } = useCart(); // Use the useCart hook to access addToCart function
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const    pricePerKg = 210; // Replace with the actual price
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;

  const product = {
    id: 'unique-product-id', // Replace with a unique ID for this product
    name: 'Apple',
    price: pricePerKg,
    quantity: quantityInKg,
    image: apple, // Replace with the image URL
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product added to cart.'); // You can customize the alert or UI feedback
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={apple} width="100%" id="main-img" alt="Apple" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Fruits</strong>
          </h6>
          <h4>
            <strong>Apple</strong>
          </h4>
          <h2>₹{pricePerKg}/Kg</h2>
          <div className="quantity-selector">
            <label htmlFor="quantity">Select Quantity:</label>
            <select
              id="quantity"
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(e.target.value)}
            >
              <option value="100">100g</option>
              <option value="200">200g</option>
              <option value="500">500g</option>
              <option value="1000">1Kg</option>
              <option value="2000">2Kg</option>
              <option value="5000">5Kg</option>
            </select>
          </div>
          <button className="normal" onClick={handleAddToCart}>
            Add To Cart
          </button>
          <h4>Product Details</h4>
          <span>
            A raw apple is 86% water and 14% carbohydrates, with negligible
            content of fat and protein. A reference serving of a raw apple with
            skin weighing 100 grams provides 52 calories and a moderate content
            of dietary fiber.
          </span>
        </div>
      </section>

      <section id="featured_products" className="section-p1">
        <h2>Featured Products</h2>
        <p>Fresh Seasonal Vegetables</p>
        {/* Featured products section */}
      </section>
    </>
  );
}

export default Papple;
