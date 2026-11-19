import { useState } from "react";
import { MENU, CATEGORIES } from "../data/siteData";
import MenuItem from "../components/MenuItem";
import Pagination from "../components/Pagination";

const PER_PAGE = 4;

function MenuPage() {
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = category === "All" ? MENU : MENU.filter((d) => d.category === category);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const items = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const changeCategory = (c) => {
    setCategory(c);
    setPage(1);
  };

  const changePage = (n) => {
    setPage(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="page-intro">
        <h1>Our Menu</h1>
        <p>Fresh Nigerian dishes, cooked to order.</p>
      </div>

      <section className="section">
        <div className="tabs" role="tablist">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={category === c}
              className={category === c ? "tab active" : "tab"}
              onClick={() => changeCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <ul className="menu-list">
          {items.map((d) => (
            <MenuItem key={d.id} dish={d} />
          ))}
        </ul>

        <Pagination page={page} totalPages={totalPages} onChange={changePage} />
      </section>
    </>
  );
}

export default MenuPage;