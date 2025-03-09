import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";
import { colors } from "../constants/colors";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: colors.background.main }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 pattern-grid" />
        <div className="absolute inset-0 pattern-dots" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.text.secondary }}>
            Have questions? Want to enroll? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Combined Contact Card */}
            <div className="p-8 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden"
                 style={{ 
                   backgroundColor: colors.background.secondary,
                   border: `1px solid ${colors.primary.main}20`
                 }}>
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-xl" />
              </div>

              <div className="space-y-8 relative">
                {/* Address */}
                <div className="flex items-start gap-6 group">
                  <div className="p-4 rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                       style={{ backgroundColor: `${colors.primary.main}15` }}>
                    <FaMapMarkerAlt className="text-2xl" style={{ color: colors.primary.main }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>Our Location</h3>
                    <p style={{ color: colors.text.secondary }}>
                      House #123, Road #12, Block #E<br />
                      Banani, Dhaka-1213
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6 group">
                  <div className="p-4 rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                       style={{ backgroundColor: `${colors.primary.main}15` }}>
                    <FaPhone className="text-2xl" style={{ color: colors.primary.main }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>Call Us</h3>
                    <p style={{ color: colors.text.secondary }}>+880 1234-567890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 group">
                  <div className="p-4 rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                       style={{ backgroundColor: `${colors.primary.main}15` }}>
                    <FaEnvelope className="text-2xl" style={{ color: colors.primary.main }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>Email Us</h3>
                    <p style={{ color: colors.text.secondary }}>info@Knowledgehome.edu.bd</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-6 group">
                  <div className="p-4 rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                       style={{ backgroundColor: `${colors.primary.main}15` }}>
                    <FaClock className="text-2xl" style={{ color: colors.primary.main }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text.primary }}>Working Hours</h3>
                    <p style={{ color: colors.text.secondary }}>
                      Sat - Thu: 9:00 AM - 8:00 PM<br />
                      Friday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden"
               style={{ 
                 backgroundColor: colors.background.secondary,
                 border: `1px solid ${colors.primary.main}20`
               }}>
            {/* Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent blur-xl" />
            </div>

            <div className="relative">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl focus:ring-2 transition-all duration-300 group-hover:shadow-lg"
                      style={{
                        backgroundColor: colors.background.main,
                        color: colors.text.primary,
                        border: `1px solid ${colors.primary.main}40`
                      }}
                    />
                  </div>

                  {/* Email Input */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl focus:ring-2 transition-all duration-300 group-hover:shadow-lg"
                      style={{
                        backgroundColor: colors.background.main,
                        color: colors.text.primary,
                        border: `1px solid ${colors.primary.main}40`
                      }}
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl focus:ring-2 transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      backgroundColor: colors.background.main,
                      color: colors.text.primary,
                      border: `1px solid ${colors.primary.main}40`
                    }}
                  />
                </div>

                {/* Message Input */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: colors.text.secondary }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl focus:ring-2 transition-all duration-300 resize-none group-hover:shadow-lg"
                    style={{
                      backgroundColor: colors.background.main,
                      color: colors.text.primary,
                      border: `1px solid ${colors.primary.main}40`
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 transition-all duration-500 hover:scale-[1.02] hover:shadow-lg relative overflow-hidden group"
                  style={{ 
                    backgroundColor: colors.primary.main,
                    color: colors.text.primary,
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {/* Button Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  <div className="relative">
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white" />
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="text-sm inline-block ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="text-center p-4 rounded-xl bg-green-500/20 text-green-300 animate-fadeIn">
                    Message sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
