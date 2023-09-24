import './style.css';
import logo from './images/headlogo.png'
import {
    Link
  } from "react-router-dom";
function Header() {
  return (
    <footer class="home_footer">
    <img src={logo} alt="logo"  height="140px" class="footer_logo img-circle" />
    
    <p class="footer_para">                
            &copy; 2023 VegSeekers Market. All rights reserved.<br/> 
           
            <strong>Email us:</strong>VegSeekersCusthelp@gmail.com <br/>
           
            <strong>Contact Info :</strong> +913238873672<br/>
         
                <strong>Address:</strong>Unit No XXXX, 05th Floor, Tower A,<br/> Unitech Seeker Park
                 Sector-XX, Gurugram, 122003 Haryana
             
    </p>
</footer>
 
  );
}

export default Header;
