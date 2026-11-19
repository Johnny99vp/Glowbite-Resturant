import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

function MobileTabBar() {
  const { count } = useCart();
  const cls = ({ isActive }) => (isActive ? "tab-item active" : "tab-item");

  return (
    <nav className="tabbar" aria-label="Quick navigation">
      <NavLink to="/" end className={cls}>Home</NavLink>
      <NavLink to="/menu" className={cls}>Menu</NavLink>
      <NavLink to="/cart" className={cls}>
        Cart{count > 0 && <span className="tab-count">{count}</span>}
      </NavLink>
      <Link to="/#reservation" className="tab-item">Book</Link>
    </nav>
  );
}

export default MobileTabBar;