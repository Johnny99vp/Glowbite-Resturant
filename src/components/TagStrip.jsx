import { TAGS } from "../components/data/siteData";

function TagStrip() {
  const row = [...TAGS, ...TAGS]; // doubled so the loop is seamless
  return (
    <div className="tag-strip" aria-hidden="true">
      <div className="tag-track">
        {row.map((t, i) => (
          <span key={i} className="tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default TagStrip;