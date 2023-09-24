import { useEmail,useCart } from './CartContext'; // Import the useCart hook
import axios from "axios";
import './payment.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react"

function Payment() 
{
    const [address,setAddress]=useState('')
  const { email } = useEmail(); 
  async function submit(e){
    e.preventDefault();
    try{alert("Successfully Paid")
    console.log(email) 
      await axios.post("http://localhost:8000/payment",{
          email,address,totalPrice
         
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
    <body>

<div class="containe">

    <form action="POST">

        <div class="row">

            <div class="col">

                <h3 class="title">billing address</h3>

                <div class="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="john deo"/>
                </div>
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com"/>
                </div>
                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="room - street - locality- City- Zipcode" onChange={(e) => { setAddress(e.target.value) }}/>
                </div>
                <div class="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="mumbai"/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="india"/>
                    </div>
                    <div class="inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123 456"/>
                    </div>
                </div>

            </div>

            <div class="col">

                <h3 class="title">payment</h3>

                <div class="inputBox">
                    <span>Amt to pay : {totalPrice}</span>
                     
                </div>
                <div class="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="mr. john deo"/>
                </div>
                <div class="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"/>
                </div>
                <div class="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"/>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"/>
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"/>
                    </div>
                </div>

            </div>
    
        </div>

        <input type="submit" value="Proceed To Checkout" class="submit-btn" onClick={submit}/>
        <Link to="/home"style={{textDecoration:'none'}}>MOVE OUT</Link>

    </form>

</div>    
    
</body>
  );
}


export default Payment;
