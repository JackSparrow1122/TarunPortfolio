import ScrollReveal from '../components/ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const educationList = portfolioData.education;

  return (
    <main className="section page-section">
      <ScrollReveal>
        <h1 className="section-title">Education</h1>
      </ScrollReveal>

      <div className="timeline">
        {educationList.map((edu, index) => (
          <div key={index} className="timeline-item">
            <ScrollReveal 
              animation="scale" 
              delay={(index + 1) * 100}
              className="timeline-card glass-card"
            >
              <h3>{edu.degree}</h3>
              <p className="company">{edu.institution}</p>
              <p className="meta">{edu.period} &middot; {edu.location}</p>
              <ul>
                {edu.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        ))}
      </div>

      {portfolioData.certificates && (
        <section style={{ marginTop: '5rem' }}>
          <ScrollReveal>
            <h2 className="section-title">Certificates &amp; Achievements</h2>
          </ScrollReveal>
          <div className="projects-grid" style={{ marginTop: '2rem' }}>
            {portfolioData.certificates.map((cert, index) => (
              <ScrollReveal
                key={index}
                animation="scale"
                delay={(index + 1) * 100}
                className="project-card glass-card"
                style={{ cursor: 'default' }}
              >
                <div className="project-card-image" style={{ height: '240px', background: 'rgba(255,255,255,0.01)' }}>
                  <img
                    src={cert.imagePath}
                    alt={cert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '12px' }}
                    loading="lazy"
                  />
                  <div className="project-card-overlay" style={{ opacity: 0.1 }}></div>
                </div>
                <div className="project-card-body">
                  <h3 style={{ color: 'var(--accent-green)', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{cert.title}</h3>
                  <p>{cert.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
