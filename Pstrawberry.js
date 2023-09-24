import React, { useState } from 'react';
import strawberry from './images/strawberry.png'; // Import the image for strawberries
import { useCart } from './CartContext';

function Pstrawberry() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 110; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'strawberry',
    name: 'Strawberry',
    price: pricePerKg,
    quantity: quantityInKg,
    image: strawberry,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={strawberry} width="100%" id="main-img" alt="Strawberry" />
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
            Strawberries are beloved for their delicious flavor and vibrant appearance, making them a popular and nutritious berry choice. Comprising a significant amount of water, strawberries offer hydration alongside their sweet and slightly tart taste. Carbohydrates are found in strawberries, primarily in the form of natural sugars and dietary fiber. The fiber content contributes to digestive health and helps maintain a feeling of fullness.
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

export default Pstrawberry;
