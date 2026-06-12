import { Link } from 'react-router-dom';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { portfolioData } from '../data/portfolioData';

function ProjectCard({ project, index }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      try {
        videoRef.current.currentTime = 1;
      } catch (e) {
        // ignore if video is not loaded yet
      }
    }
  };

  const videoPath = project.content.sections[0]?.localVideoPath;
  const videoSrc = videoPath ? `${videoPath}#t=1` : '';

  return (
    <ScrollReveal 
      animation="scale" 
      delay={(index + 1) * 100}
      className="project-card glass-card"
    >
      <Link 
        to={`/projects/${project.id}`} 
        className="project-card" 
        style={{ display: 'block' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="project-card-image">
          {videoSrc ? (
            <video 
              ref={videoRef}
              src={videoSrc} 
              muted 
              loop 
              playsInline 
              preload="metadata"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          ) : (
            <img src={project.image} alt={project.title} loading="lazy" />
          )}
          <div className="project-card-overlay"></div>
        </div>
        <div className="project-card-body">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="project-tags">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <main className="section page-section">
      <ScrollReveal>
        <h1 className="section-title">Projects</h1>
      </ScrollReveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
