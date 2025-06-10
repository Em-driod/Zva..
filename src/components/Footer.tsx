import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt, FaApple, FaGooglePlay } from 'react-icons/fa';

const Footer = () => {
  const isMobile = window.innerWidth < 768;

  const footerStyle = {
    backgroundColor: '#fff',
    color: '#111',
    padding: '4rem 2rem 2rem',
    fontFamily: 'Segoe UI, sans-serif',
    borderTop: '1px solid #ddd',
    backgroundImage: 'radial-gradient(#f5f5f5 1px, transparent 1px)',
    backgroundSize: '20px 20px',
  };

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
    textAlign: isMobile ? 'center' : 'left',
  };

  const sectionStyle = {
    padding: '0 1rem',
  };

  const titleStyle = {
    color: '#e60023',
    fontSize: '1.4rem',
    marginBottom: '1rem',
    fontWeight: 'bold',
  };

  const logoStyle: React.CSSProperties = {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '50%',
    marginBottom: '1rem',
    border: '2px solid #e60023',
  };

  const linkListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const linkItemStyle = {
    marginBottom: '0.6rem',
  };

  const linkStyle: React.CSSProperties = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  };

  const contactTextStyle: React.CSSProperties = {
    marginBottom: '0.5rem',
    fontSize: '1rem',
    color: '#666',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  };

  const inputStyle = {
    padding: '0.6rem',
    width: '100%',
    maxWidth: '280px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '0.8rem',
    fontSize: '1rem',
  };

  const buttonStyle = {
    padding: '0.6rem 1.2rem',
    backgroundColor: '#e60023',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  };

  const socialIconsStyle = {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  };

  const iconStyle = {
    fontSize: '1.2rem',
    color: '#e60023',
    cursor: 'pointer',
    transition: 'transform 0.3s',
  };

  const downloadStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginTop: '1rem',
  };

  const storeBtn = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    backgroundColor: '#111',
    color: '#fff',
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    fontSize: '0.9rem',
    cursor: 'pointer',
  };

  const bottomStyle: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '3rem',
    fontSize: '0.85rem',
    color: '#888',
    borderTop: '1px solid #eee',
    paddingTop: '1rem',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Company */}
        <div style={sectionStyle}>
          <img src="/logo 3.png" alt="ZVA Logo" style={logoStyle} />
          <h2 style={titleStyle}>ZVA Entertainment</h2>
          <p style={{ color: '#444', fontSize: '0.95rem' }}>Reaching beyond the stars.</p>
          <div style={socialIconsStyle}>
            <FaFacebookF style={iconStyle} />
            <FaTwitter style={iconStyle} />
            <FaInstagram style={iconStyle} />
          </div>
        </div>

        {/* Links */}
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Explore</h3>
          <ul style={linkListStyle}>
            {['Home', 'About Us', 'Services', 'Blog', 'Careers'].map((text, idx) => (
              <li key={idx} style={linkItemStyle}>
                <a href={`/${text.toLowerCase().replace(/\s/g, '')}`} style={linkStyle}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Support</h3>
          <ul style={linkListStyle}>
            {['Help Center', 'FAQs', 'Privacy Policy', 'Terms of Use'].map((text, idx) => (
              <li key={idx} style={linkItemStyle}>
                <a href={`/${text.toLowerCase().replace(/\s/g, '')}`} style={linkStyle}>
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Contact */}
        <div style={sectionStyle}>
          <h3 style={titleStyle}>Stay Connected</h3>
          <input type="email" placeholder="Your email address" style={inputStyle} />
          <br />
          <button style={buttonStyle}>Subscribe</button>
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Get the latest news, artist drops & offers.
          </p>
          <div style={contactTextStyle}><FaEnvelope /> info@zvaentertainment.com</div>
          <div style={contactTextStyle}><FaPhone /> +234 808 193 3806</div>
          <div style={contactTextStyle}><FaMapMarkerAlt /> Kaduna, Nigeria</div>

          <div style={downloadStyle}>
            <div style={storeBtn}><FaApple /> App Store</div>
            <div style={storeBtn}><FaGooglePlay /> Google Play</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={bottomStyle}>
        <p>© {new Date().getFullYear()} ZVA Entertainment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
