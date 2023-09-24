import './style.css';
import corn from './images/corn.png'
import coconut from './images/coconut.png'
import potato from './images/potato.png'
import carrot from './images/carrot.png'
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
import turnip from './images/turnip.png'
import {
    Link
  } from "react-router-dom";
 
function Home() {
    
  return (
    <>
        <section id="image">
        <h3>Trade-in-Offer</h3>
        <h2><strong>Super Value Deals</strong></h2>
        <h1><strong>On all products</strong></h1>
        <p>Save more with coupons & up to 70% off!</p>
    </section>

    <section id="featured_products" className="section-p1">
        <h2>Featured Products</h2>
        <p>Fresh Seasonal Vegetables</p>
        <div className="pro-container">
            <div className="pro"  >
            <Link  to='/shop/apple'>  <img src={apple} alt="Apple"/>
                <div className="des">
                    <span><strong>Apple</strong></span>
                    <h5>Highly Rich in Minerals</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹210</h4>
                </div>
                </Link>  
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/coconut'>   <img src={coconut}alt="coconut"/>
                <div className="des">
                    <span><strong>Coconut</strong></span>
                    <h5>Highly Rich in Carbohydreates & Fats</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div> 
                    <h4>₹80</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/corn'>  <img src={corn} alt="corn"/>
                <div className="des">
                    <span><strong>Corn</strong></span>
                    <h5>Highly Rich in Fibre & Minerals</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹40</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/carrot'>  <img src={carrot} alt="carrot"/>
                <div className="des">
                    <span><strong>Carrot</strong></span>
                    <h5>Highly Rich in Vitamin A</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹90</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/tomato'><img src={tomato}alt="tomato"/>
                <div className="des">
                    <span><strong>Tomato</strong></span>
                    <h5>Highly Rich in Water content</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹80</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/turnip'> <img src={turnip} alt="turnip"/>
                <div className="des">
                    <span><strong>Turnip</strong></span>
                    <h5>Highly Rich in Iron & Magnesium</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹40</h4>
                </div></Link>
                
            </div>
            <div className="pro" >
            <Link  to='/shop/guava'>    <img src={guava} alt="guava"/>
                <div className="des">
                    <span><strong>Guava</strong></span>
                    <h5>Highly Rich in Vitamin C & Fibre</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹45</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/potato'>  <img src={potato} alt="Potato"/>
                <div className="des">
                    <span><strong>Potato</strong></span>
                    <h5>Highly Rich in Carbohydrates</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹70</h4>
                </div> </Link>
                
            </div>
        </div>
    </section>

    <section id="banner" className="section-m1">
        <h3><strong>Exchange Services</strong></h3>
        <h2><strong>Up to <span>70% Off</span> - All Fruits & Vegetables</strong></h2>
        <button className="normal">Explore More</button>
    </section>

    <section id="featured_products" className="section-p1">
        <h2>Organic Products</h2>
        <p>Fresh Chemical Free Vegetables</p>
        <div className="pro-container">
            <div className="pro"  >
            <Link  to='/shop/y_cap'><img src={y_cap} alt="Yellow Cpsicum"/>
                <div className="des">
                    <span><strong>Yellow Capsicum</strong></span>
                    <h5>Highly Rich in Vitamin B</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹100</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/r_cap'><img src={r_cap}alt="Red Capsicum"/>
                <div className="des">
                    <span><strong>Red Capsicum</strong></span>
                    <h5>Highly Rich in Vitamin B</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹105</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/cap'><img src={cap} alt="capsicum"/>
                <div className="des">
                    <span><strong>Capsicum</strong></span>
                    <h5>Highly Rich inVitamin B</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹50</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/cabbage'> <img src={cabbage} alt="cabbage"/>
                <div className="des">
                    <span><strong>Cabbage</strong></span>
                    <h5>Highly Rich in Water Content</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹80</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/c_tomato'><img src={c_tomato} alt="c_tomato"/>
                <div className="des">
                    <span><strong>Cherry Tomato</strong></span>
                    <h5>Highly Rich in Water content</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹100</h4>
                </div></Link>
                
            </div>
            <div className="pro" >
            <Link  to='/shop/raddish'><img src={raddish} alt="radish"/>
                <div className="des">
                    <span><strong>Radish</strong></span>
                    <h5>Highly Rich in Iron & Magnesium</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹80</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/strawberry'><img src={strawberry} alt="strawberry"/>
                <div className="des">
                    <span><strong>Strawberry</strong></span>
                    <h5>Highly Rich in Vitamin C & Fibre</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹110</h4>
                </div></Link>
                
            </div>
            <div className="pro"  >
            <Link  to='/shop/coriander'> <img src={coriander} alt="coriander"/>
                <div className="des">
                    <span><strong>coriander</strong></span>
                    <h5>Highly Rich in Carbohydrates</h5>
                    <div className="star">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <h4>₹270</h4>
                </div></Link>
                
            </div>
        </div>
    </section>

    <section id="sm-banner" className="section-p1">
        <div className="container">
            <div className="banner-box">
                <h4>crazy deals</h4>
                <h2>buy 3Kg get 1Kg free</h2>
                <span>The freshest vegetables available here!</span>
                <button className="white">Learn More</button>
            </div>
            <div className="banner-box banner-box2">
                <h4>Upcoming Season</h4>
                <h2>get 30% off on rassberries & blueberries!</h2>
                <span>The luscious fruits available here!</span>
                <button className="white">Learn More</button>
            </div>
        </div>
    </section>

    <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
            <h4>Sign Up for latest update about Fresh Stock</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        </section>
     </>
 
  );
}

export default Home;
