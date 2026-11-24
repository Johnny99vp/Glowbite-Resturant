// Pill button used for category tabs and page numbers.
// Add padding with className (for example "px-5").
function Chip({ active = false, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`h-10 cursor-pointer rounded-full border-[1.5px] text-base font-bold disabled:cursor-not-allowed disabled:opacity-40 ${
        active ? "border-brand bg-brand text-white" : "border-line bg-surface text-ink"
      } ${className}`}
      {...props}
    />
  );
}

export default Chip;