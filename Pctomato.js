import React, { useState } from 'react';
import c_tomato from './images/cherry_tomato.png'; // Import the image for cherry tomato
import { useCart } from './CartContext';

function Pctomato() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 100; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'cherry-tomato',
    name: 'Cherry Tomato',
    price: pricePerKg,
    quantity: quantityInKg,
    image: c_tomato,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={c_tomato} width="100%" id="main-img" alt="Cherry Tomato" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Fruits</strong>
          </h6>
          <h4>
            <strong>Cherry Tomato</strong>
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
            Cherry tomatoes are highly rich in carbohydrates and make a delicious addition to various dishes.
            They are known for their sweet and tangy flavor and are a good source of vitamin C and dietary fiber.
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

export default Pctomato;
