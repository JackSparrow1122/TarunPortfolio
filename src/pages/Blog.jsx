import ScrollReveal from '../components/ScrollReveal';
import { portfolioData } from '../data/portfolioData';

export default function Blog() {
  const { date, title, content } = portfolioData.blog;

  return (
    <main className="section page-section">
      <ScrollReveal>
        <h1 className="section-title">Blog</h1>
      </ScrollReveal>

      <div className="blog-container">
        <ScrollReveal animation="scale" className="blog-card glass-card">
          <p className="blog-date">{date}</p>
          <h2>{title}</h2>

          {content.map((block, index) => {
            if (block.type === 'heading') {
              return <h3 key={index}>{block.text}</h3>;
            }
            return <p key={index}>{block.text}</p>;
          })}
        </ScrollReveal>
      </div>
    </main>
  );
}
