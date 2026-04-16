import React from 'react';
import "./Hero.css";
import "../Cmain.css";
import herovideo from "../media/herovideo.mp4";

// Component definition
function Hero() {
  return (
    <>
      {/* Video Background Container */}
      <div className="video-container">
        <video src={herovideo} autoPlay loop muted playsInline />
        {/* Optional overlay for better text readability */}
        <div className="video-overlay"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          {/* Main Heading */}
          <div className="heading-wrapper">
            <h1 className="main-heading">
              Your Self-Hosted
              <br />
              Construction ERP with <span className="accent-text">AI</span>
              <br />
              Vision <span className="accent-text">&</span> Site Intelligence
            </h1>
          </div>

          {/* Description */}
          <div className="description-wrapper">
            <p className="description-text" style={{maxWidth:"800px"}}>
              SBOSS Construction ERP is a self-hosted Business Operating Smart System purpose-
              built for construction and infrastructure projects. It unifies project ERP, site operations,
              workforce management, AI computer vision, tracking, and analytics into a single on-
              premises or private cloud platform — ensuring complete control over your project
              data, site intelligence, and trade secrets.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="features-wrapper">
            <div className="feature-card">Data Sovereignty</div>
            <span className="separator">|</span>
            <div className="feature-card">On-Premises / Private Cloud</div>
            <span className="separator">|</span>
            <div className="feature-card">Privacy-First AI</div>
          </div>

          {/* Buttons */}
          <div className="buttons-wrapper">
            <button className="btn btn-primary">Request a Demo</button>
            <button className="btn btn-secondary">Explore Platform</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;