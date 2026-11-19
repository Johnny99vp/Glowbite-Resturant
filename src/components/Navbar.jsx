import { useState } from "react";
import { Link } from "react-router-dom";
import { NAME, LINKS } from "../data/siteData";
import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="logo" onClick={close}>{NAME}</Link>

      <nav className={open ? "nav-links open" : "nav-links"}>
        {LINKS.map((l) => (
          <Link key={l.label} to={l.to} onClick={close}>
            {l.label}
          </Link>
        ))}
        <Link to="/cart" className="cart-pill" onClick={close} aria-label={`Cart, ${count} items`}>
          Cart <span className="cart-count">{count}</span>
        </Link>
      </nav>

      <div className="nav-actions">
        <ThemeToggle />
        <button
          className="hamburger"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;