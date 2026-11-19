import { Link } from "react-router-dom";
import { MENU } from "../components/data/siteData";
import MenuItem from "./MenuItem";

function FeaturedMenu() {
  const featured = MENU.filter((d) => [1, 6, 7, 12].includes(d.id));

  return (
    <section id="popular" className="section">
      <h2>Popular dishes</h2>
      <ul className="menu-list">
        {featured.map((d) => (
          <MenuItem key={d.id} dish={d} />
        ))}
      </ul>
      <div className="view-more-wrap">
        <Link to="/menu" className="btn">View more</Link>
      </div>
    </section>
  );
}

export default FeaturedMenu;