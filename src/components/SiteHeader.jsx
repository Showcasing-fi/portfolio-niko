function SiteHeader({ navItems, siteTitle, role, resumePdf }) {
  return (
    <header className="site-header">
      <div className="layout-shell site-header__inner">
        <a className="site-header__brand" href="#top">
          <span className="site-header__brand-mark">NJ</span>
          <span className="site-header__brand-copy">
            <strong>{siteTitle}</strong>
            <small>{role}</small>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className="site-header__nav">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="site-header__cta"
          href={resumePdf}
          rel="noreferrer"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </header>
  );
}

export default SiteHeader;
