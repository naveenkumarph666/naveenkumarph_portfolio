import React, { useEffect, useRef, useState } from "react";
import "./ProjectsSection.css";
import ReadMore from "../ui/Readmore";

function ProjectsSection({ projects }) {
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCount] = useState(3);  // show 3 cards at once

  useEffect(() => {
    // After first render, measure one card's width
    const container = containerRef.current;
    if (container) {
      const card = container.querySelector('.project-card');
      if (card) {
        const width = card.clientWidth;
        setCardWidth(width);
      }
    }
  }, [projects]);

  const scrollNext = () => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({
      left: cardWidth * visibleCount,
      behavior: 'smooth'
    });
  };

  const scrollPrev = () => {
    const container = containerRef.current;
    if (!container) return;

    container.scrollBy({
      left: -cardWidth * visibleCount,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <button
        onClick={scrollPrev}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1
        }}
        >
        ‹
      </button>
      <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div
        ref={containerRef}
        style={{
          display: "flex",
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '16px',  // spacing between cards
        }}
        className="projects-grid"
      >
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img src={proj.image} alt="Cover" height={300} width={400} style={{minHeight:200,minWidth:200,margin:10}}/>
            <h3>{proj.title}</h3>
            <ReadMore text={proj.description} maxChars={200}/>
            <button onClick={() => window.open(proj.github, "_blank")}>
              {proj.portfolio_text}
            </button>
          </div>
        ))}
      </div>
      </section>
      <button
        onClick={scrollNext}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1
        }}
      >
        ›
      </button>
    </div>
  );
}



//   return (
//     <scroll horizontal>

//       <h2>Projects</h2>
//       <div 

//       </div>
//     </section>
//    </scroll>
//   );
// };

export default ProjectsSection;
