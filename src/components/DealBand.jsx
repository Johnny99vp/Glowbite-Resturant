import { Link } from "react-router-dom";
import FoodImage from "./FoodImage";
import Section from "./ui/Section";

function DealBand() {
  return (
    <Section className="grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
      <div>
        <h2 className="mb-5 text-3xl text-ink">Hungry for more? Try a combo.</h2>
        <p className="mb-4 text-muted">
          Pair a hearty main with a chilled drink at a friendlier price. Pick your
          favourites from the menu and we will have them ready.
        </p>
        <Link to="/menu" className="font-bold text-accent hover:underline">Order now →</Link>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-tint">
        <FoodImage src="/images/promo.jpg" alt="Combo deals" className="h-full w-full object-cover" />
        <span className="absolute left-0 top-4 rounded-r-lg bg-sun px-4 py-1.5 font-extrabold text-[#2b1d00] shadow-md">
          Combo deals
        </span>
      </div>
    </Section>
  );
}

export default DealBand;