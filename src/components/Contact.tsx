import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import type { IconType } from "react-icons";

const Contact: React.FC = () => {
  const PhoneIcon = FaPhone as unknown as React.ComponentType<{ size: number }>;
  const EnvelopeIcon = FaEnvelope as unknown as React.ComponentType<{
    size: number;
  }>;
  const GithubIcon = FaGithub as unknown as React.ComponentType<{
    size: number;
  }>;
  const LinkedInIcon = FaLinkedin as unknown as React.ComponentType<{
    size: number;
  }>;
  const TwitterIcon = FaTwitter as unknown as React.ComponentType<{
    size: number;
  }>;

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">
            <PhoneIcon size={24} />
          </span>
          <span>+91-7767090277</span>
        </div>
        <div className="contact-item">
          <span className="contact-icon">
            <EnvelopeIcon size={24} />
          </span>
          <span>youraksh@example.com</span>
        </div>
      </div>
      <div className="social-links">
        <a
          href="https://github.com/bajran"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <span>
            <GithubIcon size={32} />
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/youraksh/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <span>
            <LinkedInIcon size={32} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
