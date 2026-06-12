import ScrollReveal from '../components/ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <main className="section page-section">
      <ScrollReveal>
        <h1 className="section-title">Work Experience</h1>
      </ScrollReveal>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <ScrollReveal 
              animation="scale" 
              delay={(index + 1) * 100}
              className="timeline-card glass-card"
            >
              <img src={exp.logo} alt={exp.company} className="company-logo" />
              <h3>{exp.role}</h3>
              <p className="company">
                {exp.company} &middot; {exp.type}
              </p>
              <p className="meta">
                {exp.period} &middot; {exp.location}
              </p>
              <ul>
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        ))}
      </div>
    </main>
  );
}
