import React from "react";
import "./Experience.css";
import { useReveal } from "../hooks/useReveal";

const Experience = () => {
  const { ref, isVisible } = useReveal();
  return (
    <section
      id="experience"
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="container">
        <h2>Experience</h2>
        <p className="experience-subtitle">
          The path so far, from the classroom to production code.
        </p>

        <div className="experience-road">
          <div className="experience-stop">
            <div className="experience-track">
              <span className="experience-node experience-node--photo">
                <img src="/university-logo.jpg" alt="University logo" />
              </span>
              <span className="experience-line" />
            </div>
            <div className="experience-content">
              <h3>Computer Science and Engineering Student</h3>
              <p className="experience-meta">Intergrated Master's Degree</p>
            </div>
          </div>

          <div className="experience-stop">
            <div className="experience-track">
              <span className="experience-node experience-node--logo">
                <img src="/footy-logo.png" alt="Footy Greece logo" />
              </span>
            </div>
            <div className="experience-content">
              <h3>Full Stack Software Engineer</h3>
              <p className="experience-meta">
                Footy Greece &middot; November 2025 &ndash; Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
