export default function Projects() {
  const solutions = [
    "Cloud Migration & Modernization",
    "Enterprise Data Platforms",
    "AI-Powered Business Automation",
    "Custom SaaS Product Development",
    "DevOps & Infrastructure Automation",
  ];

  return (
    <section className="page">
      <h2>Our Solutions</h2>
      <ul className="list">
        {solutions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
