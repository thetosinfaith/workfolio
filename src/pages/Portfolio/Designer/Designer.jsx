import React, { useEffect, useState } from 'react';
import { FaFigma, FaBehance } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import Navbar from '../../../components/Navbar/Navbar';
import designsData from '../../../data/designs.json';
import './Designer.css';

const Designer = () => {
  const [designs, setDesigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setDesigns(designsData);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load designs');
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Navbar />

      <section className="designer-projects-section">
        <h1 className="designer-projects-title">Some Case Studies</h1>

        {isLoading ? (
          <div className="designer-spinner">Loading...</div>
        ) : error ? (
          <div className="designer-error-message">{error}</div>
        ) : (
          <div className="designer-projects-grid">
            {designs.length > 0 ? (
              designs.map((design, index) => (
                <div key={index} className="designer-project-card">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="designer-project-image"
                  />
                  <div className="designer-project-details">
                    <h3 className="designer-project-title">{design.title}</h3>
                    <p className="designer-project-description">{design.description}</p>
                    <ul className="designer-tools">
                      {design.tools_used.map((tool, idx) => (
                        <li key={idx} className="designer-tool-item">{tool}</li>
                      ))}
                    </ul>
                    <div className="designer-links">
                      <a
                        href={design.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="designer-link-item"
                      >
                        <CiViewList /> Read CaseStudy
                      </a>
                      <a
                        href={design.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="designer-link-item"
                      >
                        <FaFigma /> View Design
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div>No designs available</div>
            )}
          </div>
        )}
      </section>
    </>
  );
};

export default Designer;