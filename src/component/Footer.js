import React from 'react';
import '../../src/assert/footer.css'
import GradientButton from '../component/common/GradientButton'
import { Link } from 'react-router-dom';
import phoneIcon from '../assert/images/phone-icon.png'

function Footer() {

    const handleRedirect = (page) => {
        if(page === 'codespice'){
            window.open('https://www.codespice.co.in', '_blank')
        }
    };

    return(
        <div className='footer-parent'>
             {/* <div className='footer-top'></div> */}
            <footer className='footer row justify-content-center pt-5 pb-5'>
          <div className='footer-company footer-col col-md-4 col-5'>
            <div className='contact-information'>
                {/* <span className='footer-headings'>Contact Info</span> */}
                <div >xxxxxxxxxxx</div>
                <div >xxxxxxxxxxx</div>
                <div >xxxxxxxxxxx</div>
            </div>

            <span className='footer-headings'>Request Demo</span>
                <div className='footer-demo-content'>
                    {/* <img className='footer-demo-phone' src={phoneIcon} style={{ height: "10px"}}></img> */}
                    <input type="text" className="footer-input" placeholder="Phone Number"></input>
                    <GradientButton className = "footer-book-demo" arrow = {false} name ={"Book Demo"} ></GradientButton>
                </div>
          </div>
          <div className='intergration footer-col col-md-2 col-8'>
            <span className='footer-headings'>Intergration</span>
            <a className='footer-links' href=''>Facebook</a>
            <a className='footer-links' href=''>Instagram</a>
            <a className='footer-links' href=''>Whatsapp</a>
            <a className='footer-links' href=''>Google</a>
            <a className='footer-links' href=''>LinkedIn</a>
            <a className='footer-links' href=''>Justdial</a>
            <a className='footer-links' href=''>MagicBricks</a>
          </div>
          <div className='solutions footer-col col-md-2 col-12'>
            <span className='footer-headings'>Solutions</span>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Solutions</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Automobile</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Real Estate</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Insurance</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Finance</Link>
          </div>
          <div className='important-links footer-col col-md-2 col-12'>
            <span className='footer-headings'>Import Links</span>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Features</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Pricing</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Videos</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Blog</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>FAQs</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Support</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>Privacy Policy</Link>
            <Link className='footer-links' to="/features" style={{ textDecoration: 'none'}}>T&C</Link>
          </div>
          <div className=' col-md-0 col-12'>
          
          </div>
          {/* <div className='footer-dev col-12'>
            Zerone networks private limited | site powered by 
            <a className='codespice' onClick={()=>handleRedirect('codespice')}> codespice</a>
          </div> */}
        </footer>
        </div>
        
      )
}

export default Footer;