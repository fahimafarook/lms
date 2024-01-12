import React from 'react';
import '../../src/assert/footer.css'
import GradientButton from '../component/common/GradientButton'

function Footer() {

    const handleRedirect = (page) => {
        if(page === 'codespice'){
            window.open('https://www.codespice.co.in', '_blank')
        }
    };

    return(
        <div className='footer-parent'>
             <div className='footer-top'></div>
            <footer className='footer container-fluid row justify-content-around pt-5 pb-5'>
          <div className='footer-company col-md-2 col-4'>
            <div className='contact-information'>
                <span className='footer-headings'>Contact Info</span><br/>
                xxxxxxxxxxx
                xxxxxxxxxxx <br/>
                xxxxxxxxxxx
                xxxxxxxxxxx<br/>
                xxxxxxxxxxx<br/>
            </div>
          </div>
          <p className='intergration col-md-2 col-8'>
            <span className='footer-headings'>Intergration</span><br/>
            Facebook<br/>
            Instagram<br/>
            Watsapp<br/>
            Google<br/>
            LinkedIn<br/>
            Justdial<br/>
            MagicBricks<br/>
          </p>
          <div className='solutions col-md-2 col-12'>
            <span className='footer-headings'>Solutions</span><br/>
            Automobile<br/>
            Real Estate<br/>
            Insurance<br/>
            Finance<br/>
          </div>
          <div className='important-links col-md-2 col-12'>
            <span className='footer-headings'>Import Links</span><br/>
            Features<br/>
            Pricing<br/>
            Videos<br/>
            Blog<br/>
            FAQs<br/>
            Support<br/>
            Privacy Policy<br/>
            T&C<br/>
          </div>
          <div className=' col-md-2 col-12'>
            <span className='footer-headings'>Request Demo</span><br/>
                <div className='footer-demo-content'>
                    <input type="text" class="footer-input" placeholder="Phone Number"></input>
                    <GradientButton className = "footer-book-demo" arrow = {false} name ={"Book Demo"} ></GradientButton>
                </div>
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