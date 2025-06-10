import { useEffect, useState } from 'react';
import { FaWhatsapp, FaInstagram, FaTimes, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('whatsapp');

  // Handle responsiveness on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const sendToWhatsApp = () => {
    const { name, email, message } = formData;
    const text = `Hello, my name is ${name} (${email}) and my message is: ${message}`;
    const whatsappUrl = `https://wa.me/2347016969298?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const socialLinks = [
    { icon: <FaWhatsapp size={24} />, name: 'WhatsApp', color: '#25D366', handle: '07016969298', url: 'https://wa.me/2347016969298' },
    { icon: <FaInstagram size={24} />, name: 'Instagram', color: '#E1306C', handle: '@zvaentertainment', url: 'https://instagram.com/zvaentertainment' },
    { icon: <FaSquareXTwitter size={24} />, name: 'Twitter', color: '#000000', handle: '@zvaentertainment', url: 'https://twitter.com/zvaentertainment' },
    { icon: <FaLinkedin size={24} />, name: 'LinkedIn', color: '#0077B5', handle: 'zvaentertainment', url: 'https://linkedin.com/company/zvaentertainment' },
    { icon: <FaEnvelope size={24} />, name: 'Email', color: '#D44638', handle: 'contact@zvaentertainment.com', url: 'mailto:contact@zvaentertainment.com' },
    { icon: <FaMapMarkerAlt size={24} />, name: 'Location', color: '#34B7F1', handle: 'Lagos, Nigeria', url: 'https://maps.google.com?q=Lagos,Nigeria' },
  ];

  return (
    <div className="contact-container" style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      width: '100%',
      marginTop: '40px',
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      overflow: 'hidden',
      backgroundColor: '#f8f9fa'
    }}>
      {/* Left - Contact Info */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#111827',
          color: '#fff',
          padding: isMobile ? '2rem 1.5rem' : '3rem',
          width: isMobile ? '100%' : '33%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: isMobile ? 'relative' : 'fixed',
          height: isMobile ? 'auto' : '100vh',
          zIndex: 10
        }}
      >
        {isMobile && (
          <div style={{ 
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '1rem'
          }}>
            <FaTimes 
              size={20} 
              color="#fff" 
              onClick={() => window.history.back()} 
              style={{ cursor: 'pointer' }}
            />
          </div>
        )}
        
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: isMobile ? '1.75rem' : '2.5rem',
            marginBottom: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            background: 'linear-gradient(90deg, #fff, #aaa)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Let's Create Something Extraordinary Together
        </motion.h2>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: '1rem',
            marginBottom: '2.5rem',
            color: '#9CA3AF',
            lineHeight: 1.6
          }}
        >
          Whether you have a question about our services, want to discuss a potential project, or just want to say hello, we'd love to hear from you.
        </motion.p>
        
        <motion.div 
          style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                color: '#fff',
                padding: '0.75rem',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: social.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {social.icon}
              </div>
              <div>
                <p style={{ 
                  margin: 0, 
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#9CA3AF',
                  marginBottom: '0.25rem'
                }}>
                  {social.name}
                </p>
                <p style={{ 
                  margin: 0, 
                  fontWeight: 500,
                  fontSize: '1rem'
                }}>
                  {social.handle}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right - Form */}
      <div style={{
        backgroundColor: '#fff',
        padding: isMobile ? '2rem 1.5rem' : '3rem',
        width: isMobile ? '100%' : '60%',
        marginLeft: isMobile ? 0 : '40%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: isMobile ? 'none' : '-5px 0 15px rgba(0,0,0,0.05)',
        position: 'relative'
      }}>
        {!isMobile && (
          <div style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            cursor: 'pointer'
          }}>
            <FaTimes 
              size={24} 
              color="#6B7280" 
              onClick={() => window.history.back()} 
              style={{ transition: 'all 0.3s ease' }}
            />
          </div>
        )}
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 style={{ 
            fontSize: isMobile ? '1.75rem' : '2.25rem',
            fontWeight: 700,
            marginBottom: '1rem',
            color: '#111827',
            lineHeight: 1.3
          }}>
            Ready to start your project?
          </h1>
          
          <p style={{ 
            fontSize: '1rem',
            marginBottom: '2rem',
            color: '#6B7280',
            lineHeight: 1.6
          }}>
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          
          <div style={{ 
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2rem',
            borderBottom: '1px solid #E5E7EB',
            paddingBottom: '0.5rem'
          }}>
            {['whatsapp', 'email'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  backgroundColor: activeTab === tab ? '#111827' : 'transparent',
                  color: activeTab === tab ? '#fff' : '#6B7280',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.form
              key={activeTab}
              onSubmit={activeTab === 'whatsapp' ? sendToWhatsApp : handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#374151'
                }}>
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Festus"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '0.875rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    fontSize: '1rem',
                    width: '100%',
                    color: '#374151',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#F9FAFB'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#374151'
                }}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '0.875rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    fontSize: '1rem',
                    width: '100%',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#F9FAFB'
                  }}
                />
              </div>
              
              <div>
                <label htmlFor="message" style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color: '#374151'
                }}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    padding: '0.875rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    fontSize: '1rem',
                    width: '100%',
                    resize: 'vertical',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#F9FAFB',
                    minHeight: '150px'
                  }}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  backgroundColor: '#111827',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  border: 'none',
                  marginTop: '0.5rem',
                  width: 'fit-content',
                  alignSelf: 'flex-start',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                {activeTab === 'whatsapp' ? (
                  <>
                    <FaWhatsapp size={18} /> Send via WhatsApp
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </motion.form>
          </AnimatePresence>
          
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#ECFDF5',
                  color: '#065F46',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#065F46"/>
                </svg>
                <span style={{ fontWeight: 500 }}>Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;