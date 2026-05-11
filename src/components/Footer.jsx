import '../assets/style/Footer.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer () {
    return(

<>

<footer className="footer-sec">
      <div className="container py-5">
        <div className="row g-4">
          
          <div className="col-md-4 col-12 mb-4">
            <h2 className="footer-logo">Auto Armor</h2>
            <p className="footer-desc">
              Your one-stop destination for premium car accessories. We provide high-quality 
              protection and style for your wheels.
            </p>
            <div className="social-links justify-content-center d-flex gap-3">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          <div className="col-md-2 col-6">
            <h5 className="footer-head">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Who We Are</Link></li>
              <li><Link to="/product">Products</Link></li>
              <li><Link to="/login">My Account</Link></li>
            </ul>
          </div>

          <div className="col-md-2 col-6">
            <h5 className="footer-head">Categories</h5>
            <ul className="footer-links list-unstyled">
              <li><Link to="/">Interior Decor</Link></li>
              <li><Link to="/">Safety Gear</Link></li>
              <li><Link to="/">Lighting</Link></li>
              <li><Link to="/">Car Care</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-12">
            <h5 className="footer-head">Get In Touch</h5>
            <ul className="footer-contact  justify-content-center list-unstyled">
              <li><i className="bi bi-geo-alt-fill "></i> Auto Street, Bangalore, India</li>
              <li><i className="bi bi-telephone-fill "></i> +91 89587 59856</li>
              <li><i className="bi bi-envelope-fill"></i> autoarmor@gmail.com</li>
            </ul>
            <div className="newsletter mt-4">
              <h6>Subscribe for Deals</h6>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Email" />
                <button className="btn-foot">Join</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom py-3">
        <div className="container text-center">
          <p className="foot-text">© 2026 Auto Armor. All Rights Reserved.</p>
        </div>
      </div>
    </footer>

</>


    )
}

export default Footer;