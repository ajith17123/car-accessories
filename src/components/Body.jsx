import '../assets/style/Body.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pp1 from '../assets/images/pp1.jpg';
import pp2 from '../assets/images/pp2.jpg';
import pp3 from '../assets/images/pp3.jpg';
import pp4 from '../assets/images/pp4.jpg';


function Body () {

    const prodbody = [
    {
        id: 1, 
        name: "Premium Leather Seat Covers", 
        img: pp1, 
        oldprice: "8,999", 
        newprice: "5,499"
    },
    {
        id: 2, 
        name: "7D Diamond Custom Floor Mats", 
        img: pp2, 
        oldprice: "4,500", 
        newprice: "2,999"
    },
    {
        id: 3, 
        name: "Atmosphere LED Ambient Lights", 
        img: pp3, 
        oldprice: "2,200", 
        newprice: "1,299"
    },
    {
        id: 4, 
        name: "High-Gloss Ceramic Coating Kit", 
        img: pp4, 
        oldprice: "3,800", 
        newprice: "2,499"
    }
];
    return(

<>

{/* {herosection} */}

<section className="hero-section py-5">
     <div className="container">
         <div className="hero-content text-center">
            <h1 className="hero-title">Elevate Your Driving <span className="text-danger">Experience</span></h1>
                <p className="hero-subtitle">
                     Premium Accessories Crafted for Luxury and Performance. 
                     Protect your ride with the best armor.
                 </p>
         <div className="hero-btns mt-4">
            <button className="btn-c me-3">Explore Products</button>
            <button className="btn-s">Contact Us</button>
         </div>
         </div>
     </div>
</section>

{/* {productsection} */}

<section className='prod-sec py-5'>
   <div className='container'>
    <h2 className='sec-title'>Our Featured Products</h2>
      <div className='row g-4'>
        
    {prodbody.map((item)=> (
        <div className='col-12 col-md-3' key={item.id}>
           <div className='card pro-card h-100'>
              
             <div className='card-img'>
               <img src={item.img} alt={item.name} className='img-fluid pro-image' />
             </div>

             <div className='card-body'>
               <h5 className='card-title'>{item.name}</h5>
               <div className='price-box'>
                  <span className='old-price'><i className="bi bi-currency-rupee"></i>{item.oldprice}</span>
                  <span className='new-price'><i className="bi bi-currency-rupee"></i>{item.newprice}</span>
               </div>
             </div>

             <button className='pr-btn'><Link className='btn-pro' to="/product">Add to Cart</Link></button>

           </div>
        </div>
    ))}

      </div>
   </div>
</section>

{/* {aboutsection} */}

<section className='about-sec py-5'>
  <div className='container'>
     <h2 className='sec-title'>Who We Are</h2>
     <div className='row'>
         
     <div className='col-12'>
        <div className='about-card'>
           <p className='about-text text-center'>
            Auto Armor is your one-stop destination for premium car accessories that combine luxury with functionality. 
            We specialize in high-quality enhancements, from artisanal interior upgrades to durable exterior protection. 
            Our mission is to empower car enthusiasts to personalize their vehicles with the finest gear, 
            ensuring every drive is as comfortable as it is stylish. Experience the perfect blend of 
            innovation and craftsmanship with our curated collection.
           </p>
        </div>
     </div>

     <button className='about-button'><Link className='btn-about' to="/about">Read More About Us</Link></button>

     </div>
  </div>
</section>


{/* {featuresection} */}

<section className='features-sec py-5'>
    <div className='container'>
        <div className='row g-4'>
            <div className='col-md-4'>
                <div className='feature-card text-center p-4'>
                    <i className="bi bi-shield-check feature-icon"></i>
                    <h4 className='feat-title mt-3'>Premium Quality</h4>
                    <p className='text-feat'>High-grade materials designed for long-lasting protection.</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='feature-card text-center p-4'>
                    <i className="bi bi-truck feature-icon"></i>
                    <h4 className='feat-title mt-3'>Fast Delivery</h4>
                    <p className='text-feat'>Safe and quick delivery of your car accessories to your doorstep.</p>
                </div>
            </div>
            <div className='col-md-4'>
                <div className='feature-card text-center p-4'>
                    <i className="bi bi-tools feature-icon"></i>
                    <h4 className='feat-title mt-3'>Expert Support</h4>
                    <p className='text-feat'>24/7 assistance to help you choose the right fit for your car.</p>
                </div>
            </div>
        </div>
    </div>
</section>



</>


    )
}

export default Body;