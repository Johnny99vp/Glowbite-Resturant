// Page section with the site's standard width and spacing.
// tinted = full-width tinted background behind the content.
function Section({ id, tinted = false, className = "", children }) {
  return (
    <section id={id} className={tinted ? "bg-tint" : undefined}>
      <div className={`mx-auto max-w-[1100px] px-5 py-12 md:px-6 md:py-16 ${className}`}>{children}</div>
    </section>
  );
}

export default Section;