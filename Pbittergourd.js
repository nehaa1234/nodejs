import React, { useState } from 'react';
import bittergourd from './images/bittergourd.png'; // Import the image for bitter gourd
import { useCart } from './CartContext';

function Pbittergourd() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 80; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'bittergourd',
    name: 'Bitter Gourd',
    price: pricePerKg,
    quantity: quantityInKg,
    image: bittergourd,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={bittergourd} width="100%" id="main-img" alt="Bitter Gourd" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Vegetables</strong>
          </h6>
          <h4>
            <strong>Bitter Gourd</strong>
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
            Bitter gourd is a distinctive vegetable that is both revered for 
            its potential health benefits and noted for its strong, bitter taste. Comprising a 
            significant amount of water, bitter gourd provides hydration along with its unique flavor.
             Carbohydrates are present in bitter gourd, primarily in the form of fiber and a small amount of natural sugars. The vegetable's low carbohydrate content and high fiber
             content contribute to its potential role in managing blood sugar levels.
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

export default Pbittergourd;
