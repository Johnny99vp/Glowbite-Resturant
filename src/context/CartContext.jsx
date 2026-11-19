import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "glowbite-cart";

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const found = state.find((i) => i.id === action.item.id);
      if (found) {
        return state.map((i) => (i.id === found.id ? { ...i, qty: i.qty + 1 } : i));
      }
      const { id, name, price, image } = action.item;
      return [...state, { id, name, price, image, qty: 1 }];
    }
    case "INCREASE":
      return state.map((i) => (i.id === action.id ? { ...i, qty: i.qty + 1 } : i));
    case "DECREASE":
      return state.flatMap((i) => {
        if (i.id !== action.id) return [i];
        return i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : [];
      });
    case "REMOVE":
      return state.filter((i) => i.id !== action.id);
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

function loadCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, [], loadCart);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage unavailable: the cart still works for this session
    }
  }, [items]);

  const count = items.reduce((n, i) => n + i.qty, 0);
  const total = items.reduce((n, i) => n + i.qty * i.price, 0);

  const value = {
    items,
    count,
    total,
    add: (item) => dispatch({ type: "ADD", item }),
    increase: (id) => dispatch({ type: "INCREASE", id }),
    decrease: (id) => dispatch({ type: "DECREASE", id }),
    remove: (id) => dispatch({ type: "REMOVE", id }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}