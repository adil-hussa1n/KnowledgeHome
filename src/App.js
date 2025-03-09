import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import CourseModal from "./components/CourseModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Gallery from "./components/Gallery";
import { colors } from "./constants/colors";

function App() {
  const location = useLocation();
  const isCourseModal = location.pathname.startsWith('/courses/');

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background.main }}>
      <Preloader />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="pt-16">
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="courses"><Courses /></section>
            <section id="gallery"><Gallery /></section>
            <section id="contact"><Contact /></section>
          </div>
        } />
        <Route path="/courses/:id" element={<CourseModal />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      {!isCourseModal && <Footer />}
    </div>
  );
}

export default App;
