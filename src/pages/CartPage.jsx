import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { naira } from "../utils/format";
import { NAME, WHATSAPP } from "../components/data/siteData";
import FoodImage from "../components/FoodImage";
import PageIntro from "../components/ui/PageIntro";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Price from "../components/ui/Price";
import QuantityControl from "../components/ui/QuantityControl";

const EMPTY = { name: "", phone: "", address: "" };
const textBtn = "cursor-pointer text-sm font-bold text-accent underline";

function CartPage() {
  const { items, total, increase, decrease, remove, clear } = useCart();
  const { user } = useAuth();
  const [form, setForm] = useState({ ...EMPTY, name: user?.name ?? "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const lines = items.map((i) => `${i.qty} x ${i.name} - ${naira(i.qty * i.price)}`);
    const text = [
      `New order for ${NAME}`,
      "",
      ...lines,
      "",
      `Total: ${naira(total)}`,
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
    ].join("\n");

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <>
      <PageIntro title="Your Cart" subtitle="Review your order, then send it to us on WhatsApp." />

      <Section>
        {items.length === 0 ? (
          <div className="py-8 text-center">
            <p className="mb-5">Your cart is empty.</p>
            <Button to="/menu">Browse the menu</Button>
          </div>
        ) : (
          <>
            <ul className="border-t border-line">
              {items.map((i) => (
                <li key={i.id} className="flex flex-wrap items-center gap-4 border-b border-line py-4">
                  <FoodImage src={i.image} alt={i.name} className="size-16 shrink-0 rounded-[10px] object-cover" />
                  <div className="flex-1">
                    <h3 className="text-lg">{i.name}</h3>
                    <p className="text-sm text-muted">{naira(i.price)} each</p>
                  </div>
                  <QuantityControl
                    label={i.name}
                    value={i.qty}
                    onIncrease={() => increase(i.id)}
                    onDecrease={() => decrease(i.id)}
                  />
                  <Price value={i.price * i.qty} />
                  <button className={textBtn} onClick={() => remove(i.id)} aria-label={`Remove ${i.name} from cart`}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="mb-10 mt-6 flex justify-between font-head text-2xl font-extrabold">
              <span>Total</span>
              <span>{naira(total)}</span>
            </div>
            <button className={`${textBtn} mt-6 block`} onClick={clear}>Clear cart</button>

            <SectionTitle>Delivery details</SectionTitle>
            <form onSubmit={onSubmit} className="grid max-w-[640px] gap-4 sm:grid-cols-2">
              <Input label="Full name" name="name" value={form.name} onChange={onChange} required />
              <Input label="Phone number" name="phone" type="tel" value={form.phone} onChange={onChange} required />
              <Input label="Delivery address" name="address" className="sm:col-span-2" value={form.address} onChange={onChange} required />
              <Button type="submit" className="justify-self-start sm:col-span-2">Order on WhatsApp</Button>
            </form>

            
          </>
        )}
      </Section>
    </>
  );
}

export default CartPage;