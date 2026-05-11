import '../assets/style/Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';


function Login() {

    const [view, setView] = useState('login');

    return (

      <section className='auth-card py-5'>
            <div className='container'>
                <h2 className='sec-title'>Welcome To Auto Armor</h2>
                <div className='row'>
                    <div className='auth-body'>

                  <div className='d-flex mb-4'>
        <button 
            className={`w-50 py-2 btn ${view === 'login' ? 'btn-a' : 'btn-b'}`} 
            onClick={() => setView('login')}>
            LOGIN
        </button>
        <button 
            className={`w-50 py-2 btn ${view === 'register' ? 'btn-a' : 'btn-b'}`} 
            onClick={() => setView('register')}>
            REGISTER
        </button>
    </div>
                          
                          {view === 'login' ? (

                          <div className='login-form'>
                              <h5 className='sec-heading mb-4'>Login</h5>
                              <div className='social-login mb-4'>
                                   <button>
                                    <i className="bi bi-facebook"></i>Facebook
                                   </button>
                                   <button>
                                    <i className="bi bi-google"></i>Google
                                   </button>
                              </div>
                              <div className='divider mb-4'>- OR -</div>
                  <input type="text" className='form-control mb-3' placeholder='Enter Mail-id or Phone Number' />
                  <button className='btn-login'>Proceed</button>
                  <p className='para-login'>New User? <span className='par-log' onClick={() => setView('register')} >Create An Account.</span></p>            
                          </div>

                          ) : (

                     <div className='register-form'>
                          <h5 className='sec-heading mb-4'>Register Now</h5>
                          <input type="email" className="form-control mb-3" placeholder="Email ID *" />
                          <input type="password" className="form-control mb-3" placeholder="Choose New Password *" />
                          <input type="password" className="form-control mb-3" placeholder="Confirm Password *" />
                              <button className='btn-login'>Register Now</button>
                           <p className='para-login'>Already A customer<span className='par-log' onClick={() => setView('login')} >Login</span></p>      
                     </div>

                          )}

                    </div>
                </div>
            </div>
      </section>

    )
}

export default Login;