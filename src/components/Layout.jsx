import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileTabBar from "./MobileTarBar";

// Scrolls to #section links, or to the top when the page changes
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function Layout() {
  return (
    <>
      <Navbar />
      <ScrollManager />
      <main>
        <Outlet />
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}

export default Layout;