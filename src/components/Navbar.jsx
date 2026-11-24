import { useState } from "react";
import { Link } from "react-router-dom";
import { NAME, LINKS } from "../components/data/siteData";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Button";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const { user, logout } = useAuth();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-10 flex items-center gap-4 border-b border-line bg-surface px-6 py-3 transition-colors">
      <Link to="/" onClick={close} className="font-head text-2xl font-extrabold text-accent">
        {NAME}
      </Link>

      <nav
        className={`absolute inset-x-0 top-full flex-col items-start gap-4 border-b border-line bg-surface px-6 py-5 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 ${
          open ? "flex" : "hidden"
        }`}
      >
        {LINKS.map((l) => (
          <Link key={l.label} to={l.to} onClick={close} className="font-semibold text-ink hover:text-accent">
            {l.label}
          </Link>
        ))}

        {user ? (
          <>
            <span className="font-semibold text-muted">Hi, {user.name.split(" ")[0]}</span>
            <button
              onClick={() => { logout(); close(); }}
              className="cursor-pointer font-semibold text-ink hover:text-accent"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <Button to="/login" variant="outline" size="sm" onClick={close}>Log in</Button>
            <Button to="/signup" size="sm" onClick={close}>Sign up</Button>
          </>
        )}

        <Button to="/cart" size="sm" onClick={close} className="gap-2 pr-1" aria-label={`Cart, ${count} items`}>
          Cart
          <span className="min-w-6 rounded-full bg-white px-1.5 text-center text-sm font-extrabold leading-6 text-brand">
            {count}
          </span>
        </Button>
      </nav>

      <div className="ml-auto flex items-center gap-2 md:ml-0">
        <ThemeToggle />
        <button
          className="cursor-pointer text-2xl text-ink md:hidden"
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