import { useId, useState } from "react";

// Labelled input with optional error message. Password fields get a Show/Hide toggle.
function Input({ label, error, type = "text", className = "", ...props }) {
  const id = useId();
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={`grid gap-1 ${className}`}>
      <label htmlFor={id} className="text-sm font-bold">{label}</label>
      <div className="relative">
        <input
          id={id}
          type={isPassword && show ? "text" : type}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full rounded-[10px] border-[1.5px] bg-surface p-3 text-base text-ink ${
            error ? "border-brand" : "border-line"
          } ${isPassword ? "pr-16" : ""}`}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-sm font-bold text-accent"
          >
            {show ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <p id={`${id}-error`} className="text-sm text-accent">{error}</p>}
    </div>
  );
}

export default Input;