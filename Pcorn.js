import React, { useState } from 'react';
import corn from './images/corn.png'; // Import the image for corn
import { useCart } from './CartContext';

function Pcorn() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 40; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'corn',
    name: 'Corn',
    price: pricePerKg,
    quantity: quantityInKg,
    image: corn,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={corn} width="100%" id="main-img" alt="Corn" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Fruits</strong>
          </h6>
          <h4>
            <strong>Corn</strong>
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
            A raw corn is a versatile grain with a unique nutritional profile.
            Comprising around 50-60% water, corn offers a refreshing and
            hydrating natural option. Carbohydrates are present in corn, primarily
            in the form of dietary fiber and natural sugars. Corn is a staple
            food in many cuisines worldwide.
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

export default Pcorn;