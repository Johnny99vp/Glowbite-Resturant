import Section from "./ui/Section";
import Button from "./ui/Button";

function CallToActions() {
  return (
    <Section className="grid gap-5 pt-4 md:grid-cols-2">
      <article className="rounded-[20px] bg-brand p-8 text-white">
        <h3 className="mb-3 text-2xl">Find GlowBite near you</h3>
        <p className="mb-6">Bring family and friends for a meal to remember. Dine in, pick up, or have it delivered.</p>
        <Button to="/#contact" variant="light">Find location</Button>
      </article>
      <article className="rounded-[20px] border border-line bg-tint p-8">
        <h3 className="mb-3 text-2xl">Order in seconds on WhatsApp</h3>
        <p className="mb-6">Fill your cart, add your address, and send the whole order in one tap.</p>
        <Button to="/cart">Go to cart</Button>
      </article>
    </Section>
  );
}

export default CallToActions;