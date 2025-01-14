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
          Our Story
        </h2>
        <p className="mt-4 text-xl text-gray-700 font-openSans">
          Discover how we started and our journey to making a difference in the
          world of agriculture.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Story Item 1 */}
          <div className="group relative overflow-hidden rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/hero-1.jpg" // Make sure the image is in the 'public' folder
              alt="Our Journey"
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <p className="text-lg font-semibold">The Beginning</p>
            </div>
          </div>

          {/* Story Item 2 */}
          <div className="group relative overflow-hidden rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/hero-2.jpg"
              alt="Our Growth"
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <p className="text-lg font-semibold">Growth & Challenges</p>
            </div>
          </div>

          {/* Story Item 3 */}
          <div className="group relative overflow-hidden rounded-lg shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <Image
              src="/hero-3.jpg"
              alt="Our Impact"
              width={400}
              height={250}
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
              <p className="text-lg font-semibold">Making an Impact</p>
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
