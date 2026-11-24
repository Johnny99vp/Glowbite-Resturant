import { useEffect, useState } from "react";
import { HERO_SLIDES } from "../components/data/siteData";
import FoodImage from "./FoodImage";
import Button from "./ui/Button";

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((n) => (n + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <section id="top" className="overflow-hidden bg-hero text-white">
      <div className="mx-auto grid max-w-[1100px] items-center gap-8 px-5 py-10 md:grid-cols-[1fr_1.15fr] md:px-6 md:py-14">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-widest opacity-90">Hungry? Try our</p>
          <h1
            key={slide.id}
            className="mb-6 animate-rise text-[clamp(2.6rem,7vw,5rem)] font-extrabold motion-reduce:animate-none"
          >
            {slide.title}
          </h1>
          <Button to="/menu" variant="light">Order now ›</Button>
          <div className="mt-7 flex gap-2">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Show ${s.title}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
                className={`h-3 cursor-pointer rounded-full transition-all ${i === index ? "w-7 bg-white" : "w-3 bg-white/40"}`}
              />
            ))}
          </div>
        </div>
        <div className="aspect-[4/3] bg-white/15 [clip-path:polygon(14%_0,100%_0,86%_100%,0_100%)]">
          <FoodImage src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Hero;