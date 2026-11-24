import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const tab = "relative py-3 text-center text-[0.85rem] font-bold";

function MobileTabBar() {
  const { count } = useCart();
  const { user, logout } = useAuth();
  const cls = ({ isActive }) => `${tab} ${isActive ? "text-accent" : "text-muted"}`;

  return (
    <nav
      aria-label="Quick navigation"
      className="fixed inset-x-0 bottom-0 z-20 grid grid-cols-5 border-t border-line bg-surface pb-[env(safe-area-inset-bottom)] md:hidden"
    >
      <NavLink to="/" end className={cls}>Home</NavLink>
      <NavLink to="/menu" className={cls}>Menu</NavLink>
      <NavLink to="/cart" className={cls}>
        Cart
        {count > 0 && <span className="ml-1 rounded-full bg-brand px-1.5 text-xs text-white">{count}</span>}
      </NavLink>
      <Link to="/#reservation" className={`${tab} text-muted`}>Book</Link>
      {user ? (
        <button onClick={logout} className={`${tab} cursor-pointer text-muted`}>Log out</button>
      ) : (
        <NavLink to="/login" className={cls}>Log in</NavLink>
      )}
    </nav>
  );
}

export default MobileTabBar;