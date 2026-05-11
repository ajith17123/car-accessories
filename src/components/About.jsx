import '../assets/style/About.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ab1 from '../assets/images/ab1.jpg';

function About () {
    return(

<>

{/* {aboutsection} */}

<section className='about-sec py-5'>
  <div className='container'>
     <div className='row align-items-center'>
        
    <div className="col-md-6 mb-4">
        <div className="about-img-box">
         <img src={ab1} alt="Auto Armor" className="img-fluid about-img rounded-4" />
         </div>
     </div>

    <div className="col-md-6">
        <div className="about-content">
           <h3 className="about-head mb-3">Premium Car Accessories</h3>
           <p className="text-about">At Auto Armor, we are more than just a car accessory shop. We are enthusiasts who believe that every vehicle deserves a touch of luxury and protection. Our mission is to provide high-quality, durable, and stylish accessories that enhance your driving experience.</p>
           <p className="text-about">With years of experience in the automotive industry, we curate only the best products—from custom floor mats to advanced tech gadgets—ensuring your car stays as unique as you are.</p>
        </div>
    </div>

     </div>
  </div>
</section>

{/* {contsection} */}

<section className='cont-sec py-5' id='cont' >
    <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-4">

            <a href="tel:+919887485698" className="channel-box">
            <i className="bi bi-telephone-fill"></i> Call
            </a>
            <a href="https://wa.me/919887485698" target="_blank" className="channel-box whatsapp">
            <i className="bi bi-whatsapp"></i> WhatsApp
            </a>
            <a href="https://instagram.com/" target="_blank" className="channel-box instagram">
            <i className="bi bi-instagram"></i> Instagram
            </a>
            <a href="mailto:info@autoarmor.com" className="channel-box mail">
            <i className="bi bi-envelope-fill"></i> Mail
            </a>

                    </div>
                </div>
</section>

{/* {map-getintouch-section} */}

<section className="get-sec py-5">
     <div className="container">
        <div className="row g-5">
    
              <div className="col-md-6">
               <h2 className="sec-title text-start mb-4">Get In Touch</h2>
            <form className="contact-form">
             <div className="mb-3">
             <input type="text" className="form-control custom-input" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
         <input type="email" className="form-control custom-input" placeholder="Your Email" required />
        </div>
         <div className="mb-3">
        <textarea className="form-control custom-input" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit" className="btn-send">Send Message</button>
        </form>
        </div>
                  
         <div className="col-md-6">
              <div className="map-box">
                  <iframe 
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.53123456789!2d78.1460!3d11.6643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzUxLjUiTiA3OMKwMDgnNDUuNiJF!5e0!3m2!1sen!2sin!4v1234567890123" 
         width="100%" height="350" style={{border:0, borderRadius: '15px'}} allowFullScreen="" loading="lazy">
                  </iframe>
              </div>
         </div>
                    </div>
                </div>
</section>

</>


    )
}

export default About;