"use client";

const staff = [
  {
    name: "Tulu Tola (PhD)",
    expertise: "Environmental Science Specialist",
    role: "Deputy Chairperson",
  },
  {
    name: "Wasihun Amenu (PhD Cand.)",
    expertise: "Senior Business Consultant",
    role: "CEO & Founder",
  },
  {
    name: "Elfnesh Tolera (MBA)",
    expertise: "BDS and Entrepreneurship Consultant",
    role: "Board Secretary",
  },
  {
    name: "Gutu Teso (PhD)",
    expertise: "Senior Economist",
    role: "Board of Director",
  },
  {
    name: "Tadese WoldeMariam (PhD)",
    expertise: "Senior Forester & Ecologist",
    role: "Board of Director",
  },
  {
    name: "Worku Gadisa (PhD)",
    expertise: "Management and Entrepreneurship Consultant",
    role: "Board of Director",
  },
  {
    name: "Abdi Tena (MSc)",
    expertise: "Software Engineer",
    role: "Board of Director",
  },
  {
    name: "Gebeyehu Getachew (MSc)",
    expertise: "Climate Change and Development Senior Expert",
    role: "General Manager",
  },
];

const roleStyles = {
  "CEO & Founder": {
    border: "border-green-600",
    bg: "bg-green-50",
    badge: "bg-green-600 text-white",
  },
  "Deputy Chairperson": {
    border: "border-teal-500",
    bg: "bg-teal-50 mt-10",
    badge: "bg-teal-500 text-white",
  },
  "Board Secretary": {
    border: "border-blue-500",
    bg: "bg-blue-50 mt-10",
    badge: "bg-blue-500 text-white",
  },
  "Board of Director": {
    border: "border-gray-300",
    bg: "bg-gray-50",
    badge: "bg-gray-600 text-white",
  },
  "General Manager": {
    border: "border-yellow-500",
    bg: "bg-yellow-50",
    badge: "bg-yellow-500 text-white",
  },
};

export default function StaffLineup() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text mb-12">
          Our Board
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {staff.map((member, index) => {
            const styles = roleStyles[member.role] || {
              border: "border-gray-200",
              bg: "bg-white",
              badge: "bg-gray-500 text-white",
            };

            return (
              <div
                key={index}
                className={`rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 ${styles.border} ${styles.bg}`}
              >
                <img
                  src="./pro.jpg"
                  alt={`${member.name}'s portrait`}
                  className="h-48 w-full object-cover object-top"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {member.expertise}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${styles.badge}`}
                  >
                    {member.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
