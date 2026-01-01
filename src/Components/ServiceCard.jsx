import { useState } from "react";

export default function ServiceCard({ title, desc, className }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`card ${className}`} onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      {expanded && (
        <div className="card-content">
          <p>More details about {title} coming soon...</p>
        </div>
      )}
    </div>
  );
}
