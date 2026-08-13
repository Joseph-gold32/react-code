import React from "react";
import "../sqi.css";

export default function CourseCard({ title, tag, desc, img, href, className, onLearn }) {
  return (
    <article className={`sqi-card ${className || ""}`}>
      <div className="sqi-card-media">
        <img src={img} alt={title} loading="lazy" />
      </div>
      <div className="sqi-card-body">
        <div className="sqi-card-title">
          <h3>{title}</h3>
          <span className="sqi-badge">+ {tag}</span>
        </div>
        <p className="sqi-desc">{desc}</p>
        {onLearn ? (
          <button className="sqi-learn" onClick={() => onLearn(title)}>
            Enrol / Learn More →
          </button>
        ) : (
          <a className="sqi-learn" href={href} aria-label={`Learn more about ${title}`}>
            Learn More →
          </a>
        )}
      </div>
    </article>
  );
}
