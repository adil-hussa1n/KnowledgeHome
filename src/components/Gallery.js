import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaExpand, FaTimes } from 'react-icons/fa';
import { colors } from '../constants/colors';

// Import images
import image1 from '../images/ac1.png';
import image2 from '../images/ac2.png';
import image3 from '../images/ac3.png'; 
import image10 from '../images/ac4.png';

import image4 from '../images/class.png';
import image5 from '../images/ieltsclass.png';
import image6 from '../images/designclass.png';

import image7 from '../images/ws1.png';
import image8 from '../images/ws2.png';
import image9 from '../images/ws3.png';

// Gallery data with imported images
const galleryImages = [
  // Workshops
  {
    id: 1,
    url: image7,
    title: 'IELTS Workshop Session',
    category: 'Workshops'
  },
  {
    id: 2,
    url: image8,
    title: 'Graphics Design Workshop',
    category: 'Workshops'
  },
  {
    id: 3,
    url: image9,
    title: 'Web Development Workshop',
    category: 'Workshops'
  },
  
  // Classes
  {
    id: 4,
    url: image5,
    title: 'English Speaking Class',
    category: 'Classes'
  },
  {
    id: 5,
    url: image4,
    title: 'ICT Training Session',
    category: 'Classes'
  },
  {
    id: 6,
    url: image6,
    title: 'Web Development Class',
    category: 'Classes'
  },

  // Achievements
  {
    id: 7,
    url: image10,
    title: 'IELTS Success Stories',
    category: 'Achievements'
  },
  {
    id: 8,
    url: image3,
    title: 'Student Certifications',
    category: 'Achievements'
  },
  {
    id: 9,
    url: image2,
    title: 'Competition Winners',
    category: 'Achievements'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('All');

  const categories = ['All', 'Classes', 'Workshops', 'Achievements'];

  const filteredImages = currentCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory);

  const handlePrevImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };

  const handleNextImage = () => {
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: colors.background.main }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold sm:text-5xl mb-4" style={{ color: colors.text.primary }}>
            Our <span style={{ color: colors.primary.light }}>Gallery</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text.secondary }}>
            A glimpse of our classes, workshops, and student achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentCategory === category ? 'scale-110' : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: currentCategory === category ? colors.primary.main : colors.background.secondary,
                color: currentCategory === category ? colors.text.primary : colors.text.secondary,
                border: `1px solid ${colors.primary.main}`
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              style={{ backgroundColor: colors.background.secondary }}
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative pb-[66.67%]">
                <img
                  src={image.url}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{image.title}</h3>
                    <span className="text-blue-300 text-sm">{image.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button
            className="px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center gap-2"
            style={{ 
              backgroundColor: colors.primary.main,
              color: colors.text.primary
            }}
          >
            View More Images
            <FaExpand className="text-lg" />
          </button>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <div className="relative w-full max-w-6xl mx-4">
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <FaTimes className="text-white text-xl" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <FaArrowLeft className="text-white text-xl" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300"
              >
                <FaArrowRight className="text-white text-xl" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <span className="text-blue-300">{selectedImage.category}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery; 