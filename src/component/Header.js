import React from 'react';
import '../assert/header.css'

function Header() {
    return (
        <div>
            <div className='row d-flex top-bar justify-content-between'>
              <div className = "col-md-2 logo">Asgards</div>
              <div className="row col-md-9 justify-content-around header-conents p-0">
                  <div className="top-bar-item col-2">Feature</div>
                  <div className="top-bar-item col-2">Pricing</div>
                  <div className="top-bar-item col-2">FAQ</div>
                  <div className="top-bar-item col-2 top-bar-item-selected">Contact</div>
                  <div className="top-bar-item col-2">Get Started</div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;