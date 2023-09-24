import './style.css';
import logo from './images/headlogo.png'
import {
    Link
  } from "react-router-dom";
import { useEmail } from './CartContext';
function Header() {
  const { email } = useEmail(); 
  return (
    <section id="header">
        <a to=""><img src={logo} class="img-circle" alt="logo" height="75px"/></a>
        <div>
            <ul id="navbar">
            <li><Link to="/home">{email}</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/predicts">AiPrice</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/VegAi">VegAi</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                {/* <li><Link to="blog.html">Chatbot</Link></li> */}
              
                <li><Link to="/cart"><i class="fa fa-shopping-cart"></i></Link></li>
                <li><Link to="/" class="glyphicon glyphicon-off"></Link></li>
            </ul>
        </div>
    </section>
 
  );
}

export default Header;
