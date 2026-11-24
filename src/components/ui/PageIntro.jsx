// Red banner at the top of inner pages (Menu, Cart, Login, Sign up)
function PageIntro({ title, subtitle }) {
  return (
    <div className="bg-hero px-6 py-12 text-center text-white">
      <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold">{title}</h1>
      {subtitle && <p className="mx-auto mt-2 opacity-90">{subtitle}</p>}
    </div>
  );
}

export default PageIntro;