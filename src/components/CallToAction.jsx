import { Link } from "react-router-dom";

function CallToActions() {
  return (
    <section className="section cta-grid">
      <article className="cta cta-red">
        <h3>Find GlowBite near you</h3>
        <p>Bring family and friends for a meal to remember. Dine in, pick up, or have it delivered.</p>
        <Link to="/#contact" className="btn btn-light">Find location</Link>
      </article>
      <article className="cta cta-tint">
        <h3>Order in seconds on WhatsApp</h3>
        <p>Fill your cart, add your address, and send the whole order in one tap.</p>
        <Link to="/cart" className="btn">Go to cart</Link>
      </article>
    </section>
  );
}

export default CallToActions;