import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaLanguage, FaDesktop, FaPalette, FaLaptopCode, FaGraduationCap, FaClock, FaCalendarAlt, FaUserGraduate, FaCheckCircle, FaTimes } from "react-icons/fa";
import { colors } from "../constants/colors";

const courseData = {
  "ielts-preparation": {
    title: "IELTS Preparation",
    icon: <FaGraduationCap className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Comprehensive IELTS training program designed to help you achieve your target band score. Our expert instructors will guide you through all four modules with personalized feedback and proven strategies.",
    modules: [
      "Listening - Practice with various accents and contexts",
      "Reading - Time management and question techniques",
      "Writing - Task 1 and Task 2 strategies",
      "Speaking - Mock tests and confidence building"
    ],
    features: [
      "Master all four modules with expert guidance",
      "Learn proven test strategies and techniques",
      "Regular practice tests and evaluations",
      "Time management skills development",
      "Personalized feedback on performance",
      "Study materials and resources provided"
    ],
    duration: "3 months",
    schedule: "Flexible Timings",
    level: "All Levels",
    batchSize: "10-12 students",
    price: "15,000 BDT",
    instructor: "MD Saidul Alam"
  },
  "basic-english": {
    title: "Basic English",
    icon: <FaLanguage className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Build a strong foundation in English language skills with our comprehensive course. Focus on practical communication skills for both daily life and professional settings.",
    modules: [
      "Grammar fundamentals and usage",
      "Vocabulary building and pronunciation",
      "Conversation practice and fluency",
      "Writing and composition skills"
    ],
    features: [
      "Interactive learning environment",
      "Regular speaking practice sessions",
      "Grammar and vocabulary exercises",
      "Real-life conversation scenarios",
      "Written assignments and feedback",
      "Progress tracking and assessments"
    ],
    duration: "2 months",
    schedule: "Morning/Evening Batches",
    level: "Beginner",
    batchSize: "12-15 students",
    price: "8,000 BDT",
    instructor: "Fatima Begum"
  },
  "ict": {
    title: "ICT (Information and Communication Technology)",
    icon: <FaDesktop className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Master essential computer skills and digital literacy required in today's workplace. Learn to use common software applications and understand basic technology concepts.",
    modules: [
      "Computer basics and operating systems",
      "Microsoft Office Suite (Word, Excel, PowerPoint)",
      "Internet and email essentials",
      "Cloud computing and online tools"
    ],
    features: [
      "Hands-on practical training",
      "Individual computer access",
      "Real-world application exercises",
      "Internet security awareness",
      "File management skills",
      "Basic troubleshooting"
    ],
    duration: "2 months",
    schedule: "Weekend Classes",
    level: "Beginner",
    batchSize: "15 students",
    price: "10,000 BDT",
    instructor: "Juber Ahmed"
  },
  "graphics-design": {
    title: "Graphic Design",
    icon: <FaPalette className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Learn professional graphic design skills using industry-standard tools. Create impressive designs for various media platforms and build a strong portfolio.",
    modules: [
      "Adobe Photoshop essentials",
      "Adobe Illustrator fundamentals",
      "Canva for quick designs",
      "Design principles and typography"
    ],
    features: [
      "Industry-standard software training",
      "Portfolio development",
      "Logo and brand design projects",
      "Social media graphics creation",
      "Print and digital design basics",
      "Real client project experience"
    ],
    duration: "3 months",
    schedule: "Flexible Timings",
    level: "Beginner to Intermediate",
    batchSize: "12 students",
    price: "15,000 BDT",
    instructor: "Tanvir Hussain"
  },
  "web-development": {
    title: "Web Development",
    icon: <FaLaptopCode className="text-5xl" style={{ color: colors.primary.main }} />,
    description: "Comprehensive web development course covering both front-end and back-end technologies. Learn to build modern, responsive websites from scratch.",
    modules: [
      "HTML5 and CSS3 fundamentals",
      "JavaScript and modern ES6+",
      "Responsive design principles",
      "WordPress development"
    ],
    features: [
      "Hands-on coding practice",
      "Real-world project development",
      "Responsive design techniques",
      "WordPress theme customization",
      "Basic backend integration",
      "Hosting and deployment"
    ],
    duration: "4 months",
    schedule: "Regular Classes",
    level: "Beginner to Advanced",
    batchSize: "10 students",
    price: "20,000 BDT",
    instructor: "Adil Hussain"
  }
};

const CourseModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToCourses = () => {
    navigate('/#courses');
    setTimeout(() => {
      const coursesSection = document.getElementById('courses');
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16" style={{ backgroundColor: colors.background.main }}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.text.primary }}>Course not found</h2>
          <button
            onClick={handleBackToCourses}
            className="px-6 py-3 rounded-lg flex items-center mx-auto"
            style={{ 
              backgroundColor: colors.primary.main,
              color: colors.text.primary
            }}
          >
            <FaTimes className="mr-2" />
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16" style={{ backgroundColor: colors.background.main }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="relative overflow-hidden rounded-2xl mb-12" style={{ backgroundColor: colors.background.secondary }}>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 pattern-grid" />
            <div className="absolute inset-0 pattern-dots" />
          </div>
          
          <div className="relative p-8 sm:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="mb-6 inline-flex">
                  <span className="px-4 py-2 rounded-full text-sm font-medium" 
                        style={{ backgroundColor: colors.primary.main, color: colors.text.primary }}>
                    {course.level}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                  {course.title}
                </h1>
                <p className="text-xl leading-relaxed mb-6" style={{ color: colors.text.secondary }}>
                  {course.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-blue-400" />
                    <span style={{ color: colors.text.secondary }}>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-400" />
                    <span style={{ color: colors.text.secondary }}>{course.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUserGraduate className="text-blue-400" />
                    <span style={{ color: colors.text.secondary }}>{course.batchSize}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold" style={{ color: colors.primary.light }}>{course.price}</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                          style={{ backgroundColor: colors.primary.main, color: colors.text.primary }}>
                    Enroll Now
                  </button>
                  <button className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                          style={{ border: `2px solid ${colors.primary.light}`, color: colors.primary.light }}>
                    Download Syllabus
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-48 rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-500"
                     style={{ backgroundColor: `${colors.primary.main}20` }}>
                  {course.icon}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Modules */}
          <div className="rounded-xl p-8" style={{ backgroundColor: colors.background.secondary }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text.primary }}>
              Course Modules
            </h2>
            <div className="space-y-4">
              {course.modules.map((module, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 hover:scale-102"
                  style={{ backgroundColor: colors.background.main }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                       style={{ backgroundColor: colors.primary.main }}>
                    {index + 1}
                  </div>
                  <p style={{ color: colors.text.secondary }}>{module}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="rounded-xl p-8" style={{ backgroundColor: colors.background.secondary }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text.primary }}>
              Course Features
            </h2>
            <div className="grid gap-4">
              {course.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <FaCheckCircle className="text-blue-400 flex-shrink-0" />
                  <p style={{ color: colors.text.secondary }}>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructor */}
        <div className="rounded-xl p-8" style={{ backgroundColor: colors.background.secondary }}>
          <h2 className="text-2xl font-bold mb-6" style={{ color: colors.text.primary }}>
            Course Instructor
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
              <FaUserGraduate className="text-2xl" style={{ color: colors.primary.main }} />
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ color: colors.text.primary }}>
                {course.instructor}
              </h3>
              <p style={{ color: colors.text.secondary }}>Expert Instructor</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleBackToCourses}
            className="px-6 py-3 rounded-lg flex items-center mx-auto transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: colors.primary.main,
              color: colors.text.primary
            }}
          >
            <FaTimes className="mr-2" />
            Back to Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseModal;
