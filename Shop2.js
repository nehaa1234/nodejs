import './style.css';
import coriander from './images/coriander.png'
import raddish from './images/radish.png'
import c_tomato from './images/cherry_tomato.png'
import strawberry from './images/strawberry.png'
import lemon from './images/lemon.png'
import g_onion from './images/green_onion.png'
import pomegra from './images/pomgranete.png'
import banana from './images/banana.png'
import bittergourd from './images/bittergourd.png'
import pear from './images/pear.png'
import mango from './images/mango.png'
import apri from './images/apricot.png'
import {
    Link
  } from "react-router-dom";
function Shop2() {
  return (
    <>
    
    <section id="page-header">
        <h2><strong>#Eat Healthy & Stay Healthy</strong></h2>
        <p>Save more with coupons & up to 70% off!</p>
    </section>

    <section id="featured_products" class="section-p1">
        <div class="pro-container">
            <div class="pro" onclick="window.location.href='pomgranate.html';">
            <Link to="/shop/pomegra"><img src={pomegra} alt="pomgranate"/>
                <div class="des">
                    <span><strong>Pomgranate</strong></span>
                    <h5>Highly Rich in Iron</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹260</h4>
                </div></Link>
                  
            </div>
            <div class="pro" onclick="window.location.href='pear.html';">
            <Link to="/shop/pear"><img src={pear}alt="pear"/>
                <div class="des">
                    <span><strong>Pear</strong></span>
                    <h5>Highly Rich in Fibre & Minerals</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹700</h4>
                </div></Link>
                  
            </div>
            <div class="pro" onclick="window.location.href='g_onion.html';">
            <Link to="/shop/g_onion"> <img src={g_onion} alt="g_onion"/>
                <div class="des">
                    <span><strong>Green Onion</strong></span>
                    <h5>Highly Rich in Vitamin A</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹170</h4>
                </div></Link>
                  
            </div>
            <div class="pro" onclick="window.location.href='apricot.html';">
            <Link to="/shop/apri"><img src={apri}alt="apricot"/>
                <div class="des">
                    <span><strong>Apricot</strong></span>
                    <h5>Highly Rich in Water content</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹190</h4>
                </div></Link>
                  
            </div>
            <div class="pro" onclick="window.location.href='mango.html';">
            <Link to="/shop/mango"><img src={mango} alt="mango"/>
                <div class="des">
                    <span><strong>Mango</strong></span>
                    <h5>Highly Rich in Iron & Magnesium</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹150</h4>
                </div></Link>
                  
            </div>
            <div class="pro" onclick="window.location.href='banana.html';">
            <Link to="/shop/banana"> <img src={banana} alt="banana"/>
                <div class="des">
                    <span><strong>Banana</strong></span>
                    <h5>Highly Rich in Vitamin C & Fibre</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹60</h4>
                </div></Link>
                  
            </div>
            <div class="pro" onclick="window.location.href='bittergourd.html';">
            <Link to="/shop/bittergourd"> <img src={bittergourd} alt="bittergourd"/>
                <div class="des">
                    <span><strong>Bittergourd</strong></span>
                    <h5>Highly Rich in Minerals</h5>
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
            <div class="pro" onclick="window.location.href='lemon.html';">
            <Link to="/shop/lemon"> <img src={lemon} alt="lemon"/>
                <div class="des">
                    <span><strong>Lemon</strong></span>
                    <h5>Highly Rich in Vitamin C</h5>
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

            <div class="pro" onclick="window.location.href='c_tomato.html';">
            <Link to="/shop/c_tomato"> <img src={c_tomato} alt="c_tomato"/>
                <div class="des">
                    <span><strong>Cherry Tomato</strong></span>
                    <h5>Highly Rich in Water content</h5>
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
            <div class="pro" onclick="window.location.href='radish.html';">
            <Link to="/shop/raddish"> <img src={raddish} alt="radish"/>
                <div class="des">
                    <span><strong>Radish</strong></span>
                    <h5>Highly Rich in Iron & Magnesium</h5>
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
            <div class="pro" onclick="window.location.href='strawberry.html';">
            <Link to="/shop/strawberry"><img src={strawberry} alt="strawberry"/>
                <div class="des">
                    <span><strong>Strawberry</strong></span>
                    <h5>Highly Rich in Vitamin C & Fibre</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹110</h4>
                </div></Link>
                  
            </div>
            <div class="pro" onclick="window.location.href='coriander.html';">
            <Link to="/shop/coriander"> <img src={coriander} alt="coriander"/>
                <div class="des">
                    <span><strong>coriander</strong></span>
                    <h5>Highly Rich in Carbohydrates</h5>
                    <div class="star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    <h4>₹270</h4>
                </div></Link>
                  
            </div>
        </div>
    </section>

    <section id="pagination" class="section-p1">
        <Link to="/shop">1</Link>
        <Link to="/shop2">2</Link>
        <Link to="/shop2"><i class="fa fa-arrow-right"></i></Link>
    </section>
 
   
    </>
 
  );
}

export default Shop2;