import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { naira } from "../utils/format";
import { NAME, WHATSAPP } from "../components/data/siteData";

const EMPTY = { name: "", phone: "", address: "" };

function CartPage() {
  const { items, total, increase, decrease, remove, clear } = useCart();
  const [form, setForm] = useState(EMPTY);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = items.map((i) => `${i.qty} x ${i.name} - ${naira(i.qty * i.price)}`);
    const text = [
      `New order for ${NAME}`,
      "",
      ...lines,
      "",
      `Total: ${naira(total)}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <>
      <div className="page-intro">
        <h1>Your Cart</h1>
        <p>Review your order, then send it to us on WhatsApp.</p>
      </div>

      <section className="section">
        {items.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty.</p>
            <Link to="/menu" className="btn">Browse the menu</Link>
          </div>
        ) : (
          <>
          
            <ul className="menu-list">
              {items.map((i) => (
                <li key={i.id} className="cart-row">
                  {i.image && (
                    <img
                      src={i.image}
                      alt={i.name}
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                  )}
                  <div className="dish-info">
                    <h3>{i.name}</h3>
                    <p>{naira(i.price)} each</p>
                  </div>
                  <div className="qty">
                    <button onClick={() => decrease(i.id)} aria-label={`Remove one ${i.name}`}>−</button>
                    <span>{i.qty}</span>
                    <button onClick={() => increase(i.id)} aria-label={`Add one ${i.name}`}>+</button>
                  </div>
                  <span className="price">{naira(i.price * i.qty)}</span>
                  <button className="link-btn" onClick={() => remove(i.id)} aria-label={`Remove ${i.name} from cart`}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <span>Total</span>
              <span>{naira(total)}</span>
            </div>
            <button className="link-btn clear" onClick={clear}>Clear cart</button>

            <h2>Delivery details</h2>
            <form className="form" onSubmit={onSubmit}>
              <label>Full name
                <input name="name" value={form.name} onChange={onChange} required />
              </label>
              <label>Phone number
                <input name="phone" type="tel" value={form.phone} onChange={onChange} required />
              </label>
              <label className="full">Delivery address
                <input name="address" value={form.address} onChange={onChange} required />
              </label>
              <button type="submit" className="btn">Order on WhatsApp</button>
            </form>

            
          </>
        )}
      </section>
    </>
  );
}

export default CartPage;