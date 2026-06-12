import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = portfolioData.projects.find((p) => p.id === projectId);

  // Scroll to top when loading a project detail page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <main className="project-detail" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="section-title">Project Not Found</h1>
        <Link to="/projects" className="back-link">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          Back to Projects
        </Link>
      </main>
    );
  }

  // Helper to get SVG icon for links
  const getIconSvg = (icon) => {
    switch (icon) {
      case 'github':
        return (
          <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        );
      case 'video':
        return (
          <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
        );
      default:
        return (
          <svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
        );
    }
  };

  return (
    <main className="project-detail animate-fade-in">
      <ScrollReveal>
        <Link to="/projects" className="back-link">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          Back to Projects
        </Link>
      </ScrollReveal>

      <ScrollReveal>
        <h1>{project.title}</h1>
        <p className="project-meta">{project.subtitle}</p>
      </ScrollReveal>

      <ScrollReveal className="project-detail-section glass-card" delay={100}>
        <p>{project.content.intro}</p>
      </ScrollReveal>

      {project.content.sections.map((section, sIndex) => {
        // Determine if section has visual elements only (without glass card shell)
        const isVisualOnly = !section.title && !section.paragraphs && !section.bullets && !section.subsections;

        if (isVisualOnly) {
          return (
            <ScrollReveal key={sIndex} className="project-detail-section" delay={(sIndex + 1) * 100}>
              {section.twoColImages && (
                <div className="two-col-images">
                  {section.twoColImages.map((img, imgIndex) => (
                    <img key={imgIndex} src={img.src} alt={img.alt} loading="lazy" />
                  ))}
                </div>
              )}
              {section.gridImages && (
                <div className="image-grid">
                  {section.gridImages.map((src, imgIndex) => (
                    <img key={imgIndex} src={src} alt={`Project Detail ${imgIndex}`} loading="lazy" />
                  ))}
                </div>
              )}
            </ScrollReveal>
          );
        }

        return (
          <ScrollReveal key={sIndex} className="project-detail-section glass-card" delay={(sIndex + 1) * 100}>
            {section.title && <h2>{section.title}</h2>}
            
            {section.paragraphs && section.paragraphs.map((p, pIndex) => (
              <p key={pIndex}>{p}</p>
            ))}

            {section.subsections && section.subsections.map((sub, subIndex) => (
              <div key={subIndex} style={{ marginBottom: '1.5rem' }}>
                <h3>{sub.subtitle}</h3>
                {sub.paragraphs && sub.paragraphs.map((p, pIndex) => (
                  <p key={pIndex}>{p}</p>
                ))}
                {sub.bullets && (
                  <ul>
                    {sub.bullets.map((b, bIndex) => (
                      <li key={bIndex}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {section.bullets && (
              <ul>
                {section.bullets.map((b, bIndex) => (
                  <li key={bIndex}>{b}</li>
                ))}
              </ul>
            )}

            {section.image && (
              <img src={section.image} alt={section.imageAlt || project.title} className="project-image" loading="lazy" />
            )}

            {section.youtubeId && (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', borderRadius: '12px', border: '1px solid var(--border-glass)', marginTop: '1.5rem' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${section.youtubeId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  title="YouTube Video"
                />
              </div>
            )}

            {section.driveVideoId && (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', borderRadius: '12px', border: '1px solid var(--border-glass)', marginTop: '1.5rem' }}>
                <iframe
                  src={`https://drive.google.com/file/d/${section.driveVideoId}/preview`}
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  allow="autoplay"
                  allowFullScreen
                  title="Google Drive Video"
                />
              </div>
            )}

            {section.localVideoPath && (
              <div style={{ marginTop: '1.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-glass)', background: '#000' }}>
                <video 
                  src={`${section.localVideoPath}#t=1`} 
                  controls 
                  style={{ width: '100%', display: 'block', maxHeight: '500px' }}
                />
              </div>
            )}

            {section.twoColImages && (
              <div className="two-col-images" style={{ marginTop: '1.5rem' }}>
                {section.twoColImages.map((img, imgIndex) => (
                  <img key={imgIndex} src={img.src} alt={img.alt} loading="lazy" />
                ))}
              </div>
            )}

            {section.table && (
              <table className="data-table">
                <thead>
                  <tr>
                    {section.table.headers.map((h, hIndex) => (
                      <th key={hIndex}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rIndex) => (
                    <tr key={rIndex}>
                      {row.map((cell, cIndex) => (
                        <td key={cIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </ScrollReveal>
        );
      })}

      {project.content.links && (
        <ScrollReveal className="project-links" delay={150}>
          {project.content.links.map((link, lIndex) => (
            <a key={lIndex} href={link.url} target="_blank" rel="noreferrer" className="project-link">
              {getIconSvg(link.icon)}
              {link.label}
            </a>
          ))}
        </ScrollReveal>
      )}
    </main>
  );
}
