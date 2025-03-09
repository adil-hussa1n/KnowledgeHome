import React from "react";
import { FaGraduationCap, FaUsers, FaLaptopCode, FaChalkboardTeacher, FaAward, FaHandshake } from "react-icons/fa";
import { colors } from "../constants/colors";
import instructor1 from "../images/1.jpg";
import instructor2 from "../images/2.jpg";
import instructor3 from "../images/3.jpg";

const About = () => {
  const features = [
    {
      icon: <FaGraduationCap className="text-4xl" />,
      title: "Practical Learning",
      description: "Hands-on experience with real-world applications and projects"
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience"
    },
    {
      icon: <FaLaptopCode className="text-4xl" />,
      title: "Modern Curriculum",
      description: "Up-to-date content aligned with industry demands"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Small Class Sizes",
      description: "Personalized attention and interactive learning environment"
    },
    {
      icon: <FaAward className="text-4xl" />,
      title: "Certification",
      description: "Industry-recognized certificates upon course completion"
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Career Support",
      description: "Job placement assistance and career guidance"
    }
  ];

  const instructors = [
    {
      name: "Azad Choudhury",
      role: "Founder & Head Instructor",
      image: instructor1,
      description: "A visionary educator and entrepreneur dedicated to making education accessible and skill-based.",
      featured: true
    },
    {
      name: "John Smith",
      role: "IELTS & English Instructor",
      image: instructor2,
      description: "Expert IELTS trainer with over 8 years of experience in language teaching."
    },
    {
      name: "Michael Rahman",
      role: "ICT Specialist",
      image: instructor3,
      description: "Experienced IT professional specializing in computer fundamentals and digital literacy."
    },
    {
      name: "Sarah Ahmed",
      role: "Graphic Design Mentor",
      image: instructor2,
      description: "Creative design expert with expertise in modern design tools and techniques."
    },
    {
      name: "David Wilson",
      role: "Web Development Trainer",
      image: instructor3,
      description: "Full-stack developer passionate about teaching modern web technologies."
    }
  ];

  return (
    <div className="min-h-screen py-16" style={{ backgroundColor: colors.background.main }}>
      {/* Hero Section */}
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl p-8 mb-16" style={{ backgroundColor: colors.background.secondary }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 pattern-grid" />
            <div className="absolute inset-0 pattern-dots" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent animate-fade-in">
              About Knowledge Home
            </h1>
            <div className="space-y-6">
              <p className="text-xl leading-relaxed animate-fade-in" style={{ color: colors.text.secondary }}>
                At Knowledge Home, we believe that education should go beyond theory. Our focus is on practical learning, 
                ensuring that students not only understand concepts but can apply them in real-world scenarios.
              </p>
              <p className="text-xl leading-relaxed animate-fade-in" style={{ color: colors.text.secondary }}>
                Our goal is to empower the younger generation with essential skills, making them more competitive in the digital age. 
                Whether you want to improve your English, dive into IT, or become a creative designer, we have the right course for you!
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: colors.text.primary }}>
            Why Choose <span style={{ color: colors.primary.light }}>Knowledge Home</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden"
                style={{ 
                  backgroundColor: colors.background.secondary,
                  border: `1px solid rgba(255, 255, 255, 0.1)`
                }}
              >
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                       style={{ backgroundColor: colors.primary.main }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: colors.text.primary }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: colors.text.secondary }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-6" style={{ color: colors.text.primary }}>
              Meet Our <span style={{ color: colors.primary.light }}>Team</span>
            </h2>
            <p className="text-xl text-center max-w-3xl mx-auto mb-12" style={{ color: colors.text.secondary }}>
              Our team consists of experienced educators and industry professionals committed to providing high-quality training.
            </p>

            {/* Featured Instructor */}
            <div className="mb-12">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     border: `1px solid rgba(255, 255, 255, 0.1)`
                   }}>
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Image Container */}
                  <div className="relative h-96 md:h-full overflow-hidden rounded-xl">
                    <img
                      src={instructor1}
                      alt="Azad Choudhury"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/50 to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    <div className="mb-4 inline-flex">
                      <span className="px-4 py-2 rounded-full text-sm" 
                            style={{ backgroundColor: colors.primary.main, color: colors.text.primary }}>
                        Founder & Head Instructor
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                      Azad Choudhury
                    </h3>
                    <p className="text-xl leading-relaxed mb-6" style={{ color: colors.text.secondary }}>
                      A visionary educator and entrepreneur dedicated to making education accessible and skill-based.
                    </p>
                    <div className="flex gap-4">
                      <button className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                              style={{ backgroundColor: colors.primary.main, color: colors.text.primary }}>
                        View Profile
                      </button>
                      <button className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                              style={{ border: `2px solid ${colors.primary.light}`, color: colors.primary.light }}>
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Instructors Grid */}
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: colors.text.primary }}>
              Our Expert <span style={{ color: colors.primary.light }}>Instructors</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {instructors.filter(instructor => !instructor.featured).map((instructor, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ 
                    backgroundColor: colors.background.secondary,
                    border: `1px solid rgba(255, 255, 255, 0.1)`
                  }}
                >
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2" style={{ color: colors.text.primary }}>
                      {instructor.name}
                    </h3>
                    <p className="text-sm mb-3" style={{ color: colors.primary.light }}>
                      {instructor.role}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                      {instructor.description}
                    </p>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-colors duration-300" />
                </div>
              ))}
            </div>

            {/* View Full Team Button */}
            <div className="text-center">
              <button
                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
                style={{ 
                  backgroundColor: colors.primary.main,
                  color: colors.text.primary
                }}
              >
                View Full Team
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
