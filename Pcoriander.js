import React, { useState } from 'react';
import coriander from './images/coriander.png'; // Import the image for coriander
import { useCart } from './CartContext';

function Pcoriander() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 270; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'coriander',
    name: 'Coriander',
    price: pricePerKg,
    quantity: quantityInKg,
    image: coriander,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={coriander} width="100%" id="main-img" alt="Coriander" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Spices</strong>
          </h6>
          <h4>
            <strong>Fresh Spices Available</strong>
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
            Coriander is a popular spice known for its aromatic and citrusy flavor. It is commonly used in various cuisines around the world. When you buy fresh coriander, you can enjoy the full flavor of this versatile spice in your dishes.
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

export default Pcoriander;
