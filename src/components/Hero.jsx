import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HERO_SLIDES } from "../components/data/siteData";
import FoodImage from "./FoodImage";

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((n) => (n + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[index];

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Hungry? Try our</p>
          <h1 key={slide.id}>{slide.title}</h1>
          <Link to="/menu" className="btn btn-light">Order now ›</Link>
          <div className="dots">
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.id}
                className={i === index ? "active" : ""}
                aria-label={`Show ${s.title}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="hero-art">
          <FoodImage src={slide.image} alt={slide.title} />
        </div>
      </div>
    </section>
  );
}

export default Hero;