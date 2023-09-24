import React, { useState } from 'react';
import banana from './images/banana.png'; // Import the image for bananas
import { useCart } from './CartContext';

function Pbanana() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 100; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'banana',
    name: 'Banana',
    price: pricePerKg,
    quantity: quantityInKg,
    image: banana,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={banana} width="100%" id="main-img" alt="Banana" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Fruits</strong>
          </h6>
          <h4>
            <strong>Banana</strong>
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
            Bananas are a popular and widely consumed fruit known for 
            their distinctive flavor and nutritional value. Comprising approximately 74% water, bananas provide hydration along with their delicious taste. Carbohydrates are a significant component of bananas, mainly in the form of natural sugars like glucose, fructose, and sucrose. 
            This carbohydrate content contributes to the quick energy release that bananas are known for.
          </span>
        </div>
      </section>
      <section id="featured_products" className="section-p1">
        <h2>Featured Products</h2>
        <p>Fresh Seasonal Fruits</p>
        {/* Featured products section */}
      </section>
    </>
  );
}

export default Pbanana;
