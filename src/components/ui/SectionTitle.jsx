function SectionTitle({ children, sub, center = false }) {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      <h2 className="text-3xl text-ink">{children}</h2>
      {sub && <p className={`mt-2 max-w-[62ch] text-muted ${center ? "mx-auto" : ""}`}>{sub}</p>}
    </div>
  );
}

export default SectionTitle;