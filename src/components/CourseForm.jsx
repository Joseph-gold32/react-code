import React, { useState } from "react";
import "../sqi.css";

export default function CourseForm({ courseTitle, onClose }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    console.log("Enroll submit", data);
    setSent(true);
    setTimeout(() => onClose(), 1200);
  }

  return (
    <div className="sqi-modal" role="dialog" aria-modal="true">
      <div className="sqi-modal-panel">
        <button className="sqi-modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h3 className="sqi-modal-title">Enroll: {courseTitle}</h3>

        {sent ? (
          <p className="sqi-modal-sent">Thanks — we'll be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="sqi-form">
            <input type="hidden" name="course" value={courseTitle} />
            <label>
              Name
              <input name="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={3} />
            </label>
            <div className="sqi-form-actions">
              <button type="button" className="sqi-btn ghost" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="sqi-btn primary">
                Send
              
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
// res
 