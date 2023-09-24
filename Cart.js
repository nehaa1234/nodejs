import React from 'react';
import { useEmail,useCart } from './CartContext'; // Import the useCart hook
import axios from "axios";
import { Link } from 'react-router-dom';
function Cart() 
{
  const { email } = useEmail(); 
  async function submit(e){
    e.preventDefault();
    try{alert("Data Saved In Cart")
    console.log(email) 
      await axios.post("http://localhost:8000/cart",{
          email,cart,totalPrice
         
      })
  }
  catch(e){
    console.log(e);

}
  }
  const { cart, removeFromCart } = useCart(); // Use the useCart hook to access cart data

  // Calculate the total price
  const totalPrice = cart.reduce(
   
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
            <img src={item.image} alt={item.name}  height="100" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}{typeof(cart)} / Kg</p>
                <p>Quantity: {item.quantity}</p>
               
                <button onClick={() => removeFromCart(item.id)} style={{backgroundColor:'grey'}}>Remove</button> {/* Add a remove button */}
              </div>
            </div>
          </li>
        ))}
      </ul>
      <p>Total Price: ₹{totalPrice}</p>
      <form  action="POST">
      <input type="submit" value="Save To Cart"onClick={submit} />
      </form>
      <Link to="/cart/payment"style={{textDecoration:'none'}}><strong><input type="button"value="Proceed To Pay"/></strong></Link>
       
    </div>
  );
}


export default Cart;
