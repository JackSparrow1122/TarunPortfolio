import { useEffect, useRef, useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { portfolioData } from '../data/portfolioData';

// Self-animating skill bar component
function SkillItem({ name, level }) {
  const [width, setWidth] = useState('0%');
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger width animation on scroll reveal
          setWidth(level);
          if (barRef.current) {
            observer.unobserve(barRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = barRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [level]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}</span>
      </div>
      <div className="skill-bar">
        <div 
          ref={barRef}
          className="skill-bar-fill" 
          style={{ width: width }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { categories } = portfolioData.skills;

  return (
    <main className="section page-section">
      <ScrollReveal>
        <h1 className="section-title">Technical Skills</h1>
      </ScrollReveal>

      <div className="skills-categories">
        {categories.map((category, index) => (
          <ScrollReveal 
            key={index} 
            animation="scale" 
            delay={(index + 1) * 100}
            className="skill-category glass-card"
          >
            <h3>{category.title}</h3>
            {category.items.map((item, itemIndex) => (
              <SkillItem 
                key={itemIndex} 
                name={item.name} 
                level={item.level} 
              />
            ))}
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
