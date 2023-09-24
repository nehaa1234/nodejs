import React, { useState } from 'react';
import y_cap from './images/y_capsicum.png'; // Import the image for yellow capsicum
import { useCart } from './CartContext';

function Pycap() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 100; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'yellow-capsicum',
    name: 'Yellow Capsicum',
    price: pricePerKg,
    quantity: quantityInKg,
    image: y_cap,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={y_cap} width="100%" id="main-img" alt="Yellow Capsicum" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Vegetables</strong>
          </h6>
          <h4>
            <strong>Fresh Vegetables Available</strong>
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
            Yellow capsicum, also known as yellow bell pepper, is a visually striking and nutritionally valuable vegetable that adds both color and flavor to a variety of dishes. Comprising a substantial amount of water, yellow capsicum provides hydration while offering a subtly sweet and slightly tangy taste. Carbohydrates are found in yellow capsicum, primarily in the form of dietary fiber and natural sugars. The fiber content contributes to digestive health and helps create a feeling of fullness.
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

export default Pycap;
