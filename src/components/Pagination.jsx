import Chip from "./ui/Chip";

function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Menu pages" className="mt-10 flex justify-center gap-1.5">
      <Chip className="min-w-10 px-2" onClick={() => onChange(page - 1)} disabled={page === 1} aria-label="Previous page">
        ‹
      </Chip>
      {pages.map((n) => (
        <Chip
          key={n}
          active={n === page}
          aria-current={n === page ? "page" : undefined}
          className="min-w-10 px-2"
          onClick={() => onChange(n)}
        >
          {n}
        </Chip>
      ))}
      <Chip className="min-w-10 px-2" onClick={() => onChange(page + 1)} disabled={page === totalPages} aria-label="Next page">
        ›
      </Chip>
    </nav>
  );
}

export default Pagination;