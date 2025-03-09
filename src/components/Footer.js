import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { colors } from '../constants/colors';

const Footer = () => {
  return (
    <footer className="relative" style={{ backgroundColor: colors.background.secondary }}>


      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Knowledge Home
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
              Empowering minds through quality education and innovative learning experiences.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebook, link: "https://facebook.com" },
                { icon: FaTwitter, link: "https://twitter.com" },
                { icon: FaInstagram, link: "https://instagram.com" },
                { icon: FaLinkedin, link: "https://linkedin.com" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/20"
                  style={{ backgroundColor: `${colors.primary.main}15` }}
                >
                  <social.icon className="text-lg" style={{ color: colors.primary.main }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: colors.text.primary }}>Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
                { to: "/courses", text: "Our Courses" },
                { to: "/gallery", text: "Gallery" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-sm transition-all duration-300 hover:translate-x-2 flex items-center gap-3 group"
                    style={{ color: colors.text.secondary }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-400" 
                          style={{ backgroundColor: colors.primary.main }}></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: colors.text.primary }}>Contact Info</h3>
            <ul className="space-y-4">
              {[
                { icon: FaMapMarkerAlt, text: "House #123, Road #12, Block #E, Banani, Dhaka-1213" },
                { icon: FaPhone, text: "+880 1234-567890" },
                { icon: FaEnvelope, text: "info@knowledgehome.edu.bd" }
              ].map((contact, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <contact.icon 
                    className="mt-1 text-lg transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: colors.primary.main }} 
                  />
                  <span className="text-sm leading-relaxed" style={{ color: colors.text.secondary }}>
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6" style={{ color: colors.text.primary }}>Legal</h3>
            <ul className="space-y-3">
              {[
                { to: "/privacy-policy", text: "Privacy Policy" },
                { to: "/terms", text: "Terms & Conditions" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-sm transition-all duration-300 hover:translate-x-2 flex items-center gap-3 group"
                    style={{ color: colors.text.secondary }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full transition-colors duration-300 group-hover:bg-blue-400" 
                          style={{ backgroundColor: colors.primary.main }}></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t" style={{ borderColor: `${colors.primary.main}20` }}>
          <div className="px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-sm font-medium" style={{ color: colors.text.secondary }}>
              © {new Date().getFullYear()} Knowledge Home | All Rights Reserved
            </div>
            <div className="text-sm flex items-center gap-2" style={{ color: colors.text.secondary }}>
              Design & Developed by{' '}
              <a
                href="https://graffixinnovation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <span className="font-medium transition-colors duration-300 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Graffix Innovation
                </span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
