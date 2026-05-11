import '../assets/style/Product.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import p6 from '../assets/images/p6.jpg';
import p7 from '../assets/images/p7.jpg';
import p8 from '../assets/images/p8.jpg';
import p9 from '../assets/images/p9.jpg';
import p10 from '../assets/images/p10.jpg';
import p11 from '../assets/images/p11.jpg';
import p12 from '../assets/images/p12.jpg';


function Product () {

const productData = [
    { id: 1, name: "Luxury Floor Mats", img: p1, price: "1,999" },
    { id: 2, name: "LED Ash Tray", img: p2, price: "450" },
    { id: 3, name: "Organic Air Freshener", img: p3, price: "299" },
    { id: 4, name: "Door Edge Guard", img: p4, price: "150" },
    { id: 5, name: "Premium Tissue Box", img: p5, price: "350" },
    { id: 6, name: "Mini Car Trash Bin", img: p6, price: "499" },
    { id: 7, name: "Surround Speakers", img: p7, price: "4,500" },
    { id: 8, name: "Leather Steering Cover", img: p8, price: "899" },
    { id: 9, name: "Vacuum Cleaner", img: p9, price: "1,200" }, 
    { id: 10, name: "Dashboard Camera", img: p10, price: "3,500" }, 
    { id: 11, name: "Mobile Holder", img: p11, price: "550" },
    { id: 12, name: "Backseat Organizer", img: p12, price: "950" }, 
];

    return(

<>

<section className='prod-sec py-5' data-aos="fade-up">
    <div className='container'>
       <h2 className='sec-title'>Shop Now , And Make Your Car Luxury</h2>
       <div className='row'>
            <div className='pro-spec'> 
           <h4 className='prod-title'>Find The Perfect Fit For Your Car</h4>
           <div className='selection-box justify-content-center'>
              
           <select className="form-select custom-select">
               <option defaultValue>Select Year</option>
               <option value="2024">2024</option>
               <option value="2023">2023</option>
               <option value="2022">2022</option>
            </select>

            <select className="form-select custom-select">
                <option defaultValue>Select Brand</option>
                <option value="tata">Tata</option>
                <option value="mahindra">Mahindra</option>
                <option value="hyundai">Hyundai</option>
                <option value="toyota">Toyota</option>
            </select>

            <select className="form-select custom-select">
                <option defaultValue>Select Model</option>
                <option value="nexon">Nexon</option>
                <option value="thar">Thar</option>
                <option value="creta">Creta</option>
            </select>

            <button className='btn-find'>Find Now</button>      

           </div>
            </div>
       </div>
    </div>
</section>

<section className='product-section py-5'>
  <div className='container'>
     <h2 className='sec-title mb-5'>Our Products</h2>
     <div className='row g-4 mb-3'>
     
     {productData.map((item)=> (
        <div className='col-12 col-sm-6 col-md-3' key={item.id}>
           <div className='card prod-card h-100'>
              <div className='img-card'>
               <img src={item.img} alt={item.name} className='img-fluid prod-img' />
              </div>
              <div className='card-body text-center'>
                 <h5 className='card-title'>{item.name}</h5>
                 <p>Price Starting From <span className='fw-bold prod-s'><i className="bi bi-currency-rupee"></i>{item.price}</span></p>
              </div>
                <button className='prod-btn'>Add To Cart</button>
           </div>
        </div>
     ))}


     </div>
  </div>
</section>

</>


    )
}

export default Product;