// components/ServicesOverview.js
export default function ServicesOverview() {
  const services = [
    {
      title: "Soil Analysis",
      description: "Comprehensive soil testing for optimized crop growth.",
      link: "/services#soil-analysis",
    },
    {
      title: "Crop Planning",
      description: "Tailored strategies for maximizing yields.",
      link: "/services#crop-planning",
    },
    {
      title: "Sustainable Practices",
      description: "Environmentally friendly farming techniques.",
      link: "/services#sustainable-practices",
    },
    {
      title: "Market Advisory",
      description: "Guidance on market trends and pricing.",
      link: "/services#market-advisory",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-600">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <a
                href={service.link}
                className="mt-4 inline-block text-green-500 hover:text-green-700"
              >
                Learn More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
