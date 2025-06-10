import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiUser, FiMail, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [activeLink, setActiveLink] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(false);
      setTimeout(() => {
        setShowNavbar(true);
      }, 150);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.replace('/', '') || 'home';
    setActiveLink(path);
  }, [location]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', icon: <FiUser />, to: '/about' },
    { label: 'Services', icon: <FiHome />, to: '/service' },
    { label: 'Contact', icon: <FiMail />, to: '/contact' },
  ];

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 10 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '70px',
          backgroundColor: 'white',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          zIndex: 9999,
          boxShadow: '0 8px 24px rgba(0,0,0,0.8)',
          backdropFilter: 'blur(10px)',
          marginBottom: '20px',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={handleLinkClick}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', zIndex: 2, textDecoration: 'none' }}
        >
          <img
            src="/logo 3.png"
            alt="ZVA Logo"
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              borderRadius: '9999px',
            }}
          />
          <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'red', letterSpacing: '1px' }}>
            ZVA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '40px',
              alignItems: 'center',
              backgroundColor: 'black',
              padding: '10px 20px',
              borderRadius: '9999px',
              zIndex: 1,
            }}
          >
            {navLinks.map((item) => (
              <motion.div whileHover={{ scale: 1.1 }} key={item.label}>
                <Link
                  to={item.to}
                  onClick={handleLinkClick}
                  style={{
                    backgroundColor: activeLink === item.to.replace('/', '') ? 'white' : 'transparent',
                    color: activeLink === item.to.replace('/', '') ? 'black' : 'white',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '8px 12px',
                    borderRadius: '9999px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {item.icon} {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Desktop Buttons */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center', zIndex: 2 }}>
            <Link to={'/register'} onClick={handleLinkClick}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ff0000',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              >
              Log in
            </motion.button>
              </Link>
              <Link to={'/register'} onClick={handleLinkClick}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              style={{
                padding: '10px 20px',
                backgroundColor: 'black',
                color: '#ff0000',
                fontSize: '1rem',
                fontWeight: 'bold',
                border: '2px solid #ff0000',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Sign up
            </motion.button>
            </Link>
          </div>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <motion.div
            whileTap={{ scale: 1.2 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ fontSize: '1.8rem', color: 'black', zIndex: 9999, cursor: 'pointer' }}
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.div>
        )}
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)',
              zIndex: 9998,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '60px',
              gap: '30px',
            }}
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={handleLinkClick}
                style={{
                  color: 'white',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                }}
              >
                {item.icon} {item.label}
              </Link>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '10px 20px',
                backgroundColor: '#ff0000',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Log in
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              style={{
                padding: '10px 20px',
                backgroundColor: 'white',
                color: '#ff0000',
                fontWeight: 'bold',
                fontSize: '1rem',
                border: '2px solid #ff0000',
                borderRadius: '5px',
              }}
            >
              Sign up
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


