import { Link } from "react-router-dom";
import { NAME } from "../data/siteData";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>{NAME}</h4>
          <p>Fresh Nigerian dishes, cooked daily. Dine in, pick up, or order for delivery.</p>
        </div>
        <div>
          <h5>Explore</h5>
          <Link to="/menu">Order</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/#contact">Locations</Link>
        </div>
        <div>
          <h5>{NAME.split(" ")[0]}</h5>
          <Link to="/#about">About us</Link>
          <Link to="/#reservation">Reservation</Link>
          <Link to="/#contact">Contact us</Link>
        </div>
        <div>
          <h5>Follow us</h5>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">X (Twitter)</a>
        </div>
      </div>
      <p className="copy">© {new Date().getFullYear()} {NAME}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;