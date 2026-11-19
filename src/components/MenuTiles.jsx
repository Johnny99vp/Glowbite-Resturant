import { Link } from "react-router-dom";
import { MENU } from "../data/siteData";
import FoodImage from "./FoodImage";

function MenuTiles() {
  return (
    <section className="section">
      <h2 className="center">What's on the menu?</h2>
      <p className="section-sub">There is something for every craving. Pick a favourite and order it your way.</p>
      <div className="tile-grid">
        {MENU.slice(0, 12).map((d) => (
          <Link key={d.id} to="/menu" className="tile">
            <span className="tile-label">{d.name} <span aria-hidden="true">›</span></span>
            <FoodImage src={d.image} alt={d.name} className="tile-img" />
          </Link>
        ))}
      </div>
      <div className="view-more-wrap">
        <Link to="/menu" className="btn">See full menu ›</Link>
      </div>
    </section>
  );
}

export default MenuTiles;