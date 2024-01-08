import React from 'react';
import '../assert/header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='container-fluid'>
            <div className='row d-flex top-bar justify-content-between'>
              <div className = "col-md-2 logo">
                 <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Asgards</Link> 
              </div>
              <div className="col-md-9 header-conents">
                  <div className="top-bar-item ">
                    <Link to="/features" style={{ textDecoration: 'none', color: 'inherit' }}>Features</Link>
                  </div>
                  {/* <div className="top-bar-item ">
                    <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</Link>
                  </div> */}
                  <div className="top-bar-item ">
                    <Link to="/industries" style={{ textDecoration: 'none', color: 'inherit' }}>Industries</Link>
                  </div>
                  <div className="top-bar-item ">FAQ</div>
                  <div className="top-bar-item  top-bar-item-selected">Contact</div>
                  <div className="top-bar-item ">Get Started</div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;
