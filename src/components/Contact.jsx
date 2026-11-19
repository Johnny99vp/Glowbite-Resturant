import { WHATSAPP } from "../components/data/siteData";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div>
        <h2>Find us</h2>
        <p>12 Example Street, Ibadan</p>
        <p>+234 8065441123</p>
        <p>Open daily, 10:00 AM to 10:00 PM</p>
        <a className="btn btn-ghost dark" href={`https://wa.me/${WHATSAPP}`}>Chat on WhatsApp</a>
      </div>
      <iframe
        title="Map showing the restaurant location"
        src="https://www.google.com/maps?q=Ibadan,Nigeria&output=embed"
        loading="lazy"
      />
    </section>
  );
}

export default Contact;