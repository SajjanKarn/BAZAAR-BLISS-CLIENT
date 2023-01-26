import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link to="#" className="link font-light font-md hover-slide-right">
            Women
          </Link>
          <Link to="#" className="link font-light font-md hover-slide-right">
            Men
          </Link>
          <Link to="#" className="link font-light font-md hover-slide-right">
            Shoes
          </Link>
          <Link to="#" className="link font-light font-md hover-slide-right">
            Accessories
          </Link>
          <Link to="#" className="link font-light font-md hover-slide-right">
            New Arrivals
          </Link>
        </div>
        <div className="item">
          <h1>Links</h1>
          <Link to="#" className="link font-light font-md hover-slide-right">
            FAQ
          </Link>
          <Link to="#" className="link font-light font-md hover-slide-right">
            Pages
          </Link>
          <Link to="#" className="link font-light font-md hover-slide-right">
            Stores
          </Link>
          <Link to="#" className="link font-light font-md hover-slide-right">
            Compare
          </Link>
          <Link to="#" className="link font-light font-md hover-slide-right">
            Cookies
          </Link>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Bazaar Bliss is your one-stop destination for all your shopping
            needs. Browse our wide selection of high-quality products and enjoy
            fast and free shipping on all orders. Shop now and discover the
            bliss of online shopping!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Contact us at Bazaar Bliss for any questions or concerns. Our
            customer service team is available Monday-Friday 9am-5pm EST. Reach
            out to us via email at support@bazaarbliss.com or call us at
            987-578-678. We're here to help make your shopping experience a
            blissful one.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">BAZAAR BLISS</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/images/payment.png" alt="footer-banner" />
        </div>
      </div>
    </div>
  );
}
