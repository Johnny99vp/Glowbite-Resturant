import { useState } from "react";

// Shows the photo, or a coloured tile with the first letter if it is missing
function FoodImage({ src, alt, className = "" }) {
  const [failedSrc, setFailedSrc] = useState(null);
  const failed = !src || failedSrc === src;

  if (failed) {
    return (
      <div className={`food-fallback ${className}`} role="img" aria-label={alt}>
        {alt?.[0]}
      </div>
    );
  }
  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailedSrc(src)} />;
}

export default FoodImage;