function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="pagination" aria-label="Menu pages">
      <button onClick={() => onChange(page - 1)} disabled={page === 1} aria-label="Previous page">
        ‹
      </button>
      {pages.map((n) => (
        <button
          key={n}
          className={n === page ? "active" : ""}
          aria-current={n === page ? "page" : undefined}
          onClick={() => onChange(n)}
        >
          {n}
        </button>
      ))}
      <button onClick={() => onChange(page + 1)} disabled={page === totalPages} aria-label="Next page">
        ›
      </button>
    </nav>
  );
}

export default Pagination;