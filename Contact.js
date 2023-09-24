import './style.css';
import './style1.css';
import {
    Link
  } from "react-router-dom";
  import React, { useEffect, useState } from "react"
  import axios from "axios"
function Contact() {
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [phoneNo,setPhoneNo]=useState('')
    const [message,setMessage]=useState('')
    async function submit(e){
      e.preventDefault();
  
      try{
        alert("message save")
          await axios.post("http://localhost:8000/contact",{
            name,phoneNo,email,message
          })
      }
      catch(e){
          console.log(e);
  
      }
  
  }
  return (
    <>
    <section id="page-header">
    <h2><strong>#Eat Healthy & Stay Healthy</strong></h2>
    <p>Save more with coupons & up to 70% off!</p>
</section>
<section id="contact-details" class="section-p1 section-m1">
        <div class="details">
            <span>Get In Touch</span>
            <h2>Visit Us/Contact Us</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i class="fa fa-map"></i>
                    <p>Sec-82, Noida, India</p>
                </li>
                <li>
                    <i class="fa fa-envelope"></i>
                    <p>seekers@gmail.com</p>
                </li>
                <li>
                    <i class="fa fa-phone"></i>
                    <p>+91 9825286629</p>
                </li>
                <li>
                    <i class="fa fa-mobile"></i>
                    <p>Monday to Saturday: 9:00am to 10:00pm</p>
                </li>
            </div>
        </div>
        </section>
    <section id="contact">	
    <div class="container">
        <h1>Get In Touch</h1>
        <div class="row">
            <div class="col-md-6">
            <form class="contact-form" action="POST">
                    <div class="form-group">
                        <input type="text" style={{backgroundColor:'white'}} onChange={(e) => { setName(e.target.value) }}class="form-control" placeholder="Your Name.."/>
                    </div>
                    <div class="form-group">
                        <input type="number"  onChange={(e) => { setPhoneNo(e.target.value) }}class="form-control" placeholder="Phone no."/>
                    </div>
                    <div class="form-group">
                        <input type="email" style={{backgroundColor:'white'}} onChange={(e) => { setEmail(e.target.value) }}class="form-control" placeholder="Email.."/>
                    </div>
                    <div class="form-group">
                    {/* <input type="text" onChange={(e) => { setMessage(e.target.value) }} height="50px"class="form-control" placeholder="Your Name.."/> */}
                        <textarea class="form-control" type="text" onChange={(e) => { setMessage(e.target.value) }} rows="4" placeholder="Message.."></textarea>
                    </div>
                    <input type="submit" onClick={submit} />
                </form>
            </div>
            <div class="col-md-6 contact-info">
                <div class="follow"><b><i class="fa fa-map-marker"></i>  </b>Sec-82, Noida, India</div>
                <div class="follow"><b><i class="fa fa-mobile"></i>  </b>(+91)7862097585</div>
                <div class="follow"><b><i class="fa fa-envelope"></i>  </b>sportscompass@gmail.com</div>
                <div class="follow"><label><b>Get Social </b></label>
                    <a href="https://www.facebook.com/"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.youtube.com/"><i class="fa fa-youtube-play"></i></a>
                    <a href="https://twitter.com/login"><i class="fa fa-twitter"></i></a>
                    <a href="https://myaccount.google.com/"><i class="fa fa-google-plus"></i></a>        
                </div>
            </div>
        </div>
    </div>
</section>
</>
  );
}

export default Contact;
