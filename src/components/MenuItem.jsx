import { naira } from "../utils/format";
import { useCart } from "../context/CartContext";

function MenuItem({ dish }) {
  const { items, add, increase, decrease } = useCart();
  const inCart = items.find((i) => i.id === dish.id);

  return (
    <li className="dish">
      
        <img
          src={dish.image}
          alt={dish.name}
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      
      <div className="dish-info">
        <h3>{dish.name}</h3>
        <p>{dish.desc}</p>
      </div>
      <div className="dish-side">
        <span className="price">{naira(dish.price)}</span>
        {inCart ? (
          <div className="qty">
            <button onClick={() => decrease(dish.id)} aria-label={`Remove one ${dish.name}`}>−</button>
            <span>{inCart.qty}</span>
            <button onClick={() => increase(dish.id)} aria-label={`Add one ${dish.name}`}>+</button>
          </div>
        ) : (
          <button className="add-btn" onClick={() => add(dish)}>Add to cart</button>
        )}
      </div>
    </li>
  );
}

export default MenuItem;