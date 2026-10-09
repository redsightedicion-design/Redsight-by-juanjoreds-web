import { site } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-brand">
        <em>{site.brand}</em>
      </p>
      <div className="footer-row">
        <span>{site.by}</span>
        <span>{site.location}</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
