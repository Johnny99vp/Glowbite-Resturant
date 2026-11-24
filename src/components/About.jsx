import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";

function About() {
  return (
    <Section id="about" tinted>
      <SectionTitle>Our story</SectionTitle>
      <p className="max-w-[62ch]">
        GlowBite started with one rule: nobody leaves hungry. We cook Nigerian
        favourites from scratch every day, buy from trusted local suppliers, and
        season every pot by taste, not by timer.
      </p>
    </Section>
  );
}

export default About;