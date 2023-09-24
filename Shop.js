import './style.css';
import corn from './images/corn.png'
import coconut from './images/coconut.png'
import potato from './images/potato.png'
import carrot from './images/carrot.png'
import turnip from './images/turnip.png'
import apple from './images/apple.jpeg'
import tomato from './images/tomato.png'
import guava from './images/guava.png'
import y_cap from './images/y_capsicum.png'
import r_cap from './images/r_capsicum.png'
import cap from './images/campsicum.png'
import cabbage from './images/cabbage.png'
import coriander from './images/coriander.png'
import raddish from './images/radish.png'
import c_tomato from './images/cherry_tomato.png'
import strawberry from './images/strawberry.png'
import {
    Link
  } from "react-router-dom";
function Shop() {
  return (
    <>
        <section id="page-header">
        <h2><strong>#Eat Healthy & Stay Healthy</strong></h2>
        <p>Save more with coupons & up to 70% off!</p>
        
    </section>

    <section id="featured_products" class="section-p1">
        <div class="pro-container">
            <div class="pro" onclick="window.location.href='apple.html';">
            <Link to="/shop/apple"><img src={apple} alt="Apple"/>
                <div class="des">
                    <span><strong>Apple</strong></span>
                    <h5>Highly Rich in Minerals</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹210</h4>
                </div> </Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='coconut.html';">
                <Link to="/shop/coconut"><img src={coconut} alt="coconut"/>
                <div class="des">
                    <span><strong>Coconut</strong></span>
                    <h5>Highly Rich in Carbohydreates & Fats</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹80</h4>  
                </div>
                </Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='corn.html';">
            <Link to="/shop/corn"> <img src={corn} alt="corn"/>
                <div class="des">
                    <span><strong>Corn</strong></span>
                    <h5>Highly Rich in Fibre & Minerals</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹40</h4>
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='carrot.html';">
            <Link to="/shop/carrot"><img src={carrot} alt="carrot"/>
                <div class="des">
                    <span><strong>Carrot</strong></span>
                    <h5>Highly Rich in Vitamin A</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹90</h4> 
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='tomato.html';">
            <Link to="/shop/tomato"><img src={tomato} alt="tomato"/>
                <div class="des">
                    <span><strong>Tomato</strong></span>
                    <h5>Highly Rich in Water content</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹80</h4>
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='turnip.html';">
            <Link to="/shop/turnip"><img src={turnip} alt="turnip"/>
                <div class="des">
                    <span><strong>Turnip</strong></span>
                    <h5>Highly Rich in Iron & Magnesium</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹40</h4>
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='guava.html';">
            <Link to="/shop/guava"><img src={guava} alt="guava"/>
                <div class="des">
                    <span><strong>Guava</strong></span>
                    <h5>Highly Rich in Vitamin C & Fibre</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹45</h4>
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='potato.html';">
            <Link to="/shop/potato"> <img src={potato} alt="Potato"/>
                <div class="des">
                    <span><strong>Potato</strong></span>
                    <h5>Highly Rich in Carbohydrates</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹70</h4>
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='y_capsicum.html';">
            <Link to="/shop/y_cap"> <img src={y_cap} alt="Yellow Cpsicum"/>
                <div class="des">
                    <span><strong>Yellow Capsicum</strong></span>
                    <h5>Highly Rich in Vitamin B</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹100</h4>
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='r_capsicum.html';">
            <Link to="/shop/r_cap"> <img src={r_cap} alt="Red Capsicum"/>
                <div class="des">
                    <span><strong>Red Capsicum</strong></span>
                    <h5>Highly Rich in Vitamin B</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹105</h4>
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='capsicum.html';">
            <Link to="/shop/cap"><img src={cap} alt="capsicum"/>
                <div class="des">
                    <span><strong>Capsicum</strong></span>
                    <h5>Highly Rich inVitamin B</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹50</h4>
                </div></Link>
                 
            </div>
            <div class="pro" onclick="window.location.href='cabbage.html';">
            <Link to="/shop/cabbage"> <img src={cabbage} alt="cabbage"/>
                <div class="des">
                    <span><strong>Cabbage</strong></span>
                    <h5>Highly Rich in Water Content</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹80</h4>
                </div></Link>
                 
            </div>
        </div>    
    </section>

    <section id="pagination" class="section-p1">
        <a href="/shop">1</a>
        <Link to="/shop2">2</Link>
        <Link to="/shop2"><i class="fa fa-arrow-right"></i></Link>
    </section>

    
     </>
 
  );
}

export default Shop;