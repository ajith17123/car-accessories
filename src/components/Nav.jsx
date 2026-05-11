import '../assets/style/Nav.css';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Nav () {
    return(

<>

<section className='nav-sec'>
  <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Auto Armor</Link>
   
    <div className="collapse navbar-collapse d-none d-lg-block"  id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link"  to="/">Home<i className="bi bi-house"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/about">Who We Are</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/product">Products</Link>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link"  to="/about#cont">Support<i className="bi bi-telephone"></i></NavHashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/login">Login<i className="bi bi-person"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/">Cart<i className="bi bi-bag"></i></Link>
        </li>
      </ul>
      <button className='nav-btn'>Call Us</button>
    </div>

  <button className='navbar-toggler'
   type='button'
   data-bs-toggle= 'offcanvas'
   data-bs-target= '#sidemenu'>
   <span className='navbar-toggler-icon'></span>
  </button>

  <div className='nav-mobile offcanvas offcanvas-start d-lg-none' id='sidemenu' >
    <div className="offcanvas-header justify-content-end">
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
         </div>
     <div className='nav-heading'>
       <Link className='navbar-head' to="/">Auto Armor</Link>
     </div>
      <div className='divider-line'></div>
      <div className='nav-text offcanvas-body'>
        <ul className='nav-nav'>
            <li><Link className="nav-p"  to="/">Home<i className="bi bi-house"></i></Link></li>
            <li><Link className='nav-p' to="/about">Who We Are</Link></li>
            <li><Link className='nav-p' to="/product">Product</Link></li>
            <li><Link className="nav-p"  to="/">Cart<i className="bi bi-bag"></i></Link></li>
        </ul>
      <div className='divider-line'></div>
      <div className='log-side'>
         <ul className='nav-center' >
            <li><Link to className='nav-s' to="/login">Login/Signup<i className="bi bi-person"></i></Link></li>
         </ul>
      </div>
     
    <div className='divider-line'></div>

     <div className='nav-k'>
        <ul className='nav-bottom'>
           <li><Link className='nav-bot' to="/">Track Order</Link></li>
           <li><Link className='nav-bot' to="/">Order Online</Link></li>
           <li><Link className='nav-bot' to="/">Raise Ticket</Link></li>
           <li><Link className='nav-bot' to="/">Support</Link></li>
           <li><Link className='nav-bot' to="/">Chat With Us</Link></li>
        </ul>
     </div>

  </div>
</div>
  </div>
</nav>
</section>

</>


    )
}

export default Nav;