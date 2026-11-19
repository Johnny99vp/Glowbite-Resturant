import { Link } from "react-router-dom";
import FoodImage from "./FoodImage";

function DealBand() {
  return (
    <section className="section deal">
      <div>
        <h2>Hungry for more? Try a combo.</h2>
        <p>
          Pair a hearty main with a chilled drink at a friendlier price. Pick your
          favourites from the menu and we will have them ready.
        </p>
        <Link to="/menu" className="link-arrow">Order now →</Link>
      </div>
      <div className="deal-art">
        <FoodImage src="/images/promo.jpg" alt="Combo deals" />
        <span className="ribbon">Combo deals</span>
      </div>
    </section>
  );
}

export default DealBand;