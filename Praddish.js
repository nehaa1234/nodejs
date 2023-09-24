import React, { useState } from 'react';
import raddish from './images/radish.png'; // Import the image for radish
import { useCart } from './CartContext';

function Praddish() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 80; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'radish',
    name: 'Radish',
    price: pricePerKg,
    quantity: quantityInKg,
    image: raddish,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={raddish} width="100%" id="main-img" alt="Radish" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Fruits</strong>
          </h6>
          <h4>
            <strong>Fresh Fruits Available</strong>
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
            Radish is a crunchy and spicy root vegetable known for its unique flavor. It's often used in salads and other dishes. Radish contains carbohydrates, fiber, and various vitamins and minerals. It's a low-calorie vegetable that can be a healthy addition to your meals.
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

export default Praddish;
