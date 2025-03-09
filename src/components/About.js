import React from "react";
import { FaGraduationCap, FaUsers, FaLaptopCode, FaChalkboardTeacher, FaAward, FaHandshake } from "react-icons/fa";
import { colors } from "../constants/colors";
import instructor1 from "../images/adil.jpg";
import instructor2 from "../images/tanvir.JPG";
import instructor3 from "../images/fatima.jpeg";
import instructor4 from "../images/juber.png";
import instructor6 from "../images/saidul.jpeg";
import instructor7 from "../images/adilh.png";


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
      name: "Juber Ahmed",
      role: "CEO & Head of the institute",
      image: instructor4,
      description: "A visionary leader and educator with extensive experience in educational management and strategic planning.",
    },
    {
      name: "Adil Hussain",
      role: "Web Development Instructor",
      image: instructor7,
      description: "Expert full-stack developer with years of experience in teaching MERN stack and modern web technologies."
    },
    {
      name: "MD Saidul Islam",
      role: "IELTS Instructor",
      image: instructor6,
      description: "Experienced IELTS instructor specializing in all modules with proven success in helping students achieve their target bands."
    },
    {
      name: "Tanvir Hussain",
      role: "Graphic Design Instructor",
      image: instructor2,
      description: "Professional graphic designer skilled in Adobe Creative Suite, UI/UX design, and brand identity development."
    },
    {
      name: "Fatima Begum",
      role: "IELTS Instructor",
      image: instructor3,
      description: "Certified IELTS trainer with proven track record of helping students achieve band 7+ scores across all modules."
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

            {/* Featured Advisor */}
            <div className="mb-12">
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto"
                   style={{ 
                     backgroundColor: colors.background.secondary,
                     border: `1px solid rgba(255, 255, 255, 0.1)`
                   }}>
                <div className="grid md:grid-cols-2 gap-6 p-6">
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-xl">
                    <img
                      src={instructor1}
                      alt="Shahab Uddin"
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent opacity-70" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="inline-flex">
                      <span className="px-4 py-2 rounded-full text-sm font-medium" 
                            style={{ backgroundColor: colors.primary.main, color: colors.text.primary }}>
                        Advisor
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                      Shahab Uddin
                    </h3>
                    <p className="text-lg leading-relaxed" style={{ color: colors.text.secondary }}>
                      A distinguished educational advisor with over 15 years of experience in academic excellence. Committed to guiding institutions towards innovative teaching methodologies and student success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instructors Section */}
            <h3 className="text-2xl font-bold text-center mb-8" style={{ color: colors.text.primary }}>
              Our Expert <span style={{ color: colors.primary.light }}>Instructors</span>
            </h3>

            {/* Instructors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {instructors.map((instructor, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col"
                  style={{ 
                    backgroundColor: colors.background.secondary,
                    border: `1px solid rgba(255, 255, 255, 0.1)`
                  }}
                >
                  {/* Image Container with Aspect Ratio */}
                  <div className="relative aspect-[4/4] overflow-hidden rounded-t-xl">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                      {instructor.name}
                    </h3>
                    <div className="mb-3 inline-flex px-3 py-1 rounded-full text-sm self-start"
                         style={{ backgroundColor: colors.primary.main + '20', color: colors.primary.light }}>
                      {instructor.role}
                    </div>
                    <p className="text-sm leading-relaxed"
                       style={{ color: colors.text.secondary }}>
                      {instructor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
