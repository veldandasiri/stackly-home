import { useEffect, useState } from "react";
import ServiceCard from "./Components/ServiceCard";

export default function App() {
  const [showCloud, setShowCloud] = useState(false);
  const [showData, setShowData] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showSoftware, setShowSoftware] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const sections = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <div className="logo-box">
          <img src="/the_stackly_logo.jpg" alt="Stackly Logo" />
          <h2>Stackly</h2>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" className="section hero fade">
        <div className="hero-content">
          <h1>Empowering Businesses with Digital Innovation</h1>
          <p>Cloud • AI • Data • Software Engineering</p>
          <button>Get Started</button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section fade">
        <h2>About Stackly</h2>
        <p>
          Stackly is a global IT solutions company helping organizations
          transform through cloud computing, advanced analytics, artificial
          intelligence, and enterprise software development.
        </p>
        <p>
          We partner with businesses worldwide to build scalable, secure,
          and future-ready digital solutions.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="section fade light">
        <h2>Our Services</h2>
        <div className="cards">
          <ServiceCard className="cloud" title="Cloud Solutions" desc="We offer comprehensive cloud solutions including migration to AWS, Azure, or Google Cloud, infrastructure automation, and scalable cloud architectures to optimize your business operations." />
          <ServiceCard className="data" title="Data & Analytics" desc="Leverage advanced data analytics with our expertise in big data processing, BI tools, machine learning models, and real-time data insights to drive informed decision-making." />
          <ServiceCard className="ai" title="AI & Machine Learning" desc="Implement AI-powered solutions with custom ML models, natural language processing, computer vision, and predictive analytics to automate processes and enhance intelligence." />
          <ServiceCard className="software" title="Custom Software Development" desc="Build tailored software solutions with our full-stack development services, including web apps, mobile apps, APIs, and enterprise systems using modern technologies." />
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="section fade solutions">
        <h2>Our Solutions</h2>
        <ul>
          <li>Cloud Migration & Modernization</li>
          <li>Enterprise Data Platforms</li>
          <li>AI-Powered Business Automation</li>
          <li>SaaS Product Development</li>
          <li>DevOps & Infrastructure Automation</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section fade light">
        <h2>Contact Stackly</h2>
        <div className="form">
          <input name="name" value={form.name} onChange={handleFormChange} placeholder="Your Name" />
          <input name="email" value={form.email} onChange={handleFormChange} placeholder="Email Address" />
          <textarea name="message" value={form.message} onChange={handleFormChange} placeholder="Tell us about your requirement" />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Stackly IT Solutions. All Rights Reserved.
      </footer>
    </>
  );
}
