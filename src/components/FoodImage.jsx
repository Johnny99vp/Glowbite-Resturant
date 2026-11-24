import { useState } from "react";

// Shows the photo, or a tinted tile with the first letter if the file is missing.
// Pass sizing/shape classes through className (they apply to both).
function FoodImage({ src, alt, className = "" }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const failed = !src || failedSrc === src;

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`grid place-items-center bg-tint font-head text-4xl font-extrabold uppercase text-brand ${className}`}
      >
        {alt?.[0]}
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailedSrc(src)} />;
}

export default FoodImage;