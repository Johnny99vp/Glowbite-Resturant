import { useState } from "react";
import Section from "./ui/Section";
import SectionTitle from "./ui/SectionTitle";
import Input from "./ui/Input";
import Button from "./ui/Button";

const EMPTY = { name: "", phone: "", date: "", time: "", guests: 2 };

function Reservation() {
  const [form, setForm] = useState(EMPTY);
  const [done, setDone] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation:", form); // replace with a fetch() to your backend
    setDone(true);
    setForm(EMPTY);
  };

  return (
    <Section id="reservation">
      <SectionTitle>Book a table</SectionTitle>
      {done && (
        <p role="status" className="mb-4 max-w-[640px] rounded-[10px] border border-line bg-tint px-4 py-3 font-bold text-accent">
          Booking received. We will call to confirm.
        </p>
      )}
      <form onSubmit={onSubmit} className="grid max-w-[640px] gap-4 sm:grid-cols-2">
        <Input label="Full name" name="name" value={form.name} onChange={onChange} required />
        <Input label="Phone number" name="phone" type="tel" value={form.phone} onChange={onChange} required />
        <Input label="Date" name="date" type="date" value={form.date} onChange={onChange} required />
        <Input label="Time" name="time" type="time" value={form.time} onChange={onChange} required />
        <Input label="Guests" name="guests" type="number" min="1" max="20" value={form.guests} onChange={onChange} required />
        <Button type="submit" className="justify-self-start sm:col-span-2">Book table</Button>
      </form>
    </Section>
  );
}

export default Reservation;