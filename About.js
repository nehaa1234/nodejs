import './style.css';
import guava from './images/guava.png'
import apple from './images/apple.jpeg'
import  tomato from './images/tomato.png'
import logo from './images/headlogo.png'
 
import {
    Link
  } from "react-router-dom";
function About() {
  return (
 <>
     <section id="page-header">
        <h2><strong>#Eat Healthy & Stay Healthy</strong></h2>
        <p>Save more with coupons & up to 70% off!</p>
    </section>

    <section id="about-head" class="section-p1">
        <img src={logo}alt=""/>
        <div>
            <h2>#Know Us</h2>
            <p>Welcome to Veg Seekers, your number grocery store. We're dedicated to giving you the very best of services, with a focus on dependability, customer service and uniqueness.
                Founded in 2018, Veg Seekers has come a long way from its beginnings in a Noida. When we first started out, the passion for helping other, to provide the best and fresh vegetables and fruits gave us the impetus to turn hard work and inspiration into to a booming online store. We now serve customers all over the Delhi NCR and are thrilled to be a part of the quirky, eco-friendly, fair trade wing of the sports industry.
                We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
        </div>
    </section>
 

    <section>
        <div class="containe">
            <div>
                <h2>#Why Choose Us ?</h2>
                <ul>
                    <li><h3>Farm-Fresh Goodness</h3> We work closely with local farmers who share our dedication to ethical and
                        sustainable farming practices. Our vegetables are harvested at the peak of their ripeness, ensuring
                        maximum flavor, nutrients, and freshness.</li>
                    <li><h3>Wide Variety</h3> Whether you are a seasoned chef or a cooking enthusiast, we offer an extensive range of
                        vegetables to meet your diverse culinary requirements. From leafy greens to root vegetables, exotic
                        imports to organic delights, we have something to satisfy every palate.</li>
                    <li><h3>Quality Assurance</h3> Quality is our top priority. Every vegetable undergoes rigorous quality checks and is
                        handled with utmost care throughout the supply chain to maintain its freshness and nutritional value.
                    </li>
                    <li><h3>Convenient Delivery</h3> Forget the hassle of visiting multiple stores to get fresh vegetables. With
                        SeekersVeggieMart, all you need to do is place an order, and we'll deliver your chosen vegetables right to
                        your doorstep, ensuring they reach you in perfect condition.</li>
                    <li><h3>Seasonal Delights</h3> Embrace the goodness of seasonal produce and experience the ever-changing flavors
                        that nature offers. We promote the consumption of locally available vegetables during their respective
                        seasons for a healthier lifestyle.</li>
                    <li><h3>Sustainability Matters</h3> As h3 advocates for eco-friendly practices, we continuously strive to
                        minimize our environmental footprint. Our packaging is designed to be recyclable, and we encourage
                        responsible waste disposal.</li>
                    <li><h3>Exceptional Customer Service</h3> Our dedicated customer support team is always ready to assist you. Whether
                        you have inquiries about our products, need cooking tips, or have any concerns, we are here to help.
                    </li>
                </ul>
            </div>
        </div>
    </section>
    
    <section id="services">
		<div class="containe">
			<h1>Our Services</h1>
			<div class="row services" >
				<div class= "col-md-4 text-center">
					<div class="icon">
					    <i class="fa fa-phone"></i>
					</div>
					<h3> 24/7 Support</h3>
					<p>on order related queries</p>
				</div>
			
				<div class="col-md-4 text-center">
					<div class="icon">
					    <i class="fa fa-shopping-cart"></i>
					</div>
					<h3> Return within 24Hrs days</h3>
					<p>of receiving your order</p>
				</div>
			
				<div class="col-md-4 text-center">
					<div class="icon">
					    <i class="fa fa-truck"></i>
					</div>
					<h3>Get free delivery</h3>
					<p>on orders above ₹500</p>
				</div>
			</div>
		</div>
	</section>
 
 </>
 
 
  );
}

export default About;