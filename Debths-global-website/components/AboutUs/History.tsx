// components/OurStory.js
import Image from "next/image";
import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const OurStory = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className={`text-4xl font-extrabold ${funnelDisplay.className} text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text`}
        >
          Our core values
        </h2>
        <p className="mt-4 text-xl text-gray-700 font-openSans">
          Discover how we started and our journey to making a difference in the
          world of agriculture.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Story Item 1 */}
          <div className="group flex flex-col overflow-hidden rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl max-w-sm mx-auto">
            <Image
              src="/handshake-1.jpg" // Ensure the image is in the 'public' folder
              alt="Our Journey"
              width={400}
              height={250}
              className="w-full h-1/3 object-cover group-hover:opacity-80 transition-opacity duration-300"
              aria-label="Image depicting a handshake, symbolizing partnership and trust."
            />
            <div className="flex w-full h-1/2 flex-col items-center justify-center text-gray-600 p-4">
              <h2
                className={`text-2xl font-extrabold text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text mb-2`}
              >
                Dependability
              </h2>
              <p className="text-md font-openSans text-center px-5">
                Our services are dependable because we produce quality services
                at the right time. We are punctual, take initiative,
                detail-oriented, and adhere to the client’s policy and code of
                conduct. We stick to consistency, ethical behavior, good
                communication, and reliability under all conditions.
              </p>
            </div>
          </div>

          {/* Story Item 2 */}
          <div className="group flex flex-col overflow-hidden rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl max-w-sm mx-auto">
            <Image
              src="/bold.jpg" // Ensure the image is in the 'public' folder
              alt="Our Journey"
              width={400}
              height={250}
              className="w-full h-1/3 object-cover object-top group-hover:opacity-80 transition-opacity duration-300"
              aria-label="Image depicting a handshake, symbolizing partnership and trust."
            />
            <div className="flex w-full h-1/2 flex-col items-center justify-center text-gray-600 p-4">
              <h2
                className={`text-2xl font-extrabold text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text mb-2`}
              >
                Bold
              </h2>
              <p className="text-md font-openSans text-center px-5">
                We deliver services with exceptionally talented professionals
                who want to take on our client’s challenges. We believe in
                consistent reinforcement and encouragement. We do not pursue
                work processes and results for which we are not bold enough.
              </p>
            </div>
          </div>

          {/* Story Item 3 */}
          <div className="group flex flex-col overflow-hidden rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl max-w-sm mx-auto">
            <Image
              src="/gear-3.jpg" // Ensure the image is in the 'public' folder
              alt="Our Journey"
              width={400}
              height={250}
              className="w-full h-1/3 object-cover group-hover:opacity-80 transition-opacity duration-300"
              aria-label="Image depicting a handshake, symbolizing partnership and trust."
            />
            <div className="flex w-full h-1/2 flex-col items-center justify-center text-gray-600 p-4">
              <h2
                className={`text-2xl font-extrabold text-transparent bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text mb-2`}
              >
                Entrepreneurship
              </h2>
              <p className="text-md font-openSans text-center px-5">
                We bring a different flavor to the clients, and approach their
                challenges through innovative ways that ensure the adaptability
                of our clients to the situation. We work to transform our
                client’s challenges into opportunities for growth.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-8 py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 rounded-lg shadow-md text-lg font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
