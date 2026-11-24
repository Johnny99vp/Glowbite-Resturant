import { Link } from "react-router-dom";
import { NAME } from "../components/data/siteData";

const link = "mb-2 block text-sm text-white/80 hover:text-white hover:underline";

function Footer() {
  return (
    <footer className="bg-footer px-6 pb-24 pt-12 text-white md:pb-6">
      <div className="mx-auto grid max-w-[1100px] grid-cols-2 gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <h4 className="mb-3 text-2xl font-extrabold text-[#ff8a82]">{NAME}</h4>
          <p className="text-sm text-white/80">
            Fresh Nigerian dishes, cooked daily. Dine in, pick up, or order for delivery.
          </p>
        </div>
        <div>
          <h5 className="mb-3">Explore</h5>
          <Link to="/menu" className={link}>Order</Link>
          <Link to="/cart" className={link}>Cart</Link>
          <Link to="/#contact" className={link}>Locations</Link>
        </div>
        <div>
          <h5 className="mb-3">{NAME.split(" ")[0]}</h5>
          <Link to="/#about" className={link}>About us</Link>
          <Link to="/#reservation" className={link}>Reservation</Link>
          <Link to="/#contact" className={link}>Contact us</Link>
        </div>
        <div>
          <h5 className="mb-3">Follow us</h5>
          <a href="#" className={link}>Instagram</a>
          <a href="#" className={link}>Facebook</a>
          <a href="#" className={link}>X (Twitter)</a>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1100px] border-t border-white/15 pt-5 text-center text-sm text-white/80">
        © {new Date().getFullYear()} {NAME}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;