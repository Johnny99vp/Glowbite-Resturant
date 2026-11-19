import Hero from "../components/Hero";
import TagStrip from "../components/TagStrip";
import DealBand from "../components/DealBand";
import MenuTiles from "../components/MenuTiles";
import CallToActions from "../components/CallToActions";
import About from "../components/About";
import Reservation from "../components/Reservation";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <TagStrip />
      <DealBand />
      <MenuTiles />
      <CallToActions />
      <About />
      <Reservation />
      <Contact />
    </>
  );
}

export default Home;