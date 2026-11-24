function QuantityControl({ value, onIncrease, onDecrease, label }) {
  const btn = "size-8 cursor-pointer text-lg font-bold text-accent";
  return (
    <div className="inline-flex items-center rounded-full border-[1.5px] border-brand">
      <button type="button" className={btn} onClick={onDecrease} aria-label={`Remove one ${label}`}>−</button>
      <span className="min-w-6 text-center font-bold">{value}</span>
      <button type="button" className={btn} onClick={onIncrease} aria-label={`Add one ${label}`}>+</button>
    </div>
  );
}

export default QuantityControl;