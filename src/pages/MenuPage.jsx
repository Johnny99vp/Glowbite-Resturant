import { useState } from "react";
import { MENU, CATEGORIES } from "../components/data/siteData";
import MenuItem from "../components/MenuItem";
import Pagination from "../components/Pagination";
import PageIntro from "../components/ui/PageIntro";
import Section from "../components/ui/Section";
import Chip from "../components/ui/Chip";

const PER_PAGE = 8;

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
      <PageIntro title="Our Menu" subtitle="Fresh Nigerian dishes, cooked to order." />

      <Section>
        <div className="mb-7 flex flex-wrap gap-2" role="tablist">
          {CATEGORIES.map((c) => (
            <Chip
              key={c}
              role="tab"
              aria-selected={category === c}
              active={category === c}
              className="px-5"
              onClick={() => changeCategory(c)}
            >
              {c}
            </Chip>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-3 md:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] md:gap-5">
          {items.map((d) => (
            <MenuItem key={d.id} dish={d} />
          ))}
        </ul>

        <Pagination page={page} totalPages={totalPages} onChange={changePage} />
      </Section>
    </>
  );
}

export default MenuPage;