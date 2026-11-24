import { TAGS } from "../components/data/siteData";

function TagStrip() {
  const row = [...TAGS, ...TAGS]; // doubled so the loop is seamless
  return (
    <div className="overflow-hidden border-y border-line bg-tint py-3.5" aria-hidden="true">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row.map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-6 font-bold text-accent after:ml-12 after:text-sun after:content-['•']"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TagStrip;