import ServiceCard from "../Components/ServiceCard";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Cloud Solutions",
      desc: "AWS, Azure, and cloud-native architecture services",
    },
    {
      id: 2,
      title: "Data & Analytics",
      desc: "Big data, business intelligence, and analytics platforms",
    },
    {
      id: 3,
      title: "AI & Machine Learning",
      desc: "Smart automation and predictive intelligence solutions",
    },
    {
      id: 4,
      title: "Software Development",
      desc: "Custom web and enterprise application development",
    },
  ];

  return (
    <section className="page">
      <h2>Our Services</h2>
      <div className="grid">
        {services.map((s) => (
          <ServiceCard key={s.id} title={s.title} desc={s.desc} />
        ))}
      </div>
    </section>
  );
}
