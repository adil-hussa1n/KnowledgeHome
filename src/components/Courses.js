import React from "react";
import { FaLanguage, FaDesktop, FaPalette, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { colors } from "../constants/colors";

const courses = [
  {
    id: "ielts-preparation",
    title: "IELTS Preparation",
    description: "Comprehensive IELTS training covering all four modules with expert guidance and practice tests.",
    icon: <FaGraduationCap className="text-4xl mb-4" style={{ color: colors.primary.main }} />,
    features: [
      "Master all four modules: Listening, Reading, Writing, and Speaking",
      "Learn test strategies and time management techniques",
      "Personalized feedback and practice tests",
      "Expert guidance for band score improvement"
    ],
    duration: "3 months",
    schedule: "Flexible Timings",
    level: "All Levels"
  },
  {
    id: "basic-english",
    title: "Basic English",
    description: "Build strong English language fundamentals for confident communication in any setting.",
    icon: <FaLanguage className="text-4xl mb-4" style={{ color: colors.primary.main }} />,
    features: [
      "Improve grammar, vocabulary, and communication skills",
      "Speak confidently in daily and professional settings",
      "Interactive and engaging lessons",
      "Regular speaking practice sessions"
    ],
    duration: "2 months",
    schedule: "Morning/Evening Batches",
    level: "Beginner"
  },
  {
    id: "ict",
    title: "ICT",
    description: "Master essential computer skills and digital literacy for the modern workplace.",
    icon: <FaDesktop className="text-4xl mb-4" style={{ color: colors.primary.main }} />,
    features: [
      "Fundamental computer skills and software usage",
      "Internet security and digital literacy",
      "Office applications and cloud computing",
      "Practical hands-on training"
    ],
    duration: "2 months",
    schedule: "Weekend Classes",
    level: "Beginner"
  },
  {
    id: "graphics-design",
    title: "Graphic Design",
    description: "Learn professional design tools and create stunning visual content for various media.",
    icon: <FaPalette className="text-4xl mb-4" style={{ color: colors.primary.main }} />,
    features: [
      "Learn Adobe Photoshop, Illustrator, and Canva",
      "Create social media designs, logos, and branding materials",
      "Hands-on projects to build your portfolio",
      "Industry-standard design practices"
    ],
    duration: "3 months",
    schedule: "Flexible Timings",
    level: "Beginner to Intermediate"
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Comprehensive web development training from basics to advanced concepts.",
    icon: <FaLaptopCode className="text-4xl mb-4" style={{ color: colors.primary.main }} />,
    features: [
      "HTML, CSS, JavaScript, and responsive design",
      "WordPress website development",
      "Front-end and back-end integration",
      "Real-world project experience"
    ],
    duration: "4 months",
    schedule: "Regular Classes",
    level: "Beginner to Advanced"
  }
];

const Courses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.main }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl mb-4" style={{ color: colors.text.primary }}>
            Our <span style={{ color: colors.primary.light }}>Courses</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.secondary }}>
            We offer a variety of skill-based courses designed to meet industry standards and help you succeed in your career
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              onClick={() => navigate(`/courses/${course.id}`)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              style={{ 
                backgroundColor: colors.background.secondary,
                border: `1px solid rgba(255, 255, 255, 0.1)`
              }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/10 transition-all duration-500" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-xl transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-transparent blur-xl transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="relative p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container with Animation */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <div className="relative transform group-hover:scale-110 transition-transform duration-500">
                      {course.icon}
                    </div>
                  </div>

                  {/* Title with Gradient Text */}
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-500">
                    {course.title}
                  </h3>

                  {/* Description with Fade Effect */}
                  <p className="leading-relaxed mb-6 transform group-hover:translate-y-[-4px] transition-transform duration-500" style={{ color: colors.text.secondary }}>
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="w-full space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: colors.text.secondary }}>Duration:</span>
                      <span style={{ color: colors.primary.light }}>{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span style={{ color: colors.text.secondary }}>Level:</span>
                      <span style={{ color: colors.primary.light }}>{course.level}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6 w-full text-left">
                    {course.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                        style={{ transitionDelay: `${index * 100}ms`, color: colors.text.secondary }}
                      >
                        <svg className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <div className="mt-auto opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium" style={{ 
                      backgroundColor: colors.primary.main,
                      color: colors.text.primary
                    }}>
                      View Course Details
                      <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {/* Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
            style={{ 
              backgroundColor: colors.primary.main,
              color: colors.text.primary
            }}
          >
            View All Courses
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
