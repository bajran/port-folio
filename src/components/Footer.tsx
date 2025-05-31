import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  const renderIcon = (Icon: any) => {
    return React.createElement(Icon, { size: 20 });
  };

  const renderSocialIcon = (Icon: any) => {
    return React.createElement(Icon, { size: 24 });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Me</h3>
          <div className="contact-info">
            <a href="tel:+1234567890" className="contact-item">
              <span className="contact-icon">{renderIcon(FaPhone)}</span>
              +1 (234) 567-890
            </a>
            <a href="mailto:your.email@example.com" className="contact-item">
              <span className="contact-icon">{renderIcon(FaEnvelope)}</span>
              your.email@example.com
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <div className="social-links">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {renderSocialIcon(FaGithub)}
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {renderSocialIcon(FaLinkedin)}
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              {renderSocialIcon(FaTwitter)}
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Location</h3>
          <p>San Francisco, CA</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} AKSHAY BIYANI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
