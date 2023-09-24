import './style.css';
import corn from './images/corn.png';
import coconut from './images/coconut.png';
import potato from './images/potato.png';
import carrot from './images/carrot.png';
import turnip from './images/turnip.png';
import apple from './images/apple.jpeg';
import tomato from './images/tomato.png';
import guava from './images/guava.png';
import y_cap from './images/y_capsicum.png';
import r_cap from './images/r_capsicum.png';
import cap from './images/campsicum.png';
import cabbage from './images/cabbage.png';
import coriander from './images/coriander.png';
import raddish from './images/radish.png';
import c_tomato from './images/cherry_tomato.png';
import strawberry from './images/strawberry.png';
import lemon from './images/lemon.png';
import g_onion from './images/green_onion.png';
import pomegra from './images/pomgranete.png';
import banana from './images/banana.png';
import bittergourd from './images/bittergourd.png';
import pear from './images/pear.png';
import mango from './images/mango.png';
import apri from './images/apricot.png';
import { Link } from 'react-router-dom';

import React, { useState, useContext } from 'react';

import { CartProvider, useCart } from './CartContext';


function Pcoconut() {
    const { addToCart } = useCart();
    const [selectedQuantity, setSelectedQuantity] = useState('100'); // Default to 100g
    const pricePerKg = 80;
    const quantityInKg = parseFloat(selectedQuantity) / 1000;
    const totalPrice = quantityInKg * pricePerKg;
    const product = {
      id: 'coconut',
      name: 'Coconut',
      price: pricePerKg,
      quantity: quantityInKg,
     image:coconut, 
    };
  
    const handleAddToCart = () => {
      addToCart(product);
      alert('Product has been added to the cart');
    };
  
    return (
      <>
        <section id="prodetails" className="section-p1">
          <div className="single-pro-image">
            <img src={coconut} width="100%" id="main-img" alt="Coconut" />
          </div>
          <div className="single-pro-details">
            <h6>
              <strong>Home/ Fruits</strong>
            </h6>
            <h4>
              <strong>Coconut</strong>
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
              A raw coconut is a versatile fruit with a unique nutritional profile.
              Comprising around 50-60% water, coconuts offer a refreshing and
              hydrating natural beverage in the form of coconut water. Carbohydrates
              are present in coconuts, primarily in the form of dietary fiber and
              natural sugars. The fruit also contains fat, with a notable concentration
              of saturated fats.
            </span>
          </div>
        </section>
      </>
    );
  }
  
  export default Pcoconut;