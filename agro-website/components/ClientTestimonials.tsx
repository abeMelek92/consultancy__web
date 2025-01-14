// components/ClientTestimonials.js
export default function ClientTestimonials() {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "AgriConsult helped us increase our crop yield by 30%. Their expertise is unmatched!",
    },
    {
      name: "Jane Smith",
      feedback:
        "Thanks to their sustainable practices, we’ve reduced costs while protecting the environment.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700">
          What Our Clients Say
        </h2>
        <div className="mt-8 space-y-6">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
            >
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <cite className="mt-4 block text-gray-800 font-bold">
                - {testimonial.name}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
