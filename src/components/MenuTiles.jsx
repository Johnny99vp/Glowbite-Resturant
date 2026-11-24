import { Link } from "react-router-dom";
import { MENU } from "../components/data/siteData";
import FoodImage from "./FoodImage";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

function MenuTiles() {
  return (
    <Section>
      <SectionTitle center sub="There is something for every craving. Pick a favourite and order it your way.">
        What's on the menu?
      </SectionTitle>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:gap-4">
        {MENU.slice(0, 12).map((d) => (
          <Link
            key={d.id}
            to="/menu"
            className="group relative block aspect-square overflow-hidden rounded-[18px] bg-brand text-white"
          >
            <span className="absolute inset-x-4 top-4 z-10 flex justify-between gap-2 font-head text-lg font-bold leading-tight">
              {d.name} <span aria-hidden="true">›</span>
            </span>
            <FoodImage
              src={d.image}
              alt={d.name}
              className="absolute -bottom-[10%] -right-[10%] aspect-square w-3/4 rounded-full border-4 border-white/35 object-cover transition-transform group-hover:-rotate-3 group-hover:scale-105 motion-reduce:transition-none"
            />
          </Link>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Button to="/menu">See full menu ›</Button>
      </div>
    </Section>
  );
}

export default MenuTiles;