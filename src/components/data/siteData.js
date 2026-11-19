export const NAME = "GlowBite Restaurant";

export const LINKS = [
  { label: "Order", to: "/menu" },
  { label: "About", to: "/#about" },
  { label: "Reservation", to: "/#reservation" },
  { label: "Locations", to: "/#contact" },
];

export const CATEGORIES = ["All", "Starters", "Mains", "Drinks"];

export const MENU = [
  { id: 1, name: "Suya Platter", category: "Starters", price: 2500, image: "/images/suya.jpg", desc: "Thin-sliced beef, yaji spice, onions, tomato." },
  { id: 2, name: "Pepper Soup", category: "Starters", price: 2800, image: "/images/pepper-soup.jpg", desc: "Goat meat in a hot, clove-scented broth." },
  { id: 3, name: "Moin Moin", category: "Starters", price: 1500, image: "/images/moin-moin.jpg", desc: "Steamed bean pudding with egg and fish." },
  { id: 4, name: "Akara Bites", category: "Starters", price: 1300, image: "/images/akara.jpg", desc: "Crispy bean fritters with pepper sauce." },
  { id: 5, name: "Puff Puff", category: "Starters", price: 1000, image: "/images/puff-puff.jpg", desc: "Soft, golden fried dough balls." },
  { id: 6, name: "Jollof Rice & Chicken", category: "Mains", price: 3500, image: "/images/jollof.jpg", desc: "Smoky party jollof, grilled chicken, fried plantain." },
  { id: 7, name: "Egusi & Pounded Yam", category: "Mains", price: 4200, image: "/images/egusi.jpg", desc: "Melon-seed stew with assorted meat." },
  { id: 8, name: "Ofada Rice & Ayamase", category: "Mains", price: 4000, image: "/images/ofada.jpg", desc: "Local rice with green pepper stew." },
  { id: 9, name: "Fried Rice & Turkey", category: "Mains", price: 3800, image: "/images/fried-rice.jpg", desc: "Veggie fried rice with seasoned turkey." },
  { id: 10, name: "Amala & Ewedu", category: "Mains", price: 3600, image: "/images/amala.jpg", desc: "Yam-flour swallow with ewedu and gbegiri." },
  { id: 11, name: "Efo Riro & Eba", category: "Mains", price: 3700, image: "/images/efo-riro.jpg", desc: "Rich spinach stew with assorted meat." },
  { id: 12, name: "Chapman", category: "Drinks", price: 1500, image: "/images/chapman.jpg", desc: "Fanta, Sprite, grenadine, bitters, citrus." },
  { id: 13, name: "Zobo", category: "Drinks", price: 1000, image: "/images/zobo.jpg", desc: "Chilled hibiscus with ginger and pineapple." },
  { id: 14, name: "Palm Wine", category: "Drinks", price: 1800, image: "/images/palm-wine.jpg", desc: "Fresh tapped, served cold." },
  { id: 15, name: "Kunu", category: "Drinks", price: 900, image: "/images/kunu.jpg", desc: "Millet drink, lightly sweet and spiced." },
  { id: 16, name: "Tiger Nut Drink", category: "Drinks", price: 1100, image: "/images/tigernut.jpg", desc: "Creamy, naturally sweet, served chilled." },
];

// Your WhatsApp number in international format, no + or spaces
export const WHATSAPP = "2348000000000";

// Dishes that rotate in the home page hero (images go in public/images/)
export const HERO_SLIDES = [
  { id: "jollof", title: "Jollof Rice", image: "/images/jollof.jpg" },
  { id: "suya", title: "Suya", image: "/images/suya.jpg" },
  { id: "egusi", title: "Egusi & Pounded Yam", image: "/images/egusi.jpg" },
];

// Words in the scrolling strip under the hero
export const TAGS = [
  "Nigerian Meals", "Jollof Rice", "Grilled Suya", "Soups & Swallows",
  "Pastries", "Fresh Drinks", "Delivery", "Pickup", "Dine-in",
];