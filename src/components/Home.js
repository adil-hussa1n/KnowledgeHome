import React from "react";
import { colors } from "../constants/colors";
import { FaGraduationCap, FaLaptopCode, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ backgroundColor: colors.background.main }}>
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-950/95 to-slate-950/90" />
          {/* CSS Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 pattern-grid" />
            <div className="absolute inset-0 pattern-dots" />
          </div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent animate-fade-in">
              Knowledge Home
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300">
              Empowering the Next Generation
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Where learning meets innovation! Our mission is to equip the youth with practical skills that enhance their career prospects and make them tech-savvy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a 
                href="#courses" 
                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden group"
                style={{ 
                  backgroundColor: colors.primary.main,
                  color: colors.text.primary
                }}
              >
                <span className="relative z-10">Explore Courses</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
                style={{ 
                  border: `2px solid ${colors.primary.light}`,
                  color: colors.primary.light
                }}
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>



      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Home;
