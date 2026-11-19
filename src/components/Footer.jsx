import { NAME } from "./data/siteData";

function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} {NAME}. All rights reserved.
    </footer>
  );
}

export default Footer;