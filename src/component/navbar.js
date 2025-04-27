import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (hash) => {
    if (location.pathname !== '/') {
      // Navigate to the homepage first
      navigate('/');
      setTimeout(() => {
        window.location.hash = hash; // Set the hash after navigating to the homepage
      }, 100); // Add a small delay to ensure the homepage is loaded
    } else {
      window.location.hash = hash; // Directly set the hash if already on the homepage
    }
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <nav
      className="fixed top-0 z-50 w-full border border-solid border-neutral-200 bg-white/70 px-4 py-3 backdrop-blur md:px-20 md:py-5"
      id="section-nav"
      data-aos="none"
    >
      {/* Desktop Navigation */}
      <div className="md:text-md hidden items-center justify-start gap-2 text-sm md:flex">
        <a href="#" onClick={() => handleNavigation('#')} className="px-2 font-bold">
          Home
        </a>
        <a href="#section-projects" onClick={() => handleNavigation('#section-projects')} className="px-2 font-bold">
          Projects
        </a>
        <a href="#section-contact" onClick={() => handleNavigation('#section-contact')} className="px-2 font-bold">
          About me
        </a>
        <a href="#section-tech-stack" onClick={() => handleNavigation('#section-tech-stack')} className="px-2 font-bold">
          Tech stack
        </a>
        <a href="#section-certificates" onClick={() => handleNavigation('#section-certificates')} className="px-2 font-bold">
          Certificates
        </a>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex items-center gap-1 px-2 py-1 text-gray-800 hover:text-black"
          aria-label="Toggle navigation menu"
        >
          <span className="text-sm font-medium">Menu</span>
          {isMobileMenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md border border-gray-300 bg-white py-1 shadow-lg">
            <a href="#" onClick={() => handleNavigation('#')} className="block px-4 py-2 text-sm hover:bg-gray-100">
              Home
            </a>
            <a href="#section-projects" onClick={() => handleNavigation('#section-projects')} className="block px-4 py-2 text-sm hover:bg-gray-100">
              Projects
            </a>
            <a href="#section-contact" onClick={() => handleNavigation('#section-contact')} className="block px-4 py-2 text-sm hover:bg-gray-100">
              About me
            </a>
            <a href="#section-tech-stack" onClick={() => handleNavigation('#section-tech-stack')} className="block px-4 py-2 text-sm hover:bg-gray-100">
              Tech stack
            </a>
            <a href="#section-certificates" onClick={() => handleNavigation('#section-certificates')} className="block px-4 py-2 text-sm hover:bg-gray-100">
              Certificates
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;