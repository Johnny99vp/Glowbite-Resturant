import { naira } from "../utils/format";
import { useCart } from "../context/CartContext";
import FoodImage from "./FoodImage";

function MenuItem({ dish }) {
  const { items, add, increase, decrease } = useCart();
  const inCart = items.find((i) => i.id === dish.id);

  return (
    <li className="dish">
      <FoodImage src={dish.image} alt={dish.name} className="dish-img" />
      <div className="dish-body">
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
        <div className="dish-foot">
          <span className="price">{naira(dish.price)}</span>
          {inCart ? (
            <div className="qty">
              <button onClick={() => decrease(dish.id)} aria-label={`Remove one ${dish.name}`}>−</button>
              <span>{inCart.qty}</span>
              <button onClick={() => increase(dish.id)} aria-label={`Add one ${dish.name}`}>+</button>
            </div>
          ) : (
            <button className="add-btn" onClick={() => add(dish)}>Add</button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;