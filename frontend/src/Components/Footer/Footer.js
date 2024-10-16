import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';


const Footer = () => {
  return (
    <div className='footer bg-dark text-white'>
      <div className='footer-divider'></div>

      <div className="containers ">
        <div className="row text-center text-md-start">
          <div className="col-md-3 mb-3 mb-md-0">
            <div className="footer-logo">
              <img src="https://img.icons8.com/?size=100&id=117418&format=png&color=000000" alt="Katha logo" className="footer-logo-img img-fluid rounded-circle" />
              <p className='mt-3 footer-logo-text'>LEAFLING</p>
              <p className="small para">
                Your go-to platform for the latest trends, products, and stories. Join our community and stay updated!
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li><a href="#company" className="text-white text-decoration-none">Company</a></li>
              <li><a href="#products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="#offices" className="text-white text-decoration-none">Offices</a></li>
              <li><a href="#about" className="text-white text-decoration-none">About Us</a></li>
              <li><a href="#careers" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="#blog" className="text-white text-decoration-none">Blog</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3 mb-md-0">
            <h5>Contact Us</h5>
            <p>
              123 Katha Street, <br />
              New Delhi, India, 110001 <br />
              Phone: +91 12345 67890 <br />
              Email: info@katha.com
            </p>
          </div>

          <div className="col-md-3">
            <h5>Subscribe to Our Newsletter</h5>
            <form>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Enter your email" 
                  aria-label="Email" 
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="row mt-4 ">
          <div className="col-md-12 text-center logos">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center ">
              <a href="#instagram" className="me-3">
                <img src="https://img.icons8.com/?size=100&id=TEYr8ETaIfBJ&format=png&color=000000" alt="Instagram" className="footer-icon" />
              </a>
              <a href="#whatsapp" className="me-3">
                <img src="https://img.icons8.com/?size=100&id=108653&format=png&color=000000" alt="WhatsApp" className="footer-icon" height={90} width={90}/>
              </a>
              <a href="#pinterest" className="me-3">
                <img src="https://img.icons8.com/?size=100&id=XnqvPoIUGymd&format=png&color=000000" alt="Pinterest" className="footer-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-divider'></div>
      <div className="text-center py-3">
        <p className="mb-0">&copy; 2024 LEAFLING. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
