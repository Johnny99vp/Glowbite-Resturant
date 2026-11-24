import { Link } from "react-router-dom";

const base =
  "inline-flex cursor-pointer items-center justify-center rounded-full border-2 font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-50";

const variants = {
  primary: "border-brand bg-brand text-white hover:border-red-700 hover:bg-red-700",
  light: "border-white bg-white text-red-800 hover:bg-red-50",
  outline: "border-brand bg-transparent text-accent hover:bg-brand hover:text-white",
};

const sizes = {
  sm: "px-4 py-1.5 text-sm",
  md: "px-6 py-3 text-base",
};

// <Button>            a normal button
// <Button to="/menu"> a router link that looks like a button
// <Button href="...">  an external link that looks like a button
function Button({ variant = "primary", size = "md", to, href, className = "", children, ...props }) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  if (href) return <a href={href} className={classes} {...props}>{children}</a>;
  return <button type="button" className={classes} {...props}>{children}</button>;
}

export default Button;