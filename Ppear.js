import React, { useState } from 'react';
import pear from './images/pear.png'; // Import the image for pear
import { useCart } from './CartContext';

function Ppear() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 700; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'pear',
    name: 'Pear',
    price: pricePerKg,
    quantity: quantityInKg,
    image: pear,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={pear} width="100%" id="main-img" alt="Pear" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Fruits</strong>
          </h6>
          <h4>
            <strong>Pear</strong>
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
            Pear is a delicious and juicy fruit known for its sweet flavor and high water content. It's a great source of dietary fiber and vitamin C, making it a healthy choice for snacking or adding to fruit salads.
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

export default Ppear;
