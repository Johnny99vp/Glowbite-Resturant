import Hero from "../components/Hero";
import FeaturedMenu from "../components/FeaturedMenu";
import About from "../components/About";
import Reservation from "../components/Reservation";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <FeaturedMenu />
      <About />
      <Reservation />
      <Contact />
    </>
  );
}

export default Home;