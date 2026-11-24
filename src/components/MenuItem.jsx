import { useCart } from "../context/CartContext";
import FoodImage from "./FoodImage";
import Button from "./ui/Button";
import Price from "./ui/Price";
import QuantityControl from "./ui/QuantityControl";

function MenuItem({ dish }) {
  const { items, add, increase, decrease } = useCart();
  const inCart = items.find((i) => i.id === dish.id);

  return (
    <li className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface">
      <FoodImage src={dish.image} alt={dish.name} className="aspect-[4/3] w-full object-cover" />
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-lg">{dish.name}</h3>
        <p className="flex-1 text-sm text-muted">{dish.desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <Price value={dish.price} />
          {inCart ? (
            <QuantityControl
              label={dish.name}
              value={inCart.qty}
              onIncrease={() => increase(dish.id)}
              onDecrease={() => decrease(dish.id)}
            />
          ) : (
            <Button variant="outline" size="sm" onClick={() => add(dish)}>Add</Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;