// pages/debths-founding-members.js
import { IoBusinessOutline } from "react-icons/io5";

export default function DebthsFoundingMembers() {
  return (
    <div className="min-h-screen bg-gray-100 text-black mt-32 py-4">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 text-green-400">
            Our Founding Organizations
          </h1>
        </h1>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company 1 */}
          <div className="relative bg-gray-100 p-6 rounded-lg hover:border-green-500 border-2 border-gray-200 transition-colors overflow-hidden shadow-sm">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: 'url("picture.png")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gray-100 opacity-80"></div>

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center mb-3 group">
                <IoBusinessOutline className="h-6 w-6 text-green-500 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-green-500 group-hover:text-green-400 transition-colors">
                  1. Wamenu Consulting
                </h3>
              </div>
              <p className="text-gray-600 mb-2">
                15+ years of service provision in:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Marketing Studies</li>
                <li>Strategic Plan Development</li>
                <li>Organizational Documents Preparation</li>
                <li>BDS Advisor & Entrepreneurship Training</li>
                <li>Agricultural Investment Research</li>
                <li>LRP: Mojo-Hawassa Expressway Project</li>
              </ul>
            </div>
          </div>

          {/* Company 2 */}
          <div className="relative bg-gray-100 p-6 rounded-lg hover:border-green-500 border-2 border-gray-200 transition-colors overflow-hidden shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: 'url("GTQ.png")',
                backdropFilter: "12",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-gray-100 opacity-80"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-3 group">
                <IoBusinessOutline className="h-6 w-6 text-green-500 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-green-500 group-hover:text-green-400 transition-colors">
                  2. GTQ Management System Consultancy
                </h3>
              </div>
              <p className="text-gray-500 mb-2">14+ years of experience in:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Disaster Risk Management (USAID/RTI)</li>
                <li>DRM Decentralization in Ethiopia (2020-2023)</li>
                <li>Livelihood Recovery Evaluation (2024)</li>
                <li>Documentary Film Production</li>
                <li>Policy Contribution Assessment</li>
                <li>Project Design & Proposal Writing</li>
              </ul>
            </div>
          </div>

          {/* Company 3 */}
          <div className="relative bg-gray-100 p-6 rounded-lg hover:border-green-500 border-2 border-gray-200 transition-colors overflow-hidden shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gray-100 opacity-80"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-3 group">
                <IoBusinessOutline className="h-6 w-6 text-green-500 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-green-500 group-hover:text-green-400 transition-colors">
                  3. DAWO Consulting PLC
                </h3>
              </div>
              <p className="text-gray-500 mb-2">8+ years of experience in:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Project Feasibility Studies</li>
                <li>Economic Development Consulting</li>
                <li>Food Security Consulting</li>
                <li>Management Consulting</li>
                <li>Social Affairs Consulting</li>
                <li>Biodiversity & Natural Resources</li>
              </ul>
            </div>
          </div>

          {/* Company 4 */}
          <div className="relative bg-gray-100 p-6 rounded-lg hover:border-green-500 border-2 border-gray-200 transition-colors overflow-hidden shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gray-100 opacity-80"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-3 group">
                <IoBusinessOutline className="h-6 w-6 text-green-500 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-green-500 group-hover:text-green-400 transition-colors">
                  4. Takele Nemomsa Consultancy
                </h3>
              </div>
              <p className="text-gray-500 mb-2">5+ years of experience in:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Business Development Services</li>
                <li>Feasibility Studies</li>
                <li>Soft Skill Training</li>
                <li>Investment Strategies</li>
                <li>Project Monitoring & Evaluation</li>
                <li>Human Resource Management</li>
              </ul>
            </div>
          </div>

          {/* Company 5 */}
          <div className="relative bg-gray-100 p-6 rounded-lg hover:border-green-500 border-2 border-gray-200 transition-colors overflow-hidden shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gray-100 opacity-80"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-3 group">
                <IoBusinessOutline className="h-6 w-6 text-green-500 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-green-500 group-hover:text-green-400 transition-colors">
                  5. Ajar Consultancy PLC
                </h3>
              </div>
              <p className="text-gray-500 mb-2">Expertise in:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Bio-Entrepreneurship</li>
                <li>Food Safety & HACCP</li>
                <li>Agricultural Knowledge</li>
                <li>Project Proposals (Biogas/Bioenergy)</li>
                <li>Value Chain Management</li>
                <li>Livestock Feed Improvement</li>
              </ul>
            </div>
          </div>

          {/* Company 6 */}
          <div className="relative bg-gray-100 p-6 rounded-lg hover:border-green-500 border-2 border-gray-200 transition-colors overflow-hidden shadow-sm">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gray-100 opacity-80"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-3 group">
                <IoBusinessOutline className="h-6 w-6 text-green-500 mr-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-green-500 group-hover:text-green-400 transition-colors">
                  6. Elily Technology
                </h3>
              </div>
              <p className="text-gray-500 mb-2">Specializing in:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Software Development</li>
                <li>Digital Transformation</li>
                <li>Digital Marketing</li>
                <li>E-commerce Solutions</li>
                <li>IT Consulting Services</li>
                <li>Mobile Apps Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
