import React, { createContext, useState, useContext } from 'react';

// Create a context for the cart
const CartContext = createContext();

// Custom hook to access the cart context
export const useCart = () => {
  return useContext(CartContext);
};
// export const EmailProvider = ({ children }) => {
//   const [email, setEmail] = useState('');}


// CartProvider component
export const CartProvider = ({ children }) => 
{
  const [email, setEmail] = useState('');
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === item.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += item.quantity;
    } else {
      updatedCart.push(item);
    }

    setCart(updatedCart);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  // Calculate the total number of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Calculate the total price of items in the cart
  const cartTotal = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        cartCount,
        cartTotal,
         email, setEmail 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useEmail = () => {
  return useContext(CartContext);
};