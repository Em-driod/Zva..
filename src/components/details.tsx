import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Details = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjusted breakpoint for better tablet support

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100vw', // Use 100vw for full viewport width
    backgroundImage: 'url("/acostic.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed', // Creates a subtle parallax effect
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: isMobile ? '2rem 1rem' : '4rem 2rem', // More padding on desktop
    position: 'relative',
    boxSizing: 'border-box',
    overflow: 'hidden',
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(27, 26, 26, 0.7)', // Slightly darker overlay for better text contrast
    zIndex: 0,
  };

  const textCenterStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '1024px',
    zIndex: 1,
    position: 'relative',
    padding: '1rem',
    marginBottom: isMobile ? '2rem' : '3rem', // Spacing before the grid
  };

  const whiteTextStyle: React.CSSProperties = {
    color: 'white',
    fontSize: isMobile ? '1.2rem' : '2rem', // Responsive font size
    marginBottom: isMobile ? '0.5rem' : '1rem',
    letterSpacing: '0.1em',
    fontWeight: 'bold',
    textTransform: 'uppercase', // Professional touch
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly less transparent
    padding: '0.5rem 1.5rem',
    borderRadius: '0.5rem',
    display: 'inline-block',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)', // Subtle shadow
  };

  const titleStyle: React.CSSProperties = {
    color: 'black',
    fontSize: isMobile ? '2rem' : '2.5rem', // Larger, more impactful title on desktop
    fontWeight: 'bold',
    marginBottom: isMobile ? '1rem' : '1.5rem',
    backgroundColor: 'white',
    padding: '0.5rem 1.5rem',
    borderRadius: '0.5rem',
    display: 'inline-block',
    boxShadow: '0 5px 20px rgba(0,0,0,0.2)', // More pronounced shadow for title
  };

  const paragraphStyle: React.CSSProperties = {
    color: 'white',
    fontSize: isMobile ? '1rem' : '1.2rem', // Responsive paragraph size
    lineHeight: 1.6, // Better readability
    marginBottom: isMobile ? '2rem' : '3rem',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjusted transparency
    padding: '1rem 1.5rem',
    borderRadius: '0.5rem',
    maxWidth: '800px', // Constrain paragraph width
    margin: '0 auto', // Center the paragraph
  };

  const gridContainerStyle: React.CSSProperties = {
    display: 'grid', // Using CSS Grid for more control
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive grid columns
    justifyContent: 'center',
    gap: '2rem', // More spacing between cards
    width: '100%',
    maxWidth: '1200px', // Max width for grid
    padding: isMobile ? '0 1rem' : '0 2rem',
    boxSizing: 'border-box',
    zIndex: 1,
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: 'white',
    padding: '2rem', // More padding
    borderRadius: '1.25rem', // Slightly larger border-radius
    boxShadow: '0 8px 30px rgba(190, 13, 13, 0.15)', // Enhanced shadow
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    zIndex: 1,
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover
    cursor: 'pointer', // Indicate interactivity
  };


  const iconContainerStyle: React.CSSProperties = {
    width: isMobile ? '3rem' : '3.5rem', // Larger icon size
    height: isMobile ? '3rem' : '3.5rem',
    backgroundColor: '#000', // Solid black background
    borderRadius: '50%',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  };

  const iconInnerStyle: React.CSSProperties = {
    fontSize: isMobile ? '1.5rem' : '2rem', // Icon size responsive
    color: 'white',
  };

  const cardTitleStyle: React.CSSProperties = {
    color: 'black',
    fontSize: isMobile ? '1.5rem' : '1.75rem', // Responsive title size
    fontWeight: 700, // Bolder
    marginBottom: '0.75rem',
  };

  const cardDescriptionStyle: React.CSSProperties = {
    color: '#333', // Darker gray for better contrast
    fontSize: isMobile ? '0.9rem' : '1rem', // Responsive description size
    lineHeight: 1.5,
  };

  const servicesData = [
    {
      icon: '📈', // Marketing icon (you'd replace with an actual SVG/icon component)
      title: 'Strategic Marketing',
      description: 'Cut through the noise with targeted campaigns. We craft unique narratives that resonate with your audience and drive engagement.',
    },
    {
      icon: '💻', // Development icon
      title: 'Digital Platform Development',
      description: 'Build robust and user-friendly online experiences. From websites to custom applications, we ensure your platforms are high-performing assets.',
    },
    {
      icon: '🎨', // Creative icon
      title: 'Innovative Creative Production',
      description: "Express your brand's unique identity. Our creative team delivers captivating visuals and compelling stories that set you apart.",
    },
    {
      icon: '📊', // Strategy icon
      title: 'Forward-Thinking Business Strategy',
      description: 'Navigate the digital landscape with confidence. Our immersive discovery process identifies opportunities and defines clear pathways to success.',
    },
  ];

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={textCenterStyle}>
        <p style={whiteTextStyle}>OUR DIGITAL SOLUTIONS</p> {/* Updated text for clarity */}
        <h1 style={titleStyle}>Your Full-Spectrum Digital Partner</h1> {/* More impactful title */}
        <p style={paragraphStyle}>
          "We offer innovative entertainment and digital solutions designed to elevate your brand's presence."
        </p>
      </div>

      <div style={gridContainerStyle}>
        {servicesData.map((item, index) => (
          <motion.div
            key={index}
            style={cardStyle}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: index * 0.2 }} // Slightly faster transition
            whileHover={{
              transform: 'translateY(-10px)',
              boxShadow: '0 15px 40px rgba(190, 13, 13, 0.25)',
            }} // Apply hover effect
          >
            <div style={iconContainerStyle}>
              <span style={iconInnerStyle}>{item.icon}</span> {/* Render the icon */}
            </div>
            <h2 style={cardTitleStyle}>{item.title}</h2>
            <p style={cardDescriptionStyle}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Details;