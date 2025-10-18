import React, { useRef, useEffect, useState } from 'react';
import './App.css';

function ScrollToSection() {
  const targetSectionRef = useRef(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTarget = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <h2>Interactive Scroll Demo</h2>
      <button onClick={scrollToTarget}>Go to Featured Section</button>

      <div className="section">
        <h3>Welcome to Our Demo Page</h3>
        <p>
          Explore a modern scrolling experience built with React. This demo showcases smooth scrolling, clean layouts, 
          and interactive navigation to enhance user engagement. Scroll down to see more features.
        </p>
      </div>

      <div className="section">
        <h3>About This Demo</h3>
        <p>
          This page demonstrates how to use React hooks like <code>useRef</code> for DOM interaction. You can create 
          scrollable sections that guide users smoothly through content, making your web pages more user-friendly 
          and interactive.
        </p>
      </div>

      <div ref={targetSectionRef} className="section target-section">
        <h3>🎯 Featured Section</h3>
        <p>
          Congratulations! You’ve reached the featured section. This section is highlighted for emphasis and includes 
          important content. You can place your key messages, call-to-action, or showcase your main feature here.
        </p>
      </div>

      <div className="section">
        <h3>Next Steps</h3>
        <p>
          Scroll further to discover more sections, or use the scroll-to-top button at the bottom right to quickly return 
          to the top. This demonstrates seamless navigation in a professional, user-friendly layout.
        </p>
      </div>

      <div className="section">
        <h3>Contact & Info</h3>
        <p>
          Have questions or want to explore more React features? Visit our documentation, experiment with components, 
          and build interactive web pages. Happy coding and designing beautiful interfaces!
        </p>
      </div>

      {showScrollTop && (
        <button id="scrollTopBtn" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default ScrollToSection;
