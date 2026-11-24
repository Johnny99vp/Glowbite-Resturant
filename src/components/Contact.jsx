import { WHATSAPP } from "../components/data/siteData";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Button from "./ui/Button";

function Contact() {
  return (
    <Section id="contact" className="grid items-start gap-10 md:grid-cols-[1fr_1.3fr]">
      <div>
        <SectionTitle>Find us</SectionTitle>
        <p>12 Example Street, Ibadan</p>
        <p>+234 8065441123</p>
        <p>Open daily, 10:00 AM to 10:00 PM</p>
        <Button href={`https://wa.me/${WHATSAPP}`} variant="outline" className="mt-4">
          Chat on WhatsApp
        </Button>
      </div>
      <iframe
        title="Map showing the restaurant location"
        src="https://www.google.com/maps?q=Ibadan,Nigeria&output=embed"
        loading="lazy"
        className="h-80 w-full rounded-2xl border-0"
      />
    </Section>
  );
}

export default Contact;