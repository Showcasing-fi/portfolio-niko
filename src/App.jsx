import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader.jsx';
import {
  certifications,
  contactItems,
  educationItems,
  highlights,
  languageItems,
  leadershipExperience,
  navItems,
  sectionCopy,
  siteConfig,
  skillGroups,
  workExperience,
} from './data/siteContent.js';

function SidebarSection({ id, title, children }) {
  return (
    <section className="sidebar-section" id={id}>
      <p className="sidebar-section__label">{title}</p>
      {children}
    </section>
  );
}

function ResumeSection({ id, eyebrow, title, description, children }) {
  return (
    <section className="resume-section" id={id}>
      <header className="resume-section__header">
        <p className="resume-section__eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{description}</p>
      </header>
      {children}
    </section>
  );
}

function EntryList({ items }) {
  return (
    <div className="resume-entry-list">
      {items.map((item) => (
        <article className="resume-entry" key={`${item.period}-${item.title}`}>
          <div className="resume-entry__period">{item.period}</div>
          <div>
            <h3>{item.title}</h3>
            <p className="resume-entry__organization">{item.organization}</p>
            <p className="resume-entry__description">{item.description}</p>
            {item.bullets.length ? (
              <ul className="resume-entry__bullets">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}

function App() {
  useEffect(() => {
    document.title = siteConfig.siteTitle;
    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
      metaDescription.setAttribute('content', siteConfig.metaDescription);
    }
  }, []);

  return (
    <div className="site-shell">
      <SiteHeader
        navItems={navItems}
        resumePdf={siteConfig.resumePdf}
        role={siteConfig.role}
        siteTitle={siteConfig.shortTitle}
      />

      <main className="resume-page layout-shell">
        <div className="resume-sheet">
          <aside className="resume-sidebar">
            <div className="resume-sidebar__top">
              <p className="resume-sidebar__eyebrow">Curriculum Vitae</p>
              <div className="resume-photo-frame">
                <img
                  alt="Portrait of Niko Jekkonen"
                  className="resume-photo"
                  src={siteConfig.profileImage}
                />
              </div>
            </div>

            <SidebarSection id="contact" title="Contact">
              <div className="sidebar-stack">
                {contactItems.map((item) => (
                  <a
                    className="contact-link"
                    href={item.href}
                    key={item.label}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </a>
                ))}
              </div>
            </SidebarSection>

            <SidebarSection id="education" title="Education">
              <div className="sidebar-stack">
                {educationItems.map((item) => (
                  <article className="sidebar-card" key={`${item.period}-${item.title}`}>
                    <p className="sidebar-card__period">{item.period}</p>
                    <h3>{item.title}</h3>
                    <p className="sidebar-card__meta">{item.institution}</p>
                    <ul className="sidebar-card__list">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </SidebarSection>

            <SidebarSection title="Languages">
              <ul className="plain-list">
                {languageItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SidebarSection>

            <SidebarSection id="skills" title="Skills / Expertise">
              <div className="sidebar-stack">
                {skillGroups.map((group) => (
                  <article className="sidebar-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul className="tag-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </SidebarSection>
          </aside>

          <div className="resume-content">
            <section className="resume-hero" id="top">
              <p className="resume-hero__eyebrow">Software Engineering Student</p>
              <h1>{siteConfig.shortTitle}</h1>
              <p className="resume-hero__role">{siteConfig.role}</p>
              <p className="resume-hero__summary">{siteConfig.summary}</p>

              <div className="resume-actions">
                <a className="button button--primary" href={siteConfig.resumePdf} rel="noreferrer" target="_blank">
                  Open PDF CV
                </a>
                <a className="button button--secondary" href="#experience">
                  View experience
                </a>
              </div>

              <ul className="highlight-list" aria-label="Key strengths">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <ResumeSection {...sectionCopy.experience} id="experience">
              <EntryList items={workExperience} />
            </ResumeSection>

            <ResumeSection {...sectionCopy.leadership} id="leadership">
              <EntryList items={leadershipExperience} />
            </ResumeSection>

            <ResumeSection {...sectionCopy.certifications} id="certifications">
              <ul className="certificate-grid">
                {certifications.map((item) => (
                  <li className="certificate-card" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </ResumeSection>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
