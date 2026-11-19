import { Link } from "react-router-dom";

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-text">
        <h1>Food that tastes like Sunday at home.</h1>
        <p>Nigerian dishes cooked fresh every day, from pepper soup to party jollof.</p>
        <div className="hero-actions">
          <Link to="/menu" className="btn">See the menu</Link>
          <Link to="/#reservation" className="btn btn-ghost">Book a table</Link>
        </div>
      </div>
      <aside className="hero-card" aria-label="Today's hours">
        <h2>Open today</h2>
        <p className="hours">10:00 AM to 10:00 PM</p>
        <p>12 Example Street, Ibadan</p>
        <p>+234 8065441123</p>
      </aside>
    </section>
  );
}

export default Hero;