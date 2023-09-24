import React, { useState } from 'react';
import cabbage from './images/cabbage.png'; // Import the image for cabbage
import { useCart } from './CartContext';

function Pcabbage() {
  const { addToCart } = useCart();
  const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
  const pricePerKg = 90; // Change the price per kg as needed
  const quantityInKg = parseFloat(selectedQuantity) / 1000;
  const totalPrice = quantityInKg * pricePerKg;
  const product = {
    id: 'cabbage',
    name: 'Cabbage',
    price: pricePerKg,
    quantity: quantityInKg,
    image: cabbage,
  };

  const handleAddToCart = () => {
    addToCart(product);
    alert('Product has been added to the cart');
  };

  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={cabbage} width="100%" id="main-img" alt="Cabbage" />
        </div>
        <div className="single-pro-details">
          <h6>
            <strong>Home/ Vegetables</strong>
          </h6>
          <h4>
            <strong>Cabbage</strong>
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
            Cabbage is a versatile and widely enjoyed cruciferous vegetable that boasts a range of nutritional benefits. Comprising a significant amount of water, cabbage is hydrating while offering a satisfying crunch. Carbohydrates are present in cabbage, primarily in the form of dietary fiber and natural sugars. The fiber content contributes to its digestive benefits and potential role in supporting a healthy gut.
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

export default Pcabbage;
