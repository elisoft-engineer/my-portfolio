export default function Footer() {
  return(
    <footer className="site-footer" role="contentinfo">
    <div className="footer-inner">
      <div>© {new Date().getFullYear()} Elkana Maina</div>
      <div className="footer-links">
        <a href="/projects">Projects</a>
        <a href="/skills">Skills</a>
        <a href="/certifications">Certifications</a>
      </div>
    </div>
  </footer>
  );
}