import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaPlayCircle } from 'react-icons/fa';

const offers = [
  { title: "Talent Management", description: "Strategic career development for artists" },
  { title: "Event Organization", description: "Unforgettable experiences from concept to execution" },
  { title: "Music Production", description: "State-of-the-art studios with top producers" },
  { title: "Brand Promotion", description: "360° marketing solutions for maximum impact" },
  { title: "Media Coverage", description: "Global exposure across all platforms" }
];

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const HeroSection = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  const isTablet = width <= 1024;

  // State for step progression
  const [currentStep, setCurrentStep] = useState(0);
  const [currentOffer, setCurrentOffer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);


  // Manage step progression
  useEffect(() => {
    const timers = [0, 800, 1600, 2400, 3200, 4000, 5000];
    if (currentStep < timers.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, timers[currentStep + 1] - timers[currentStep]);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Auto-cycle offers after step 3
  useEffect(() => {
    if (currentStep >= 3) {
      const interval = setInterval(() => {
        setCurrentOffer(prev => (prev + 1) % offers.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  return (
    <div style={{
      position: 'relative',
      marginTop: isMobile ? '60px' : '0px',
      width: '100vw',
      height: isMobile ? 'auto' : '110vh',
      minHeight: isMobile ? '100vh' : 'auto',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)'
    }}>

      {/* Background Video with fallback */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 1
      }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.7
          }}
          src="/bbb.mp4"
          poster="/fallback-image.jpg"
        />
      </div>

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
        zIndex: 2,
      }} />

      {/* Content container */}
      <div style={{
        position: 'relative',
        zIndex: 3,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        padding: isMobile ? '2rem 1.5rem' : '4rem 6rem',
        maxWidth: '1600px',
        margin: '0 auto',
        gap: isMobile ? '3rem' : '0'
      }}>

        {/* Left content - Main headline */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '1.5rem',
          maxWidth: isMobile ? '100%' : '600px'
        }}>

          {/* Welcome message */}
          <AnimatePresence>
            {currentStep >= 0 && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '2px',
                  background: '#ff0000'
                }} />
                <span style={{
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.8)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  Welcome to ZVA
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main headline */}
          <AnimatePresence>
            {currentStep >= 1 && (
              <motion.h1
                key="headline"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: isMobile ? '1.5rem' : isTablet ? '3.5rem' : '3.5rem',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.1,
                  margin: 0
                }}
              >
                Redefining <span style={{ color: '#ff0000' }}>Global</span> Entertainment
              </motion.h1>
            )}
          </AnimatePresence>

          {/* Subheadline */}
          <AnimatePresence>
            {currentStep >= 2 && (
              <motion.p
                key="subhead"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  margin: 0
                }}
              >
                We craft unforgettable experiences that transcend boundaries and elevate brands to iconic status.
              </motion.p>
            )}
          </AnimatePresence>

          {/* Services carousel */}
          <AnimatePresence>
            {currentStep >= 3 && (
              <motion.div
                key="services"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  width: '100%',
                  marginTop: '1rem'
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: '#ff0000'
                    }} />
                    <span style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#ff0000',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Our Services
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={offers[currentOffer].title}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        padding: '1.5rem',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '12px',
                        borderLeft: '3px solid #ff0000'
                      }}
                    >
                      <h3 style={{
                        fontSize: isMobile ? '1.25rem' : '1.5rem',
                        fontWeight: 600,
                        color: 'white',
                        margin: '0 0 0.5rem 0'
                      }}>
                        {offers[currentOffer].title}
                      </h3>
                      <p style={{
                        fontSize: '1rem',
                        color: 'rgba(255,255,255,0.7)',
                        margin: 0
                      }}>
                        {offers[currentOffer].description}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Buttons */}
          <AnimatePresence>
            {currentStep >= 5 && (
              <motion.div
                key="cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: '1rem',
                  marginTop: '1.5rem',
                  width: '100%'
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: '#ff0000',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Started <FaArrowRight />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  style={{
                    padding: isMobile ? '0.875rem 1.5rem' : '1rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: 'transparent',
                    color: 'white',
                    border: '2px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FaPlayCircle /> Watch Showreel
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right content - Stats/Featured */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-end',
              gap: '2rem',
              maxWidth: '500px'
            }}
          >
            {/* Stats cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem'
            }}>
              {[
                { value: '200+', label: 'Artists Managed' },
                { value: '50+', label: 'Events Yearly' },
                { value: '100M+', label: 'Digital Reach' },
                { value: '10+', label: 'Countries' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}
                >
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: '#ff0000',
                    margin: '0 0 0.25rem 0'
                  }}>
                    {stat.value}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0
                  }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Featured artist/testimonial */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              style={{
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)',
                width: '100%'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff0000 0%, #990000 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700
                }}>
                  AS
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'white',
                    margin: '0 0 0.1rem 0'
                  }}>
                    Featured Artist
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.7)',
                    margin: 0
                  }}>
                    @artistsigned
                  </p>
                </div>
              </div>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.8)',
                fontStyle: 'italic',
                margin: 0
              }}>
                "ZVA transformed my career with their strategic vision and global network. The results speak for themselves."
              </p>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scrolling indicator */}
      <AnimatePresence>
        {currentStep >= 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span style={{
              fontSize: '0.75rem',
              color: 'rgba(255,255,255,0.6)',
              letterSpacing: '1px'
            }}>
              SCROLL TO EXPLORE
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              style={{
                width: '20px',
                height: '30px',
                borderRadius: '10px',
                border: '2px solid rgba(255,255,255,0.4)',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '5px'
              }}
            >
              <div style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: 'rgba(255,255,255,0.8)'
              }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;