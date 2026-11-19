import { useState } from "react";

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
    <section id="reservation" className="section">
      <h2>Book a table</h2>
      {done && <p className="success" role="status">Booking received. We will call to confirm.</p>}
      <form className="form" onSubmit={onSubmit}>
        <label>Full name
          <input name="name" value={form.name} onChange={onChange} required />
        </label>
        <label>Phone number
          <input name="phone" type="tel" value={form.phone} onChange={onChange} required />
        </label>
        <label>Date
          <input name="date" type="date" value={form.date} onChange={onChange} required />
        </label>
        <label>Time
          <input name="time" type="time" value={form.time} onChange={onChange} required />
        </label>
        <label>Guests
          <input name="guests" type="number" min="1" max="20" value={form.guests} onChange={onChange} required />
        </label>
        <button type="submit" className="btn">Book table</button>
      </form>
    </section>
  );
}

export default Reservation;